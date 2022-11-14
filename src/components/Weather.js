import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import tools1 from '../images/tools1.jpg'
 import tools2 from '../images/tools2.jpg'
import Container from 'react-bootstrap/Container';


const CardExampleCard = ({weatherData}) => (
    <div>

<h2 class="tools-topic" >Current Weather Report</h2>
<h6 class="weather-source">Source: OpenWeather</h6>

    <Card id="card" class="col d-flex justify-content-center">
       <Card.Body>{weatherData.name}</Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Date: {moment().format('LL')}</ListGroup.Item>
        <ListGroup.Item>Day: {moment().format('dddd')}</ListGroup.Item>
        <ListGroup.Item>Temprature: {weatherData.main.temp} &deg;C</ListGroup.Item>
        <ListGroup.Item>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
        <ListGroup.Item>Description: {weatherData.weather[0].main}</ListGroup.Item>
        <ListGroup.Item>Humidity: {weatherData.main.humidity} %</ListGroup.Item>
     
       
      </ListGroup>
    </Card>


</div>
)



export default CardExampleCard;