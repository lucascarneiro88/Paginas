import React, { useState } from 'react';
import './Perfil.css'

function Perfil() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [foto, setFoto] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para atualizar o perfil
    console.log('Perfil atualizado!');
  };

  return (
   <div className='perfil-box'>
   <h1>Perfil</h1>
   <form onSubmit={handleSubmit}>
     <div className="foto-container">
       {/* <label htmlFor="foto">Foto:</label> */}
       <div className="foto-preview">
         {foto && <img src={foto} alt="Foto do perfil" />}
         <input
           type="text"
           id="foto"
           placeholder="URL da foto"
           value={foto}
           onChange={(e) => setFoto(e.target.value)}
         />
       </div>
     </div>


        {/* <h2>Nome:</h2> */}
        <input className='input-nome'
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        {/* <h2>Idade:</h2> */}
        <input className='input-idade '
          type="number"
          placeholder="Sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        {/* <h2>Sexo:</h2> */}
        <input className='input-sexo'
          type="text"
          placeholder="Seu sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        />

        <h2>Descrição:</h2>
        <textarea
          placeholder="Sua descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

       <div className="btn-container">
          <button type="submit" className="btn">Atualizar</button>
        </div>
      </form>
    </div>
  );
  
}

export default Perfil;
