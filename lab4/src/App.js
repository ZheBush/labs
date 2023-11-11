import Tasks from "./components/Tasks";
import './index.css';

export default function App() {

  const tasks = [
    {task: 'Изучить React'}, 
    {task: 'Сделать лабу'}, 
    {task: 'Защитить лабу'},
  ];

  return (
    <div>
      <h1 class = 'header'>Мои задачи</h1>
      <Tasks task = {tasks[0].task}/>
      <Tasks task = {tasks[1].task}/>
      <Tasks task = {tasks[2].task}/>
    </div>

  );
}