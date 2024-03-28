import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg mt-5">
            <div className="  justify-content-center">

                <div className="container  text-md-left pt-2">


                    <div className="row justify-content-center">

                        <div className="col-md-3 mt-md-0 py-3">

                            <h3 className="text-white "> Contact Info</h3>
                            <hr className=" border border-white opacity-100 w-25 border-1  " />
                            <div className="d-flex">
                               
                                <p className="text-white">
                                    123 Street Market, Life Plaza, New York</p>
                            </div>
                            <div className="d-flex">
                                
                                <p className="text-white">
                                    987654321
                                </p>
                            </div>

                            <div className="d-flex">
                               
                                <p className="text-white">
                                    team@gmail.com
                                </p>
                            </div>



                        </div>

                        
                    </div>


                </div>
                <div className="bg2 shadow-lg">
                    <div className="footer-copyright text-center  py-3">© 2020 Copyright:
                        <a href="/" className="text-white"> coffeeShop.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer