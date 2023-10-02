//import Nav from "./Component/Nav"
//import Footer from "./Component/Footer"
// import Child from "./Component/Child"
// import Task from "./Component/Task"
// import A from "./Component/A"
// import PropChildren from "./Component/PropChildren"
// import Task1 from "./Component/Task1"
// import Array from "./Component/Array"
// import State from "./Component/State"
// import Object from "./Component/Object"
// import Object from "./Component/Object"
// import Fragement from "./Component/Fragement"
//import Myntra from "./Component/Myntra"
// import Statepract from "./Component/Statepract"
// import Theme from "./Component/Theme"
// import Hello from "./Component/Hello"
// import Hello1 from "./Component/Hello1"
// import "./global.css"
// import Hello1 from "./Hello1"
//  import Flipkart from "./Component/Flipkart";
//import Uncontrol from "./Component/Uncontrol"
//import Cw from "./Component/Cw"
//import Uncontrolled1 from "./Component/Uncontrolled1"
// import Task11 from "./Component/Task11"
// import SideEffects from "./Hooks/SideEffects"
// import FetchData from "./Hooks/FetchData2"
// import Userdata from "./Hooks/A"
// import Main from "./Hooks/Main"
// import Perform from "./Component/Perform"
// 
import Homecrud from "./Compo/Homecrud"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Createuser from "./Compo/Createuser"
import Users from "./Compo/Users"
import Editusers from "./Compo/Editusers"
const App = ()=>{
return(
<div>
<BrowserRouter>
<Homecrud/>
<Routes>
<Route element={<Createuser/>} path="/" />
<Route element={<Users/>} path="/users" />
<Route element={<Editusers/>} path="/edit/:idie" />
</Routes>
</BrowserRouter>
</div>
)
}
export default App