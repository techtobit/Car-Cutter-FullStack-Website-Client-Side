import React from 'react';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/LogIn/Login';
import HomeMain from './Components/Home/HomeMain';
import Register from './Components/Auth/Register/Register';
import Vehicles from './Components/Page/Vehicles/Vehicles'
import RequireAuth from './Components/Auth/ProtectedRoute/RequireAuth';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<HomeMain></HomeMain>}></Route>
        <Route path='/vehicles' element={
          <RequireAuth>
            <Vehicles></Vehicles>
          </RequireAuth>
        }></Route>
        <Route path='/logIn' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;