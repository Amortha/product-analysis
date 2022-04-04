import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './commponents/Home/Home';
import Header from './commponents/Header/Header';
import Review from './commponents/Review/Review';
import Deshboard from './commponents/Deshboard/Deshboard';
import Blogs from './commponents/Blogs/Blogs';
import About from './commponents/About/About';
import NotFound from './commponents/NotFound/NotFound';

function App() {
  return (
    <div className="">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Routes>
    </div>
  );
}

export default App;
