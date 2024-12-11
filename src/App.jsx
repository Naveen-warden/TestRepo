import TodoList from './Components/TodoList';
import { Box, Heading, IconButton, VStack } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import AddTodo from './Components/AddTodo';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useTodoList from './hooks/useTodoList';

const queryClient = new QueryClient();

function App() {
    const [todos, setTodos] = useState([]);
    // const fetchData = async (url) => {
    //   let res = await fetch("https://dummyjson.com/todos/user/1");
    //   res = await res.json();
    //   localStorage.setItem("todos", JSON.stringify(res.todos));
    //   setTodos(res.todos);
    // };
    // const todosList = localStorage.getItem("todos");

    // const { data } = useQuery({
    //   queryKey: ["todos list"],
    //   queryFn: fetch("https://dummyjson.com/todos/user/1")
    //     .then((res) => res.json())
    //     .then((res) => console.log("______> ", res)),
    // });
    // // if (todosList == null) fetchData("https://dummyjson.com/todos/user/1");
    // // else setTodos(JSON.parse(todosList));
    return (
        <Box w={'100%'} color={'white'} h={'100vh'} bgGradient="linear(to-l, #7928CA, #FF0080)">
            <VStack px={8} py={4}>
                <IconButton
                    variant={'outline'}
                    border={'none'}
                    borderRadius={'50%'}
                    bg={'white'}
                    aspectRatio={'1/1'}
                    alignSelf={'flex-end'}
                    icon={<SunIcon />}
                    cursor={'pointer'}
                />
                <Heading fontSize={['1rem', '2rem', '3rem']}>Todo Application</Heading>
                <VStack bg={'whiteAlpha.300'} w={['10rem', '20rem', '35rem']} p={8} borderRadius={4}>
                    <QueryClientProvider client={queryClient}>
                        <AddTodo setTodos={setTodos} />
                        <TodoList todoList={todos} />
                    </QueryClientProvider>
                </VStack>
            </VStack>
        </Box>
    );
}

export default App;
