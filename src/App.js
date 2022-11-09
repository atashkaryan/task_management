
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './components/AdminPage';
import Boards from './components/Boards';
import UserPage from './components/UsersPage/index'
import UsersContextProvider from './UsersContextProvider/UsersContextProvider';

function App() {
  return (
 
   

   <UsersContextProvider>
   <div className="App">
   <Routes>
    
     <Route path='/' element={<AdminPage />}/>
     <Route path='/users/:id' element={<UserPage />} />
     <Route path='/users/:Userid/boards/:boardId' element={<Boards />} />
   </Routes>
 </div>
 </UsersContextProvider>
 
     
   
  )
}

export default App;
