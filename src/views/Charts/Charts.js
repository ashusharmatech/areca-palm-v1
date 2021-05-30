import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
    type: 'bar',
    title: {
        text: "My stock chart"
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
        }
    ]
};

export default function Charts() {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}
