import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica para validar desde el servidor

    // console.log('Correo electrónico:', email);
    // console.log('Contraseña:', password);
    window.location.href = "/custom-consultation";
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
             <div className="form-floating col-sm-12 col-md-5 ">
          <TextField
            id="email"
            label="Correo electrónico"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        <div className="form-floating col-sm-12 col-md-5 mt-3">
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        <div className="col-sm-12 col-md-5 mt-4">
            <Button variant="contained" type="submit" fullWidth>
          Ingresar
        </Button>
        </div>
     
        </div>
       
      </form>
  );
};

export default LoginForm;
