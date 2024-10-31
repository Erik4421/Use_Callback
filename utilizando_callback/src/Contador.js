import React, { useState, useCallback } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  // Memoriza a função de incrementar
  const incrementar = useCallback(() => {
    setContagem(prevContagem => prevContagem + 1);
  }, []);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;