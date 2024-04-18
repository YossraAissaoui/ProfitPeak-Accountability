import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList.js';
import NewTask from './components/NewTask.js';
import SideNav from './components/SideNav.js';
import getBlockchain from './ethereum.js';
import './style.css';
import './components/SideNav.css';


function App() {

  return (
  
   <div id="App">
     
      <BrowserRouter>
      <div className="container">
      <div className="col-sm-12">
        <SideNav />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/productpricing" element={<ProductPricing />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
      </div>
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;

 //pages
 function Dashboard(){
 return <h1>This is dashboard page</h1>   
}
function Inventory(){
  return <h1>This is Inventory page</h1>   
 }
function ProductPricing(){
  return <h1>This is Product Pricing page</h1>   
} 

function TodoList(){
  const [tasks, setTasks] = useState(undefined);
  const [todo, setTodo] = useState(undefined);

  useEffect(() => {
     const init = async () => {
       const { todo } = await getBlockchain();
       const tasks = await todo.getTasks();
       setTodo(todo);
       setTasks(tasks);
     };
     init();
  }, []);

  const createTask = async (content, author) => {
    const tx = await todo.createTask(content, author)
    await tx.wait();
    const tasks = await todo.getTasks(); 
    setTasks(tasks);
  }

  const toggleDone = async id => {
    const tx = await todo.toggleDone(id);
    await tx.wait();
    const tasks = await todo.getTasks(); 
    setTasks(tasks);
  }
  return (

    <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <NewTask createTask={createTask} />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <TaskList tasks={tasks} toggleDone={toggleDone} />
      </div>
    </div>
  </div>

  );  
 }

function Reports(){
  return <h1>This is the Reports page</h1>   
}
function Settings(){
  return<h1>This is the Settings page</h1>   
 }