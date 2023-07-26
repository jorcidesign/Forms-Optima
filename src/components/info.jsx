import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@mui/material";

const CustomConsultationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [numRooms, setNumRooms] = useState("1"); // Valor inicial de "1 habitación"
  const [dataUsageAuthorized, setDataUsageAuthorized] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDniChange = (event) => {
    setDni(event.target.value);
  };

  const handleNumRoomsChange = (event) => {
    setNumRooms(event.target.value);
  };

  const handleDataUsageChange = (event) => {
    setDataUsageAuthorized(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    // por ejemplo, haciendo una solicitud HTTP con axios o fetch.
    // También es el lugar donde deberías validar y procesar los datos ingresados antes de enviarlos.

    console.log("Correo electrónico:", email);
    console.log("Nombre:", name);
    console.log("Teléfono:", phone);
    console.log("DNI:", dni);
    console.log("Número de habitaciones:", numRooms);
    console.log("Autorización de uso de datos:", dataUsageAuthorized);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5 ">
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
        {/* Name Field */}
        <div className="col-sm-12 col-md-5 mt-3">
           <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        {/* Number Field */}
        <div className=" col-sm-12 col-md-3 mt-3">
          <TextField
            id="phone"
            label="teléfono"
            variant="outlined"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            required
            fullWidth
          />
        </div>
        {/* DNI field */}
        <div className="col-sm-12 col-md-2 mt-3">
          <TextField
            id="dni"
            label="DNI"
            variant="outlined"
            type="text"
            value={dni}
            onChange={handleDniChange}
            required
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        <div className=" col-sm-12 col-md-5 mt-3">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Número de habitaciones
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="numRooms"
              value={numRooms}
              label="Número de habitaciones"
              onChange={handleNumRoomsChange}
              required
            >
              <MenuItem value={1}>1 habitación</MenuItem>
              <MenuItem value={2}>2 habitaciones</MenuItem>
              <MenuItem value={3}>3 habitaciones</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-100"></div>
        {/* form control label  */}
        <div className="col-sm-12 col-md-5 mt-3 row">
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Autorizo el uso de datos"
            checked={dataUsageAuthorized}
            onChange={handleDataUsageChange}
            
          />
        </div>
        <div className="w-100"></div>
        <div className="form-floating col-sm-12 col-md-5 mt-4">
          {/* <button type="submit">Crear</button> */}
          <Button variant="contained" type="submit" fullWidth>
          Crear
        </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomConsultationForm;
