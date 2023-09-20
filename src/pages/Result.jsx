import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ChartComponent from '../components/ChartComponent';
import TestTable from 'components/testTable';

const Result = () => {

    let user = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const [attempts, setAttempts] = useState(0);
    const [score,setScore] = useState([]);
    const [data,setData] = useState([])

    const { title } = location.state;

    useEffect(() => {
        const getData = async () => {
            const result = await fetch('https://smiling-pig-turtleneck.cyclic.app/api/getScore', {
                method: 'POST',
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ testUser: user._id, testName: title }),
            })

            const response = await result.json();

            setAttempts(response?.score?.length)

            response?.score?.map((res) => {
                score.push(res.testScore.toFixed(2));
            })

            setData(response.score)

        }

        getData()

    }, [])



    return (
        <div className="" >
            <h2 className="text-center mt-100" >{title.toUpperCase()} REPORTS</h2>
            {score.length > 0 && <ChartComponent scores={score} numberOfAttempts={attempts} />}
             <div>
            <TestTable testData={data} />
             </div>
        </div>
    )
}

export default Result