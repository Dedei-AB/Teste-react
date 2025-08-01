import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "../css/Graficos.css";


function GraficoFixa({ despesasFixas }) {
  const generateColor = (index) => {
    const hue = (index * 137.508) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  if (!despesasFixas || despesasFixas.length === 0) {
    return <p>Nenhuma despesa fixa registrada.</p>;
  }

  const dadosConvertidos = despesasFixas.map((item) => ({
    name: item.nome,    
    valor: Number(item.valor),   
  }));

  return (
    <div>
      <h2>Despesas Fixas</h2>
      <PieChart width={550} height={360}>
        <Pie
          data={dadosConvertidos}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="valor"
          label={({ percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        >
          {dadosConvertidos.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={generateColor(index)} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `R$ ${value}`} />
        <Legend />
      </PieChart>
    </div>
  );
}


export default GraficoFixa;