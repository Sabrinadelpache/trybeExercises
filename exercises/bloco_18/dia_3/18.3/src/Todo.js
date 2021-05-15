import { useState } from 'react';
import useTasks from './useTasks';

export default function Todo() {
    const addTaskByButton = useTasks();
    const [task, setTask] = useState('');

    const handleInput = ({ target }) => {
        setTask(target.value)
    }

    return (
        <>
            <input type='text' placeholder='Task content' onChange={handleInput}/>
            <button type='button' onClick={addTaskByButton(task)}>Add task</button>
        </>
    )
}