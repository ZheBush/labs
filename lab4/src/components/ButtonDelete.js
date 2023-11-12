import './ButtonDelete.css';
import {Button} from '@chakra-ui/react';

export default function ButtonDelete(props) {

    const removeTask = () => {
        document.querySelector('.ButtonDelete').remove()
        document.querySelector('.task').remove()
    }

    return (
        <div>
            <Button 
                className = 'ButtonDelete' 
                onClick = {removeTask}
            >           
                Удалить
            </Button>
        </div> 
    );
}