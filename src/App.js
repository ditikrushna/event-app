import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import Header from './Header'
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard'
import Card from './Card'
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "10muZ2nuiHanqMCPr8rzIGuwh8K8OCEjrSPni9q9gGHA",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
    <Header/>
      <ul>
      {data.map((item, i) => (
       
        <Fragment key={i}>
          <Card 
          eventName={item.EventName} 
          location={item.Location}
          date1={item.StartTime}
          date2={item.EndTime}
          />
        </Fragment>
      ))}
    </ul>
    </>
  );
}
export default App;
