import AppName from './component/Appname'
import Addtodo from './component/Addtodo'
import Addtodo1 from './component/ddtodo1'
import Addtodo2 from './component/Addtodo2'
import './App.css'
function App() {
  return (
    <>
      <center class='todocontaner'>
        <div className="bg-blue-500">
        <AppName />
        <Addtodo />
        <div className="my-5">
        <Addtodo1 />
          <Addtodo2 />
        </div>
       </div>
        
      </center>


    </>
  )
}

export default App
