import React,{useEffect, useState} from 'react';
import Alert from '@material-ui/lab/Alert';
import {XAxis, YAxis, CartesianGrid, Tooltip,AreaChart,Area} from 'recharts';
import '../App.css';
import {useParams,useHistory} from "react-router-dom";

const FiveDaysWeather = () => {
    const history = useHistory();
    const { id } = useParams();
    const [chartData, setChartData] = useState([]);
    const [error, setError] = useState({show:false, text:''});

    const fetchDetails = (id) => {
        setError({show:false});
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            if(parseInt(data.cod) === 200){
            
                let tempData = []
                for (let i = 0; i < data.list.length; i += 8){
                    tempData= [
                        ...tempData,
                        {
                            date: data.list[i].dt_txt.substr(0, 10),
                            uv: data.list[i].main.temp,
                        },
                    ];
                }
                setChartData(tempData); 
            }
            else{
                setError({show:true, text: data.message})
            }
            setError(false);
        }).catch((err) => {
            setError({show:true, text: err.message});
            
        });
        setError(false);
    };

    useEffect(() => {
        fetchDetails(id);
    }, []);

    const navigateToHome =() => {
        history.push('/'); 
    }

    return (
        <div>
            <AreaChart width={600} height={400} data={chartData}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date"/>
                <YAxis type="number" domain={[0, 40]}/>
                <Tooltip/>
                <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
            {error.show && <Alert severity="error">{error.text}</Alert>}
            <button onClick={navigateToHome}>
                Go Back
            </button>
        </div>
    )
}

export default FiveDaysWeather;
