import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/create'element={<CreateUser/>}>Create</Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>
    </Routes>
    

    </BrowserRouter>
    </>
  )
}

export default App
