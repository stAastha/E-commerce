import axios from "axios";
import { useState } from "react";

import { useDispatch } from 'react-redux';
import { addtoCart } from "./cartSlice";

const Search=()=>{
    const [txtdata, setTxtdata]= useState("");
    const [mydata, setMydata]= useState([]);
    const dispatch= useDispatch();

    const searchData=(e)=>{
 
        setTxtdata(e.target.value);
        let url="http://localhost:4000/products/";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })      
    }

   
    const ans= mydata.map((key)=>{
                    let mybrand= key.brand.toUpperCase();
                    let status= mybrand.includes(txtdata.toUpperCase());
                    

         if(status)
         {
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
        }
    });




    return(
        <>
        <center>
        <br/><br/><br/>
         <h1> Search By Brand </h1>
         Enter Brand : <input type="text" value={txtdata} onChange={searchData}  /> 

        </center>

        <div id="content">
               <h1> Our Premium Watches</h1>
               <div id="products">
                  {ans}        
               </div>
           </div>
        
        
        </>
    )
}

export default Search;