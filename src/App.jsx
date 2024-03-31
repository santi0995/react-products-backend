import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Index from "./index";
import Login from "./Components/login";
import Navbar from "./Components/navBar";
import Register from "./Components/register";
import axios from "axios";

function App() {
  // const [role, setRole] = useState(0);

  // useEffect(() => {
  //   axios("http://localhost:8080/api/sessions/")
  //     .then((res) => {
  //       console.log(res);
  //     //   setRole(res.data.response.docs);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
