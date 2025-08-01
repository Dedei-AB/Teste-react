import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const GraficoComparativo = ({ despesasFixas, despesasVariaveis }) => {
  const totalFixas = despesasFixas.reduce((acc, item) => acc + item.valor, 0);
  const totalVariaveis = despesasVariaveis.reduce((acc, item) => acc + Number(item.valor), 0);

  const data = [
    { name: "Fixas", value: totalFixas },
    { name: "Variáveis", value: totalVariaveis },
  ];

  const COLORS = ["#0088FE", "#FF8042"];

  return (
    <div className="grafico-individual">
      <h3>Comparativo Geral</h3>
      <PieChart width={360} height={360}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default GraficoComparativo;
