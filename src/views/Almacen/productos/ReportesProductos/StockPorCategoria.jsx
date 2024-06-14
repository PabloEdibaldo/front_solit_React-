import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StockPorCategoria = ({ data }) => {
    // Filtrar categorías nulas
    const categorias = [...new Set(data.map(item => item.categoria).filter(cat => cat !== null))];
    const stockPorCategoria = categorias.map(cat => ({
      categoria: cat,
      stock: data.filter(item => item.categoria === cat).reduce((total, item) => total + item.stock, 0),
    }));
  
    const chartData = {
      labels: stockPorCategoria.map(item => item.categoria),
      datasets: [
        {
          label: 'Stock Total',
          data: stockPorCategoria.map(item => item.stock),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Stock por Categoría',
        },
      },
    };
  
    return (
      <div>
        <div className='text-center'>
        <h5>Stock por Categoría</h5>
        </div>
        
        <Bar data={chartData} options={options} />
      </div>
    );
  };
  
  export default StockPorCategoria;