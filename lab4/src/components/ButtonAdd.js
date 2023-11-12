import { useState } from 'react';
import './ButtonAdd.css';
import {Button, Input} from '@chakra-ui/react';
import Tasks from "./Tasks";

export default function AddTask(props) {

    var tasksList = [];

    function addTask() {
        const nameTask = '123';
        tasksList.push(nameTask);
    }
    
    return (
        <div>
            <Tasks task = {tasksList}/>
            <Button 
                className = 'ButtonAdd'
                onClick = {addTask}
            >
                Добавить задачу
            </Button>
        </div>
    );
}

var tasks = [
    {task: 'Изучить React'},
    {task: 'Сделать лабу'},   
    {task: 'Защитить лабу'},
  ];