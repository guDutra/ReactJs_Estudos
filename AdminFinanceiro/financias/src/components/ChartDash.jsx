import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null); // Reference to the Chart.js instance

    useEffect(() => {


        const ctx = chartRef.current.getContext('2d');

        // Destroy the existing chart if it exists
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Expenses',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'white', // Color of the data line
                    backgroundColor: 'red', // Transparent background for data points
                    borderWidth: 2 // Thickness of the data line
                },
                {
                    label: 'Incomes',
                    data: [5, 9, 80, 57, 23, 30, 72],
                    borderColor: 'black', // Color of the data line
                    backgroundColor: 'green', // Transparent background for data points
                    borderWidth: 2 // Thickness of the data line
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            color: '#748cab' // Color of the gridlines for the x-axis
                        },
                        ticks: {
                            backgroundColor: '#1d2d44',
                            color: '#FFFFF0' // Color of the tick marks for the x-axis
                        }
                    },
                    y: {
                        grid: {
                            color: '#748cab' // Color of the gridlines for the y-axis
                        },
                        ticks: {
                            backgroundColor: '#1d2d44',
                            color: '#FFFFF0' // Color of the tick marks for the y-axis
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            backgroundColor: '#1d2d44',
                            color: '#FFFFF0' // Color of the legend labels
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 5, // Size of data points

                    }
                },


            }
        });

        // Cleanup function
        return () => {
            // Destroy the chart when the component unmounts
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            <div className='chartDash'>
                <canvas ref={chartRef} style={{ backgroundColor: '#3e5c76' }} />
            </div>
            <div className='filters'>
                
                 <h1>Filters:</h1>
                 <p>Choose the type filter you want for your graph:</p>
                <div className='selection-filter'>
                    <div className='selection-filter-option active'>Year</div>
                    <div className='selection-filter-option'>Month</div>
                    <div className='selection-filter-option'>People</div>
                    <div className='selection-filter-option'>Group</div>
                </div>
                <div className='choose-filter'></div>
            </div>
        </>


    )
};

export default ChartComponent;
