
import React from 'react';
import TableComponent from '../../../../components/Table';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ProductosPorZona = ({ data }) => {
    const zonas = [...new Set(data.map(item => item.zona).filter(cat => cat !== null))];
    //const nombre = [...new Set(data.map(item => item.nombre_completo).filter(cat => cat !== null))];
    
    console.log(zonas);
    const productosPorZona = zonas.map(zona => ({
      zona: zona,
      count: data.filter(item => item.zona === zona).length,
    }));
  
    const chartData = {
      labels: productosPorZona.map(item => item.zona),
      datasets: [
        {
          label: 'Cantidad de Productos',
          data: productosPorZona.map(item => item.count),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
        },
      ],
    };
    console.log(productosPorZona)
    
    const columns = [
      { Header: 'Id', accessor: 'id' },
      { Header: 'Nombre del producto', accessor: 'nombre_producto' },
      { Header: 'Codigo Interno', accessor: 'codigoInterno' },
      { Header: 'Categoria', accessor: 'categoria' },
    ];

    return (
      <div>
        
        <h2>Productos por Zona</h2>
        <Pie data={chartData} />
      </div>
    );
  };
  
  export default ProductosPorZona;
  