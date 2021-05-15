import useTasks from './useTasks'
const showTodo = ({taskArray}) => {taskArray.map(task => <li>{task}</li>)}

export default showTodo;