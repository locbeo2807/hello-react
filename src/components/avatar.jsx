// ~/src/components/Avatar.jsx
import React from 'react';

export default function Avatar() {
	// b1: định nghĩa hàm xử lý
	const clickHandler = (event)=>{
		alert('Yay, you just clicked the Avatar component')
        event.stopPropagation();
        console.log(event)
        

	}

	// b2: truyền vào element qua prop 'onClick'
  return (
    <img
		className='avatar'
		src='https://cdn.pixabay.com/photo/2016/08/08/09/avatar-1577909_640.png' alt='User Avatar'
		width='64px'
		onClick={clickHandler}
    />
  );
}
