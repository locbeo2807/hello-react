// api/server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const jwtSecret = 'your_jwt_secret';

// Registration endpoint
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Đăng ký thất bại' });
        }
        res.json({ success: true, message: 'Đăng ký thành công' });
    });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Lỗi đăng nhập' });
        }

        if (results.length === 0) {
            return res.status(400).json({ success: false, message: 'Tên người dùng không tồn tại' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Mật khẩu không chính xác' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });

        res.json({ success: true, token, user: { id: user.id, username: user.username, email: user.email } });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
