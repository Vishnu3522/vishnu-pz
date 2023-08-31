
import './App.css';
import Carousel from './component/Carousel';
import End from './component/End';
import Footer from './component/Footer';
import Img from './component/Img';
import Mainbody from './component/Mainbody';
import Mainpage from './component/Mainpage';
import Navbar from './component/Navbar';
import Phone from './component/Phone';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <>
    <div>
    
      <Navbar></Navbar>
      <Mainpage></Mainpage>
      <Mainbody></Mainbody>
     {/* <Widget></Widget> */}
     <Img></Img>
     <Phone></Phone>
     <Carousel></Carousel>
     <End></End>
     <Footer></Footer>
    {/* <Switch>
      <Route path="/Loiginpage">
        <Loginpage/>
      </Route>
    </Switch> */}
    </div>
   </>
    
  );
}

export default App;
