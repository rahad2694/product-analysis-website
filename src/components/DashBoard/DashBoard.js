import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart,Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(output => setData(output));
    }, []);
    return (
        <div className='db-container grid md:grid-cols-2 my-3'>
            <div>
                <p className='my-3 text-xl'>Monthly Revenue Analysis</p>
                <div className='flex justify-center'>
                    <LineChart className='line-chart' width={350} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>Group Wise Sales value</p>
                <div className='flex justify-center'>
                    <PieChart className='pi-chart' width={300} height={300}>
                        <Pie
                            dataKey="sell"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>Group Wise Revenue value</p>
                <div className='flex justify-center'>
                    <AreaChart className='area-chart'
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
            <div>
                <p className='my-3 text-xl'>Monthly Investment VS Revenue</p>
                <div className='flex justify-center'>
                    <BarChart className='bar-chart'
                        width={400}
                        height={280}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;