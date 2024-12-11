import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import useTodoList from '../hooks/useTodoList';
import useDeleteTodo from '../hooks/useDeleteTodo';
const Todo = ({ id, text, deleteMutaion }) => {
    const onclick = () => {
        deleteMutaion.mutate(id);
    };
    return (
        <HStack borderBottom={'1px solid '} p={2} w={'full'}>
            <Text w={'full'}>{text}</Text>{' '}
            <IconButton
                color={'white'}
                icon={<DeleteIcon />}
                variant={'outline'}
                _hover={{ color: 'black' }}
                cursor={'pointer'}
                isLoading={deleteMutaion.isLoading}
                onClick={onclick}
            />
        </HStack>
    );
};
const TodoList = () => {
    const { todoListData } = useTodoList();
    const deleteMutaion = useDeleteTodo();
    const todoList = todoListData;
    if (!todoList) {
        return <Text>No Todos are present...</Text>;
    }
    return (
        <VStack w={'full'}>
            {todoList ? (
                todoList.map((todoItem) => (
                    <Todo
                        id={todoItem.id}
                        text={todoItem.todo}
                        deleteMutaion={deleteMutaion}
                        key={todoItem.id}
                    />
                ))
            ) : (
                <Text>No todos </Text>
            )}
        </VStack>
    );
};

export default TodoList;
