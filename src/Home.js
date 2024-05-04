import banner from "./images/banner.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";

const Home=()=>{
    const [mydata, setMydata]=useState([]);

    const dispatch= useDispatch();
    

  const loadData=()=>{
    let url="http://localhost:4000/products";
    axios.get(url).then((res)=>{
        setMydata(res.data);
    })
  }

  useEffect(()=>{
     loadData();
  }, []);

 
  const productAns=mydata.map((key)=>{
         return(
            <>
                <div className="proitems">
                    <img src={"images/"+key.image}  width="250" height="200"  />
                    <h1> Name :  {key.name} </h1>
                    <h2> Price :  {key.price} </h2>
                    <h2> Brand:  {key.brand} </h2>
                    <button onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, price:key.price, image:key.image, brand:key.brand }))}}> Add to Cart</button>
                </div>
            </>
         )
  });


    return(
        <>
         
             <div id="banner">
                     <img src={banner} width="100%" height="400" />          
              </div>
           <div id="content">
               <h1> Our Premium Watches</h1>
               <div id="products">
                  {productAns}        
               </div>
           </div>
        
        </>
    )
}

export default Home;