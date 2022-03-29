import React from "react";
import FormularioCadastro from "./FormularioCadastro";
import fireDb from '../firebase';

const Cadastro = () => {

    const addEdit = (obj) => {
        fireDb.child('pacientes').push(
            obj,
            error => {
                if(error) {
                    console.log(error);
                }
            }
        )
      };

  return (
    <div>
      <h1>Cadastro de pacientes</h1>
      <div>
        <FormularioCadastro addEdit={addEdit} />
        <h2>Lista de Pacientes</h2>
      </div>
    </div>
  );
};

export default Cadastro;
