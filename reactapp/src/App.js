import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import CartPage from './components/Cart';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
