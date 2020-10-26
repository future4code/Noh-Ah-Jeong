import React from 'react';

function App() {
    return (
    <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <div>
            <p>1. Qual o seu nome?</p>
            <input />
        </div>
        <div>
            <p>2. Qual sua idade?</p>
            <input />
        </div>
        <div>
            <p>3. Qual seu e-mail?</p>
            <input />
        </div>
        <div>
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value="ensinoMedioIncompleto">Ensino Médio Incompleto</option>
                <option value="ensinoMedioCompleto">Ensino Médio Completo</option>
                <option value="ensinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                <option value="ensinoSuperiorIncompleto">Ensino Superior Completo</option>
            </select>
        </div>
    </div>
  );
}

export default App;
