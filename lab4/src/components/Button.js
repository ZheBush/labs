import React from "react";

export default function Button() {
    
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button type = 'button' onClick = {handleClick}></button>
            {count}
        </div>
    );
}