import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/todo_slice';


function App() {

  const dispatch = useDispatch();
  const todos = useSelector((state)=> state.todos)


  return (
    <>
      <button onClick={()=> dispatch(fetchTodos())}>Fetch Data todos </button>
      
      {todos.loading && 
        <div>
          Melumat fech olunur...
          <i class="fa fa-refresh fa-2x spinner" aria-hidden="true"></i>
        </div>
      }
      {todos.error && todos.error}

      <div className='main'>
        {todos.data.length > 0 && 
          
          todos.data.map((todo) => (
            <div key={todo.id} className='todo'>
              <h2 className='title'>{todo.title}</h2>
              <input type="checkbox" checked={todo.completed} className='todoActice'/>
            </div>
          ))
        
        }
      </div>

    </>
  );
}

export default App;
