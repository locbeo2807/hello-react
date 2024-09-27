// src/pages/Register.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ setUser }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const password = watch('password');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/register', data);
            setUser(response.data);
            setMessage('Đăng ký thành công');
            navigate('/dang-nhap');
        } catch (error) {
            console.error('Lỗi đăng ký', error);
            setMessage('Đăng ký thất bại');
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md mt-10">
            <div className="md:flex">
                <div className="w-full p-3 px-6 py-10">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold">Đăng Ký</h1>
                    </div>
                    {message && <div className={`mb-4 text-center text-lg ${message.includes('thành công') ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Tên Người Dùng</label>
                            <input 
                                {...register('username', { 
                                    required: 'Tên người dùng là bắt buộc', 
                                    minLength: {
                                        value: 3, 
                                        message: 'Tên người dùng phải có ít nhất 3 ký tự'
                                    },
                                    pattern: {
                                        value: /\d/,
                                        message: 'Tên người dùng phải chứa ít nhất một số'
                                    }
                                })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Email</label>
                            <input 
                                {...register('email', { 
                                    required: 'Email là bắt buộc', 
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Địa chỉ email không hợp lệ'
                                    }
                                })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Mật Khẩu</label>
                            <input 
                                type="password" 
                                {...register('password', { 
                                    required: 'Mật khẩu là bắt buộc', 
                                    minLength: {
                                        value: 6, 
                                        message: 'Mật khẩu phải có ít nhất 6 ký tự'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z]).*$/,
                                        message: 'Mật khẩu phải có ít nhất một chữ cái viết hoa'
                                    }
                                })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Xác Nhận Mật Khẩu</label>
                            <input 
                                type="password" 
                                {...register('confirmPassword', { 
                                    required: 'Xác nhận mật khẩu là bắt buộc', 
                                    validate: value => value === password || 'Mật khẩu không khớp'
                                })} 
                                className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600">Đăng Ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
