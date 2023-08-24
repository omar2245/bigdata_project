import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

interface Props {
  totalMaleOrdinary: number;
  totalFemaleOrdinary: number;
  totalMaleSingle: number;
  totalFemaleSingle: number;
}

function HouseholdPieChart({
  totalMaleOrdinary,
  totalFemaleOrdinary,
  totalMaleSingle,
  totalFemaleSingle,
}: Props) {
  const options = {
    chart: {
      type: 'pie', // Set the chart type to 'pie'
    },
    title: {
      text: '戶數統計',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.2f} %',
        },
      },
    },
    colors: ['#626eb2', '#a3b1ff'],
    series: [
      {
        name: 'Data',
        data: [
          { name: '共同生活', y: totalMaleOrdinary + totalFemaleOrdinary },
          { name: '獨立生活', y: totalMaleSingle + totalFemaleSingle },
        ],
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default HouseholdPieChart;
