import './Tasks.css';
import ButtonDelete from './ButtonDelete';
import React from 'react';
import tasksList from './ButtonAdd';

export default function Tasks(props) {

    return (
        <div>
            <div className = 'task'>{props.task}{tasksList}</div>
            <ButtonDelete/>
        </div> 
    );
}