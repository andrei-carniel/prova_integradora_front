import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  
  export default function LineChart({ labels = [], values = [], title = 'Gráfico de Linha', color = '#3b82f6' }) {
    const data = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: values,
          fill: false,
          borderColor: color,
          backgroundColor: color,
          tension: 0.3,
        }
      ]
    };
  
    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    return <Line data={data} options={options} />;
  }
  