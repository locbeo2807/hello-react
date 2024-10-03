import React, { useState } from 'react';
import './index.css';
import Register from './components/register';
import Login from './components/login';
import ToDo from './components/ToDo';
import ToDoList from "./pages/ToDoList";
function LoginApp() {
   const [listAccount,setlistAccount]=useState([])
   const[isLogin,setIsLogin]=useState(true)
   const createAccount=(account)=>{
      const found=listAccount.find((checkAccount)=>{
         return checkAccount.email===account.email;
      })
      if (found) {
         alert('email da ton tai')

         
      }else{
         alert('Dang ki thanh cong')
         setlistAccount([...listAccount,account])
      }
      
   }
   const accountLogin=(account)=>{
      const found=listAccount.find((item)=>{
         return account.email===item.email && account.password===item.password;
      })
      if (found) {
         alert('dang nhap thanh cong');
      }else{
         alert('dang nhap that bai');
      }
   }

   
   const renderForm=() => {
      if (isLogin) {
         return <Login toggleForm={changeForm} accountLogin={accountLogin}/>
      
      }else{
         return <Register stwichform={changeForm} createAccount={createAccount} />
      }
   }
   const changeForm =()=> {
      setIsLogin(!isLogin)  
   }
   
   
return(
   <div>
       {/* {renderForm()} */}
       <ToDoList/>
       
   </div>
   
);
}
export default LoginApp;
