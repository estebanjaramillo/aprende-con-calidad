import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tabla del ppi</h1>
      <h2>(Nutricion Lite)</h2>
      <div className="ppi">
        <table className="tabla">
          <tr className="tr">
            <th className = "th"> Nombre </th>
            <th className = "th"> Apellidos </th>
            <th className = "th"> Correo electronico </th>
            <th className = "th"> Numero de identificacion </th>
          </tr>
          
          <tr>
            <td className="td"> Harold </td>
            <td className="td"> Acevedo Moreno </td>
            <td className="td"> Johamno.ha@gmail.com </td>
            <td className="td"> 1000871782 </td>
          </tr>
          <tr>
            <td className="td"> Kevin </td>
            <td className="td"> Romero Bedoya </td>
            <td className="td"> Karlosomero1974@gmail.com </td>
            <td className="td"> 1000537764 </td>
          </tr>
          <tr>
            <td className="td"> Esteban </td>
            <td className="td"> Jaramillo </td>
            <td className="td"> Gaymerotaku2016@gmail.com</td>
            <td className="td"> 1000757579 </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
