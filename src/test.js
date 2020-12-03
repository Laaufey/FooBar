import React, { useState, useEffect } from "react";
import { getData, getBeers } from "./modules/Rest";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [beers, setBeers] = useState([]);
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  function editCartItems(name, modifier) {
    const nextItems = cartItems.map((item) => {
      if (item.name === name) {
        item.amount += modifier;
      }
      return item;
    });
    setCartItems(nextItems);
  }

  useEffect(() => {
    getData(setData, setCartItems);
    getBeers(setBeers);
  }, []);

  // return (
  //   <div className="App">
  //     <Router>
  //       <div>
  //         <nav>
  //           <ul>
  //             <li>
  //               <Link to="/">Home</Link>
  //             </li>
  //             <li>
  //               <Link to="/shop">Beers</Link>
  //             </li>
  //             <li>
  //               <Link to="/cart">Cart</Link>
  //             </li>
  //           </ul>
  //         </nav>

  //         {/* A <Switch> looks through its children <Route>s and
  //           renders the first one that matches the current URL. */}

  //         <Switch>
  //           <Switch path="/shop">
  //             <Shop
  //               data={data}
  //               beers={beers}
  //               cartItems={cartItems}
  //               editCartItems={editCartItems}
  //             />
  //           </Switch>
  //           <Switch path="/cart">
  //             {cartItems && <Cart cartItems={cartItems} />}
  //           </Switch>
  //           <Switch path="/">
  //             <Home />
  //           </Switch>
  //         </Switch>
  //       </div>
  //     </Router>
  //   </div>
  // );


  
  return (
    <div className="App">
       <Router>

      <button>   <Link to="/">Home</Link> </button>
      <button>   <Link to="/Loader">Shop</Link> </button>
      <button >   <Link to="/Cart">Cart</Link> </button>

      <Switch>

        <Route path="/Cart">
        {cartItems && <Cart cartItems={cartItems} />}
        </Route>

        <Route path="/">
        <Loader
                data={data}
              beers={beers}
              cartItems={cartItems}
             editCartItems={editCartItems}
            />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
