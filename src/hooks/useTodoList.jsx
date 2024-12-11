import { useQuery } from '@tanstack/react-query';
const fetchData = async () => {
    let res = await fetch('https://dummyjson.com/todos/user/1');
    res = await res.json();
    localStorage.setItem('todos', JSON.stringify(res.todos));
    res = localStorage.getItem('todos');
    return JSON.parse(res);
};

const useTodoList = () => {
    const getTodoListData = () => {
        const todoList = localStorage.getItem('todos');

        if (todoList === null) return fetchData();
        return JSON.parse(todoList);
    };
    const data = useQuery({
        queryKey: ['todo list'],
        queryFn: () => {
            return getTodoListData();
        },
    });
    return { ...data, todoListData: data.data };
};

export default useTodoList;
