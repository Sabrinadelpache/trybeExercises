import { useEffect, useState } from 'react';
import showTodo from './showTodo';

const useTasks = () => {
    const [taskArray, setTaskArray] = useState([]);

    const addTaskByButton = e => {
        setTaskArray({
            ...taskArray,
            taskArray: e,
        })
    };
    return { addTaskByButton, taskArray};
}

export default useTasks;