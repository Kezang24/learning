import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
  <Navbar />
    <Home/>
    <Products/>
    {/* <About/>
    <Contact/> */}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Routes>
  </> 
  );
}

export default App;
