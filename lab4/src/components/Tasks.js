import './Tasks.css';
import {Button} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Tasks(props) {

    const [todos, setTodos] = useState([])
    const [text, setText] = useStaet('')

    const handleClick = () => {
        document.querySelector('.task').remove()
        document.querySelector('.ButtonDelete').remove()   
    };

    const createTask = (text) => {
        setTodos((prevState) => [...prevState, {id: Date.now(), text}])
        setText('')
    }

    const removeTask = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }

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