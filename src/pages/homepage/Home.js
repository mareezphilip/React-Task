import React, { useState , useContext} from "react";
import './Home.css'
import { Usercontext } from "../../contexts/context";
import ProductList from "../../components/ProductList/Productlist";
import Footer from "../../components/footercomponents/Footer";

const Home = () => {
    const {Login } = useContext(Usercontext)
    return(   
        <>
         < div className="cover">
        <div className="background">
        </div>
        <div className="overlay"></div>
        
        {Login}
        </ div >

        <ProductList />
        <Footer/>
        </>
       
        
    )
}

export default Home