import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns'
import annotationPlugin from 'chartjs-plugin-annotation'

import {
    CategoryScale,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    ChartOptions,
    TimeScale,
} from 'chart.js'
import jsPDF from "jspdf";
import styled from "styled-components";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, TimeScale, annotationPlugin);

interface LineChartProps {
    data: number[];
    activeData: number[]
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: Array.from({ length: data.length }, (_, i) => `${i + 1}`),
        datasets: [
            {
                label: "Line Chart 1",
                data: data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                yAxis: 'y',
                stepped: true,
            },
            {
                label: "Line Chart 2",
                data: data.map((val) => val * 2),
                fill: false,
                borderColor: "rgb(192, 75, 75)",
                tension: 0.1,
                yAxis: 'y1',
                stepped: true,
            },
        ],
    });
    const chartRef = useRef(null)
    const generatePDF = () => {
        const canvas = document.getElementById('LineChart') as HTMLCanvasElement
        if (canvas === null) {
            console.error('Canvas element not found.')
            return
        }
        const canvasImage = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height])
        pdf.setFontSize(20)
        pdf.addImage(canvasImage, 'JPEG', 15, 15, 300, 150)

        pdf.save('Chart.pdf')
    }

    const generatePNG = () => {
        const canvas = document.getElementById('LineChart') as HTMLCanvasElement
        if (canvas === null) {
            console.error('Canvas element not found.')
            return
        }
        const canvasImage = canvas.toDataURL('image/png', 1)
        const link = document.createElement('a')
        link.download = 'Chart.png'
        link.href = canvasImage
        link.click()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = data.map((val) => val + Math.floor(Math.random() * 100));
            setChartData({
                labels: Array.from({ length: newData.length }, (_, i) => `${i + 5}`),
                datasets: [
                    {
                        label: "Line Chart 1",
                        data: newData,
                        fill: false,
                        borderColor: "#9BD0F5",
                        tension: 0,
                        yAxis: 'y',
                        stepped: true,
                    },
                    {
                        label: "Line Chart 2",
                        data: newData.map((val) => val * 5),
                        fill: false,
                        borderColor: "#36A2EB",
                        tension: 0,
                        yAxis: 'y1',
                        stepped: true,
                    },
                    {
                        label: "Line Chart 3",
                        data: newData.map((val) => val * 21),
                        fill: false,
                        borderColor: "#9e75c9",
                        tension: 0,
                        yAxis: 'y2',
                        stepped: true,
                    },
                ],
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Values',
                },
                grid: {
                    display: false,
                    drawTicks: true,
                },
                ticks: {
                    color: '#9BD0F5',
                },
            },
            y: {
                position: 'left',
                title: {
                    display: true,
                    text: 'Values of Line Chart 1',
                },
                ticks: {
                    color: '#9BD0F5',
                },
            },

        },
        plugins: {
            legend: {
                display: false,
            },
            annotation: {
                common: {
                    drawTime: 'beforeDatasetsDraw',
                },
                annotations: {
                    line1: {
                        type: 'line',
                        xMin: '9',
                        xMax: '9',
                        xScaleID: 'x',
                        borderColor: '#FFECF1',
                        borderWidth: 13,
                    },
                    line2: {
                        type: 'line',
                        xMin: '14',
                        xMax: '14',
                        xScaleID: 'x',
                        borderColor: '#FFECF1',
                        borderWidth: 24,
                    },

                    line3: {
                        type: 'line',
                        xMin: '20',
                        xMax: '20',
                        xScaleID: 'x',
                        borderColor: '#FFF7E8',
                        borderWidth: 40,
                    },
                    line4: {
                        type: 'line',
                        xScaleID: 'x',
                        xMin: '5',
                        xMax: '5',

                        borderColor: '#e04848',
                        borderWidth: 19,
                    },
                },
            },
            tooltip: {
                mode: 'index',
                usePointStyle: true,
                position: 'nearest',
                callbacks: {
                    labelPointStyle: function (context) {
                        return {
                            pointStyle: 'circle',
                            rotation: 0,
                        }
                    },
                },
                intersect: false,
            },



        },
    };

    return <><Line data={chartData} options={chartOptions} ref={chartRef} id="LineChart" /><StyledButtonDiv>
        <StyledButtons
            onClick={generatePDF}
            isActive={true}
        >
            Save as PDF
        </StyledButtons>
        <StyledButtons
            onClick={generatePNG}
            isActive={true}
        >
            Save as PNG
        </StyledButtons>
    </StyledButtonDiv></>;
};


const StyledButtonDiv = styled.div`
  display: flex;
  gap: 30px;
  justify-content: left;
  align-items: left;
  margin-top: 5px;
  margin-bottom: 15px;
`

const StyledButtons = styled.div<{ isActive: boolean }>`
padding: 5px 10px;
border-radius: 5px;
border: 1px solid #dadada;
display: inline-block;
cursor: pointer;
font-weight: bold;
`
export default LineChart;
