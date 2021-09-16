import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { round } from 'utils/format';
import { SalesSuccess } from 'types/sale';



type SeriesData = {
    name: string;
    data: number[]
}

type ChartData = {
    labels: {
        categories: string[]
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []                   
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => {
                const datas = response.data as SalesSuccess[];
                const myLabels = datas.map(x => x.sellerName);
                const mySeries = datas.map(x => round(100.0 * x.deals/x.visited,1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries                  
                        }
                    ]
                });
            });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };


    return (
        <Chart 
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;