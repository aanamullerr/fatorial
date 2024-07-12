import React, { useState, useMemo } from 'react';

function calcularFatorial(n) {
  console.log(`Calculando fatorial de ${n}`);
  if (n <= 1) return 1;
  return n * calcularFatorial(n - 1);
}

function Fatorial() {
  const [numero, setNumero] = useState(1);

  const fatorial = useMemo(() => {
    return calcularFatorial(numero);
  }, [numero]);

  return (
    <div>
      <h1>Calculadora de Fatorial</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <p>Fatorial de {numero} é {fatorial}</p>
    </div>
  );
}

export default Fatorial;
