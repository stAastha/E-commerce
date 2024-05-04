import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";



const Layout=()=>{
    let cartItemNo=0;
    const cartdata= useSelector((state)=>state.mycart.cart);
    if(cartdata.length>=1)
    {
     cartItemNo= cartdata.length;
    }
    return(
        <>
          <div id="wrapper">
             <div id="header">
                 <div id="logo">
                      jhumkastore
                 </div>
                 <div id="topmenu">
                    <ul>
                        <li>
                            <Link to="home">Home</Link>  </li>
                        <li> Services </li>
                        <li> Products  </li>
                        <li> <Link to="search">Search</Link>  </li>
                        <li> Cart </li>
                        <li> Blog </li>
                        <li> Contact us</li>
                        <li> 
                          
                         {cartItemNo}

                      <Link to="cartitem">
                      <FaShoppingCart />
                        </Link>  
                       


                        </li>
                    </ul>
                 </div>

             </div>
      

            <Outlet/>


            <div id="footer">
              

            </div>

          </div>
       
        </>
    )
}

export default Layout;