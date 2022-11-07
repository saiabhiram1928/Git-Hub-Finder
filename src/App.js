import React from 'react';
import Navbar from './componets/navbar/Navbar';
import Footer from './componets/footer/Footer';
import Explore from './pages/Explore';
import Error from './pages/error/Error';
import Home from './pages/Home';
import { Routes,Route, Switch, NavLink, Link } from 'react-router-dom';
import Context from './context/Context';
import User from './pages/User/User';



  
const App = () => {
  return <div>
    <Context>

   
  <Footer/>
  <Navbar/>
<main className="my-auto container px-3 pb-12">
<Routes>
  <Route path="/Explore" element={<Explore/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/Git-Hub-Finder" element ={<Home/>}/>
  <Route path='/users/:login' element={<User/>}/>
  <Route path="/Notfound"  element={<Error/>}/>
  <Route path="/*"  element={<Error/>}/>

  </Routes>
</main>
 
</Context> 
  </div>;
};

export default App;

