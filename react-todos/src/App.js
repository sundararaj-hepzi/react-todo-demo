import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);


  const [todos, setTodos] = useState( [{
    rowNumber:1, rowDescription: 'Feed puppy', rowAssigned: 'Hema'
  },
{
  rowNumber:2, rowDescription: 'Watering Plant', rowAssigned: 'Hermet'
 
},
{
  rowNumber:3, rowDescription: 'Cleaning Kitchen', rowAssigned: 'Helen'
 
},
{
  rowNumber:4, rowDescription: 'organize Groceries', rowAssigned: 'Reena'
 
},
{
  rowNumber:5, rowDescription: 'painting', rowAssigned: 'George'
 
}
])

const addTodo = (description, assigned) => {
  let rowNumber = 0;
  if (todos.length > 0) {
    rowNumber = todos[todos.length - 1].rowNumber + 1;
  } else {
    rowNumber = 1;
  }
    const newTodo = {
      rowNumber: todos.length + 1, 
      rowDescription: description,
      rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    // console.log(todos);
  
}

const deleteTodo = (deleteTodoRowNumber) => {
  let filtered = todos.filter(function(value){
    return value.rowNumber != deleteTodoRowNumber;
  });
  setTodos(filtered);
}
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Hepzibha Todo's
        </div>
        <div className='card-body'>
         <TodoTable todos={todos} deleteTodo={deleteTodo}/>
         <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)} >
          {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;