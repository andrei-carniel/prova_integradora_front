import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  export default function BarChart({ labels = [], values = [], colors = [], title = 'Gráfico' }) {
    const data = {
      labels: labels,
      datasets: [
        {
          label: title,
          data: values,
          backgroundColor: colors.length ? colors : '#3b82f6', // cor padrão se não passar
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
  
    return <Bar data={data} options={options} />;
  }
  