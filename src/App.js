import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/LogIn/Login';
import HomeMain from './Components/Home/HomeMain';
import Register from './Components/Auth/Register/Register';
import Vehicles from './Components/Page/Vehicles/Vehicles'
import RequireAuth from './Components/Auth/ProtectedRoute/RequireAuth';
import Blog from './Components/Page/Blog/Blog';
import Inventory from './Components/Page/Inventory/Inventory';
import AddItems from './Components/Page/AddItems/AddItems';
import Manage from './Components/Page/Manage/Manage';
import GetItems from './Components/Page/Items/GetItems';
import NotFound from './Components/Page/404/NotFound';
import UpdatePassword from './Components/Auth/LogIn/UpdatePassword.js';



const App = () => {
  return (
    <div>
      <Header></Header>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomeMain></HomeMain>}></Route>
        <Route path='/home' element={<HomeMain></HomeMain>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Vehicles></Vehicles>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:inventoryId/:AddNew' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/AddNew' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/items' element={
          <RequireAuth>
            <GetItems></GetItems>
          </RequireAuth>
        }></Route>
        <Route path='/updatePassword' element={
          <UpdatePassword></UpdatePassword>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/logIn' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;