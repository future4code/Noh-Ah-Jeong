import React from 'react';

function App() {
  return (
    <div>
      <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <div>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input />
        </div>
        <div>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="nenhum">Nenhum</option>
                <option value="cursoTecnico">Curso Técnico</option>
                <option value="cursoDeIngles">Curso de Inglês</option>
            </select>
        </div>
    </div>
  );
}

export default App;
