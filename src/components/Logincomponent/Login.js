import React, { useState, useContext } from "react";
import { Usercontext } from "../../contexts/context";
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate = useNavigate();
  const { setLogin } = useContext(Usercontext)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email.trim()) { validationErrors.email = "email is required" }
    if (!formData.password.trim()) { validationErrors.password = "password is required" }

    setErrors(validationErrors)
    console.log("errors ", validationErrors)
    console.log("formdata ", formData)

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    validateform()
    let result = await fetch("http://localhost:3004/users/login", {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })

    result = await result.json()

    console.log(result)
    if (result.data) {
      setLogin(true)
      alert("login successfully ")
      navigate('/');
    }
    console.log("token", result.data)
    localStorage.setItem("token", result.data)
  }

  return (

    <div className="parent">
      <div className="background"> </div>
      <div class="overlay"></div>
      <div className="formdiv w-50  m-auto ">
        <h1 className="py-4 text-white"> Login </h1>
        <form onSubmit={handleSubmit} className="">
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

          <div className="text-center mt-1">
            <button type="submit" className="text-white rounded-pill px-5 py-2 " > Login </button>
          </div>
        </form>
      </div>


    </div>




  )
}

export default Login