import React from "react";
export default function counter(props) {
    console.log(props);
    return(
        <div>            
            <button onClick={props.numberIncrease}>Tăng</button>
            <button onClick={props.numberDecrease}>Giảm</button>
        </div>
    )
}