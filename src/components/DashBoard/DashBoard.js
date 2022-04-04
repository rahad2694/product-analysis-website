import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(output => setData(output));
    }, []);
    return (
        <div className='grid md:grid-cols-2 my-3'>
            <div>
                <p className='my-3 text-xl'>Monthly Revenue Analysis</p>
                <div className='flex justify-center'>
                    <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
                        <PieChart width={300} height={300}>
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
        </div>
    );
};

export default DashBoard;