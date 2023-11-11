import './Tasks.css';
import {Button, useColorMode} from '@chakra-ui/react';
import React from 'react';

export default function Tasks(props) {

    const [count, setCount] = React.useState(0);
    const {colorMode, toggleColorMode} = useColorMode()

    const handleClick = () => {
        document.querySelector('.task').remove()
        document.querySelector('.ButtonDelete').remove()
        
    };

    return (
        <div>
            <div className = 'task'>{props.task}</div>
            <Button 
                className = 'ButtonDelete' 
                onClick = {handleClick}
            >              
                Удалить
            </Button>
        </div> 
    );
}