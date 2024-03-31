import { useEffect, useState } from "react";

import axios from "axios";

export default function Login(){

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // useEffect(() => {
    const handleSubmit = async (event) => {
      event.preventDefault(); 
      
      try {
        const response = await axios.post('http://localhost:8080/api/sessions/login', form);
        console.log(response);
        console.log('Respuesta del servidor:', response.data);
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
     }
    };
  
    const handleChange = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value });
    };
  // }, []);

    return(
        <main className="flex-grow-1 p-3 m-auto my-2 container">
        <h2 className="text-center">LOGIN!</h2>
        <form  onSubmit={handleSubmit} className="form" 
        // style="width: 320px;"
        >
          <div className="mb-3 text-center">
            <label htmlFor="email" className="form-label mb-0">Email</label>
            <input type="email" value={form.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange}/>
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="password" className="form-label mb-0">Password</label>
            <input type="password" value={form.password} name="password" className="form-control" id="password" onChange={handleChange} />
          </div>
          <button id="login" type="submit" className="w-100 btn btn-danger">Login</button>
        </form>
      </main>
    )
}