import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import New from './pages/New/New';
import Single from './pages/Single/Single';
import { productInputs, userInputs } from "./FormData";
import './Dark/Dark.scss'
import {useState,useContext} from "react"
import { DarkModeContext } from "./ContextApi/DarkModeContext";

function App() {
  // const [dark,setDark]=useState(true)
  const {darkmode} = useContext(DarkModeContext)
  return (
    <div className={darkmode? "App dark":"App"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List title="Add New User"/>}/>
            <Route path=":userID" element={<Single/>}/>
            <Route path="new" element={<New input={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="product">
            <Route index element={<List title="Add New Product"/>}/>
            <Route path=":productID" element={<Single/>}/>
            <Route path="new" element={<New input={productInputs} title="Add New Product"/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
