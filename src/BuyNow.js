import CashOnDelivery from "./CashOnDelivery";
import Upi from "./Upi";
import Card from "./Card";
import Banking from "./Banking";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const BuyNow=()=>{

    const [input, setInput] = useState({});


    const [paymethod, setPaymethod]=useState("");
const navigate= useNavigate();

const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}))
}

const handlePayMethod=(e)=>{
    let method=e.target.value;
  
    if (method==="cashPay")
    {
        setPaymethod(<CashOnDelivery/>)
    }
    if (method==="UPIPay")
    {
        setPaymethod(<Upi/>)
    }
    if (method==="CardPay")
    {
        setPaymethod(<Card/>)
    }
    if (method==="BankingPay")
    {
        setPaymethod(<Banking/>)
    }
 
}


const paymentDone=()=>{

    navigate("/paydone");
}


 return(
        <>
        <br/> <br/>
          <table width="90%" align="center" border="0">
            <tr>
                <td>
                 <h1> Your Shipping Address</h1>    

                 Enter name : <input type="text" name="name" 
                 value={input.name} onChange={handleInput}/>
                 <br/>
                 Enter city: <input type="text" name="city" 
                  value={input.city} onChange={handleInput}/>
                 <br/>
                 Enter Contact no : <input type="text" name="conno" 
                  value={input.conno} onChange={handleInput}/>
                 <br/>
                 Enter Address : <input type="text" name="address" 
                  value={input.address} onChange={handleInput}/>
                  
                 </td>
                <td>
                 <h1> Select Your Payement Method</h1>    
                    <input type="radio" name="m1" value="cashPay" onClick={handlePayMethod} /> Cash On Delivery 
                    <input type="radio" name="m1"  value="UPIPay" onClick={handlePayMethod}  /> UPI/Phone Pe 
                    <input type="radio" name="m1"  value="CardPay" onClick={handlePayMethod}  /> Credit/Debit Card 
                    <input type="radio" name="m1"  value="BankingPay" onClick={handlePayMethod}  /> Internet Banking 
                  <hr size="3" color="lightblue" />

                  {paymethod}
                 
                 </td>
            </tr>
          </table>
          <br/> <br/>
        <center>
        <button style={{padding:"10px", backgroundColor:"blue", 
        color:"white", fontSize:"20px", fontWeight:"bold"}}
         
        onClick={()=>{paymentDone()}}
        
        > Make Payment</button>
        </center>
           
        <br/> <br/>
        </>
    )
}

export default BuyNow;