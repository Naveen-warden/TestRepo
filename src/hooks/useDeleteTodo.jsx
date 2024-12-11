import { useMutation, useQueryClient } from '@tanstack/react-query';
import useTodoList from './useTodoList';
const useDeleteTodo = () => {
    const { todoListData } = useTodoList();
    const queryClient = useQueryClient();
    const deleteTodo = (id) => {
        const newTodoList = todoListData.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(newTodoList));
        return newTodoList;
    };
    const deleteMutation = useMutation({
        mutationKey: ['delete todo'],
        mutationFn: deleteTodo,
        onSuccess: () => {
            console.log('delete success');
            queryClient.invalidateQueries(['todo list']);
        },
    });
    return deleteMutation;
};
export default useDeleteTodo;
