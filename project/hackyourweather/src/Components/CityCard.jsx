import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
});

const CityCard = ({cityWeatherData, weatherData, setWeatherData}) => {
    
    const classes = useStyles();
    const {name, id,  sys : {country}, weather :[{main, description}], main : {temp_min, temp_max}, coord : {lon, lat} } = cityWeatherData;
    const handleDelete = () =>{
        const tempData = weatherData.filter(aCityData => aCityData.id !== id);
        setWeatherData(tempData)
    }
    
    return (
        <> 
        <Card className={classes.root}>
            <Tooltip title="Delete">
                <IconButton  onClick={handleDelete} aria-label="delete">
                <DeleteIcon />
                </IconButton>
            </Tooltip>
            <CardContent>
            <Link to={`/${id}`} > 
                    <Typography variant="h5" component="h2" >
                    {name}, {country}
                    </Typography>
            </Link>   
                <Typography variant="h5" component="h2">
                {main}
                </Typography>

                <Typography variant="body2" component="p">
                {description}<br />
                Min Temp : {(temp_min - 273.15).toFixed(3)} &#x2103;<br />
                Max Temp : {(temp_max - 273.15).toFixed(3)} &#x2103;<br />
                Location :{lat}, {lon}
                <br />
                </Typography>
            </CardContent>
            
        </Card>
        </>
       
    )
}
 
export default CityCard;