import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Button, HStack, Input } from '@chakra-ui/react';
import useAddTodo from '../hooks/useAddTodo';
const AddTodo = () => {
    const [currentTodo, setCurrentTodo] = useState('');
    const { mutateAsync: addTodo, isLoading: isAddingTodo } = useAddTodo();

    return (
        <HStack w={'full'} spacing={2}>
            <Input
                borderColor={'whiteAlpha.700'}
                placeholder="Enter your todo ..."
                borderRadius={'none'}
                color={'white'}
                onChange={(e) => setCurrentTodo(e.target.value)}
            />
            <Button
                leftIcon={<AddIcon />}
                bg={'white'}
                border={'1px solid white'}
                outline={'1px '}
                borderRadius={'none'}
                margin={'none'}
                cursor={'pointer'}
                isLoading={isAddingTodo}
                loadingText={'Adding'}
                h={'2.7rem'}
                onClick={() => addTodo(currentTodo)}
            >
                Add
            </Button>
        </HStack>
    );
};

export default AddTodo;
