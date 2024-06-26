import React, { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import Restaurant from './Restaurant/Restaurant';
import CardData from './Home/CardData';
import RestHome from './homePages/RestHome';
import CartHome from "./CartPage/CartHome.jsx";
function App() {

  const [citystate, setCityState] = useState("");
  const HandleChange = ((e) => {
    const value = e.target.value;
    setCityState(value);
  });


  let cardData = CardData.filter(item => {
    if (citystate !== "") {
      return item.place === citystate; 
    } else {
      return item.place !== citystate;
    }
  });


  const [cart, setCart] = useState([]);

  //  const [itemData,setItemData] = useState([]);

  // const addToCart=(data)=>{

  //   //  console.log(data)
  //   var item_id = data.item_id;
  //   setCart([...cart,{item_id,quantity:numVal}]);
  //   // setItemData(data);
  // }

  const addToCart = (e) => {
    const id = e.item_id;

    const get_cart =  cart.filter((Citems)=>{
      return Citems.item_id  === id;
    })

    if(get_cart.length === 0){
    const CartObj = CardData.filter(item => {
      if (id !== '') {
          return item.item_id === id;
      } else {
        return item.item_id !== id;
      }
    });
    
  setCart([...cart, {
      item_id: CartObj[0].item_id,
      title: CartObj[0].title,
      price: CartObj[0].price,
      img: CartObj[0].src,
      description: CartObj[0].description,
      qty: 1
    }]);
  }
  else{
    alert("This product is already in cart")
  }

  }


  const cartQuantity = (e)=>{
    const id = e.target.name;
    const value = e.target.value;
    // const get_cart =  cart.filter((Citems)=>{
    //   return Citems.item_id  == id;
    // })
  
      const newObj = cart.map(obj=>{
        
       if(obj.item_id == id){
        return {...obj, qty:value};
       }
       return obj;
      })
      setCart(newObj);
    // console.log(get_cart.length)
  //   if(get_cart.length==1){
  //     const NewObj = cart.map(obj =>{
  //    if(obj.item_id==id){
  //     //  return {...obj, qty:value};
  //     alert(obj.item_id)
  //    }
  //    return obj;
  //  });    
  //  setCart(NewObj);
  //   }

  
    
  }


  const deleteCart = (e)=>{
   const id = e.target.getAttribute("data-id");
  //  console.log(id)
   const newData = cart.filter((data) =>{
     return data.item_id != id;
   })
   setCart(newData)
  }
 


  return (
    //BEM
    <div className="app">
      <Router>

        {/* Header */}
        <Header count={cart.length} handleChange={HandleChange} />

        <Routes>

          {/* Home  */}
          <Route path='/' element={<Home citystate={citystate} cData={cardData} />} />

          {/* Search  */}
          <Route path='/search' element={<SearchPage />} />

          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/item/:item_id' element={<RestHome addToCart={addToCart} />} />

          <Route path='/carthome' element={<CartHome itemData={cart} cartQuantity = {cartQuantity} deleteCart = {deleteCart}/>} />
          
        </Routes>
        
        {/* Footer */}
        <Footer />

      </Router>
    </div>
  );
}

export default App;
