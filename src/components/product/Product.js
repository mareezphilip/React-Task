// import { Link } from "react-router-dom";
import './Product.css'

function Product(props){
    return(
        <>   
           <div class="d-flex flex-column  my-2">
               <div class=" align-self-center">
                   <div class="rounded-circle imgdiv position-relative ">
                     <img  src={props.product.image}  /> 
                   </div>
                </div>
                <p class="text-brown-light text-center mt-3 title"> {props.product.title} </p>
                <p class="text-brown-light text-center"> <span class="text-brown"> price :</span> {props.product.price} LE</p>
            </div>
        </>
    )
    }
    export default Product;