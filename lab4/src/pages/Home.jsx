import React, { useState } from 'react'
import {
    chakra,
    Button,
    List,
    ListItem,
    Heading,
    Flex,
    Input,
    Text,
} from '@chakra-ui/react'
import './CustomScrollbar.css'

export const Home = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const createTodoHandler = (text) => {
        setTodos((prevState) => [...prevState, { id: Date.now(), text }])
        setText('')
        // a = [1,2,3] => b = [...[1,2,3], 4,5,6] = [1,2,3,4,5,6]
    }

    const removeTodoHandler = (id) => {
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    }

    return (
        <Flex
            flexDirection="column"
            h='100vh'
            gap="2rem"
            alignItems="center"
            background='rgb(50 50 50)'
        >
            <Heading p='30px' h='70px' textTransform="uppercase" color='rgb(220 220 220)'>Мои задачи</Heading>
            <List className='CustomSrollbar'
                h="60vh"
                w="70vw"
                display="flex"
                border="2px solid orange"
                borderRadius="15px"
                p="10px"
                flexDirection="column"
                overflowY = 'auto'
            >
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom="1px solid gray"
                        py="8px"
                        color='rgb(220 220 220)'
                        
                    >
                        <Text>{todo.text}</Text>
                        <Button
                            onClick={() => removeTodoHandler(todo.id)}
                            background="rgb(255, 160, 0)"
                            color="rgb(31 31 31)"
                            _hover={{
                                background: 'orange.200',
                            }}
                        >
                            Удалить
                        </Button>
                    </ListItem>
                ))}
            </List>
            
            <chakra.form
                onSubmit={(e) => {
                    e.preventDefault() // Без перезагрузки приложения после добавления задачи
                    createTodoHandler(text)
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
                color='rgb(220 220 220)'
            >
                <Input
                    border='2px solid orange'
                    borderRadius='7px'
                    maxLength={80}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    w="300px"
                    h="32px"
                    placeholder="Напишите задачу:"
                    _placeholder = {{
                        color: 'rgb(220 220 220)',
                    }}
                    _hover = {{
                        borderColor: 'orange.200',
                        cursor: 'pointer'
                    }}
                />
                <Button
                    isDisabled={!text.trim().length}
                    type="submit"
                    w="fit-content"
                    background="rgb(255, 160, 0)"
                    color="rgb(31 31 31)"
                    borderRadius = '8px'
                    _hover={{
                        background: 'orange.200',
                        cursor: 'pointer'
                    }}
                >
                    Добавить задачу
                </Button>
            </chakra.form>
        </Flex>
    )
}