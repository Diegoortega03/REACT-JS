


import { BrowserRouter, Routes, Route,   } from "react-router-dom";
import { ItemListContainer } from "./components/itemlist/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Form } from "./components/Form/Form";
import {Outlet} from "react-router-dom"
import CartContextProvider from "./Context/CartContext";
import CartContainer from "./components/Cart/CartContainer";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <Routes>
      <Route element={<Navbar/>}>


      
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route  path="/category/:categoryName" element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path="/sign-up" element={<h1>aca deberias registrarte</h1>} />
      <Route path="/cart" element={<CartContainer/>}/>
      <Route path="/form" element={<Form/>} />
    
      </Route>
      <Route path="*" element={<h3>404 not found</h3>}/>
      </Routes>

      </CartContextProvider>
      
    </BrowserRouter>
  );
}

export default App;

//comentarios de ejemplos anteriores

/* 
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { ItemListContainer } from "./components/itemlist/ItemListContainer";
import { MaterialUi } from "./components/MaterialUi/MaterialUi";
import FetchingData from "./components/FetchingData/FetchingData";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
 */

/*  <div className="App">
      <Login />
      <Home />
      <ItemListContainer />
      <MaterialUi />
      <FetchingData/>
     <ItemDetailContainer/>
    </div> */

/*  <div className="App">

      
      <Navbar>
      <Home />
      <ItemListContainer />
      <ItemDetailContainer/>

      </Navbar>


    </div> */
