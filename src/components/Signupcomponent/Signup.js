import React, { useState   } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    })

    const [errors, setErrors] = useState({})

    const handlechange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const validateform = () => {
        const validationErrors = {}
        if (!formData.name.trim()) { validationErrors.name = "name is required" }

        if (!formData.email.trim()) { validationErrors.email = "email is required" }
        if (!formData.password.trim()) { validationErrors.password = "password is required" }
        if (!formData.phone.trim()) { validationErrors.password = "phone is required" }


        setErrors(validationErrors)
        console.log("errors ", validationErrors)
        console.log("formdata ", formData)

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        validateform()
        console.log("form", formData)
        let result = await fetch("http://localhost:3004/users/adduser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })

        result = await result.json()

        console.log(result)
        if (result.apiStatus) {
            navigate('/');
        }
        console.log("token", result.token)
        localStorage.setItem("token", result.token)
    }



    return (
        <div className="parent">
            <div className="background"> </div>
            <div class="overlay"></div>
            <div className="formdiv w-50  m-auto ">
                <h1 className="py-4 text-white"> Sign up  </h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">User Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name"
                            onChange={handlechange} />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                            onChange={handlechange} />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handlechange} />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Phone</label>
                        <input type="phone" className="form-control" id="exampleInputEmail1" name="phone"
                            onChange={handlechange} />
                        {errors.phone && <span className="text-danger">{errors.phone}</span>}
                    </div>
                    <div className="text-center mt-1">
                        <button type="submit" className="text-white rounded-pill px-5 py-2 " > Sign up  </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Signup