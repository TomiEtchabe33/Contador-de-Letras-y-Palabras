import React, { useState, useEffect } from 'react';
import './App.css';
import { TextField } from '@mui/material';

const ContadorLetrasPalabras = () => {
  const [texto, setTexto] = useState('');
  const [contadorLetras, setContadorLetras] = useState(0);
  const [contadorPalabras, setContadorPalabras] = useState(0);

  useEffect(() => {
    const palabras = texto.split(' ');
    setContadorLetras(texto.length);
    setContadorPalabras(palabras.filter(palabra => palabra !== '').length);
    if (texto.length > 100) {
      alert('Llegas al limite de 100 letras!');
    }
  }, [texto]);

  const handleChangeTexto = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className='body'>
      <center>
      <br></br>
      <h1>Contador de Letras y Palabras</h1>
      <TextField id="outlined-basic" label="Escribir..." variant="outlined" value={texto} onChange={handleChangeTexto} />
      <p className='contadores'>Contador de letras:<br></br> {contadorLetras}</p>
      <p className='contadores'>Contador de palabras:<br></br> {contadorPalabras}</p>
      </center>
    </div>
  );
};

export default ContadorLetrasPalabras;
