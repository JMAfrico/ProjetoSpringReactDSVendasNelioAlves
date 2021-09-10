import axios from 'axios';
import Chart from 'react-apexcharts'
import { Salesum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData ={
        labels: string[]
        series: number[]
}

function DonutChart() {

    let chartData : ChartData = {labels:[], series:[]};

   
    axios.get(`${BASE_URL}/sum-by-seller`) 
        .then((response) => {
            const data = response.data as Salesum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
            
            chartData = {labels:myLabels, series:mySeries};
            console.log(chartData);
        })


    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;