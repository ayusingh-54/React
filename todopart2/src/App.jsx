import AppName from './component/Appname'
import Addtodo from './component/Addtodo'
import TodoItems from './component/todoitems';
import './App.css'

function App() {
  const todoitems = [
    {
      name: "buy milk",
      date: "21/03/2024"
    },
    {
      name: "buy milk",
      date: "21/03/2024"
    },
   
  ];

  return (
    <>
      <center className='todocontaner'>
        <div className="bg-blue-500">
          <AppName />
          <Addtodo />
          <TodoItems todoitems = {todoitems}></TodoItems>
        </div>
      </center>
    </>
  )
}

export default App