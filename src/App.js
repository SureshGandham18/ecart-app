import "./styles/app.scss";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import {Toaster} from 'react-hot-toast';
import Clothes from "./components/Clothes";
import Categories from "./components/Categories";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import ImageSlider from "./components/ImageSlider";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Categories/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/clothes' element={<Clothes/>}/>
      <Route path='/laptops' element={<Laptops/>}/>
      <Route path='/mobiles' element={<Mobiles/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
