import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
  totalMaleOrdinary: number;
  totalFemaleOrdinary: number;
  totalMaleSingle: number;
  totalFemaleSingle: number;
}

function HouseholdChart({
  totalMaleOrdinary,
  totalFemaleOrdinary,
  totalMaleSingle,
  totalFemaleSingle,
}: Props) {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '人口數統計',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
      margin: 30,
    },
    xAxis: {
      categories: ['共同生活', '獨立生活'],
      crosshair: true,
      title: {
        text: '型態',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量',
        align: 'high',
        rotation: 0,
        offset: 5, // Adjust the offset if needed
        x: -10,
        y: -30,
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
        },
      },
      labels: {
        format: '',
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true, // Enable data labels on the columns
          format: '{point.y}', // Display the y-value of each data point
          style: {
            textOutline: 'none', // Remove text outline
          },
        },
      },
    },
    series: [
      {
        name: '男生',
        data: [totalMaleOrdinary, totalMaleSingle],
        color: '#7d5fb2',
      },
      {
        name: '女生',
        data: [totalFemaleOrdinary, totalFemaleSingle],
        color: '#c29fff',
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default HouseholdChart;
