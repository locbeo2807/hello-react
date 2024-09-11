import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const DangNhap = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Giả lập API call cho đăng nhập
    setTimeout(() => {
      setLoading(false);
      const mockUser = {
        username: username,
        avatar: 'https://via.placeholder.com/150' // URL ảnh đại diện
      };
      localStorage.setItem('user', JSON.stringify(mockUser));
      history.push('/');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Đăng Nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Tên Người Dùng</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Mật Khẩu</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {loading ? 'Đang Đăng Nhập...' : 'Đăng Nhập'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DangNhap;
