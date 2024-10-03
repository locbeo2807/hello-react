// src/pages/Login.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/login', data);
            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
            setMessage('Đăng nhập thành công');
            navigate('/');
        } catch (error) {
            console.error('Lỗi đăng nhập', error);
            setMessage('Đăng nhập thất bại');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md mt-10">
            <div className="md:flex">
                <div className="w-full p-3 px-6 py-10">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold">Đăng Nhập</h1>
                    </div>
                    {message && <div className={`mb-4 text-center text-lg ${message.includes('thành công') ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Tên Người Dùng</label>
                            <input 
                                {...register('username', { required: 'Tên người dùng là bắt buộc' })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Mật Khẩu</label>
                            <input 
                                type="password" 
                                {...register('password', { required: 'Mật khẩu là bắt buộc' })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600">Đăng Nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
