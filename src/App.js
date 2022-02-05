import "./App.css";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList.js";
import React, { useState } from "react";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
  ];

  let [productList, setProductList] = useState(products);

  const removeItem = (index) => {
    let newProductList = [...productList];    
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem=(name, name2)=>{
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      name2:name2
    })
    setProductList(newProductList);
  }

  return (
    <div className="App">
      <Navbar />
      <main className="container mt-5">
      <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}          
          removeItem={removeItem}
        />
      </main>
    </div>
  );
}

export default App;
