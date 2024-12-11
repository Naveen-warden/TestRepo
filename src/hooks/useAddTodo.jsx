import { useMutation, useQueryClient } from '@tanstack/react-query';
import useTodoList from './useTodoList';

const addUserTodo = async (todo) => {
    let res = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo,
            completed: false,
            userId: 1,
        }),
    });
    res = await res.json();
    return res;
};
const addTodoLocalStorage = (newTodoList) => {
    localStorage.setItem('todos', JSON.stringify(newTodoList));
};

const useAddTodo = () => {
    const { todoListData } = useTodoList();
    const queryClient = useQueryClient();

    const onSuccess = (data) => {
        console.log('onSuccess', data);
        queryClient.invalidateQueries(['todo list']);
    };

    const mutation = useMutation({
        mutationKey: ['Add new todoList'],
        mutationFn: async (newTodoText) => {
            let todo = await addUserTodo(newTodoText);
            todo.id = todoListData.length + 1;
            todoListData.push(todo);
            addTodoLocalStorage(todoListData);
            return todo;
        },
        onSuccess: onSuccess,
    });
    return mutation;
};

export default useAddTodo;
