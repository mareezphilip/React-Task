import React , {useState , useEffect} from "react";
import Product from "../product/Product";
const ProductList = ()  =>{
 
    const [products,setproducts]=useState([]);
    const [error, setError] = useState([]);

    const api_url="https://fakestoreapi.com/products";

      
  const getproducts= ()=> {
    fetch(api_url).then((reponse)=>reponse.json())
   .then((data)=>setproducts(data))
    }
   
    
    useEffect(()=>{
        getproducts()
       
      },[]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(api_url);

//         const jsonData = await response.json();
//         console.log("data" , jsonData)
//         setproducts(jsonData);
//         console.log(products)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//     console.log(products)
//   }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div className="container">  

           <h1 className="mt-5 mb-3"> Products  </h1>
           <div className="row flex-wrap list justify-content-center">     
          { products.map((p)=>{
             return(
                 <div className="col-lg-3 col-md-4 col-sm-9 ">
                   <Product product={p} key={p.id}/>
                  </div>
             );
          })}
            
           </div>    
        </div>
    )

    
}

export default ProductList