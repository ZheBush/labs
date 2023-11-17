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
            <Heading 
                p='30px' 
                h='70px' 
                textTransform="uppercase" 
                color='rgb(220 220 220)'
            >
                Мои задачи
            </Heading>
            <List className='CustomSrollbar'
                h="60vh"
                w="60vw"
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
                    e.preventDefault()
                    createTodoHandler(text)
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
                h='13vh'
                w='25vw'
                backgroundColor='rgb(255 160 0)'
                borderRadius='10px'
                borderColor='rgb(255 160 0)'
                borderWidth='1px'
            >
                <Input
                    variant='unstyled'
                    placeholder='Напишите задачу:'
                    color='rgb(220 220 220)'
                    backgroundColor = 'rgb(50 50 50)'
                    border='2px solid orange'
                    maxLength={80}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    h="13vh"
                    _placeholder = {{
                        color: 'rgba(180 180 180)',
                        
                        
                    }}
                    _hover = {{
                        cursor: 'text'
                    }}
                />
                <Button 
                    isDisabled={!text.trim().length}
                    position='relative'
                    top='-15px'
                    type="submit"
                    w="20vw"
                    h='8vh'
                    background="rgb(255, 160, 0)"
                    color="black"
                    borderRadius = '8px'
                    _hover={{
                        cursor: 'pointer'
                    }}
                >
                    Добавить задачу
                </Button>
            </chakra.form>
        </Flex>
    )
}