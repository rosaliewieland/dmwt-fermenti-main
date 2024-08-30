/*
"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registriere die benötigten Komponenten
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
});

const UserCharts = ({ chartData }) => {
    const [data, setData] = useState({
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        datasets: [
            {
                label: 'Fermenti-Users',
                data: Array(12).fill(0),  // Initialisiere mit 0
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        if (chartData) {
            setData({
                ...data,
                datasets: [
                    {
                        ...data.datasets[0],
                        data: chartData.datasets[0].data,
                    },
                ],
            });
        }
    }, [chartData]);

    return (
        <div style={{ width: '700px', height: '700px' }}>
            <h1>User Übersicht</h1>
            <Bar data={data} />
        </div>
    );
};

export default UserCharts;
*/


"use client";  // Dies muss am Anfang der Datei stehen

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registriere die benötigten Komponenten
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
    ssr: false,
});

const BarChart = () => {
    const [data, setData] = useState({
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        datasets: [
            {
                label: 'Fermenti-Users',
                data: Array(12).fill(0),  // Initialisiere mit 0
                backgroundColor: 'rgba(2, 82, 89, 0.3)',
                borderColor: 'rgba(0, 113, 114, 1)',
                borderWidth: 1,
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/getMonthlyUsers'); // Pfad zur API-Route
            if (!response.ok) {
                console.error("Failed to fetch data");
                return;
            }

            const result = await response.json();

            setData(prevData => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: result,
                    },
                ],
            }));
        };
        fetchData();
    }, []);
    return (
        <div style={{ width: '700px', height: '700px' }}>
            <h1>User Übersicht</h1>
            <Bar data={data} />
        </div>
    );
};
export default BarChart;
