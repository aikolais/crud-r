import React, { useState } from "react";

const FormularioCadastro = (props) => {
  //variável de captura de dados

  const camposIniciaisDeValores = {
    nomeCompleto: "",
    telefone: "",
    email: "",
    endereco: "",
  };

  const [values, setValues] = useState(camposIniciaisDeValores);

  const manipuladorDoInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const manipuladorFormEnvio = (e) => {
    e.preventDefault();
    props.addEdit(values);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
        <div>
          <input
            className="form-control"
            placeholder="Nome completo"
            name="nomeCompleto"
            value={values.nomeCompleto}
            onChange={manipuladorDoInput}
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="Telefone"
            name="telefone"
            value={values.telefone}
            onChange={manipuladorDoInput}
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={manipuladorDoInput}
          />
        </div>
        <div>
          <input
            className="form-control"
            placeholder="Endereço"
            name="endereco"
            value={values.endereco}
            onChange={manipuladorDoInput}
          />
        </div>
        <div>
          <input className="btninput" type="submit" value="Salvar" />
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastro;
