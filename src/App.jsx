import Geolocation from 'react-native-geolocation-service';
import './App.css'
import { useState } from 'react';

function App() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();


  return (
    <div>
       {
    Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setLatitude(position?.coords?.latitude); 
          setLongitude(position?.coords?.longitude);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }
<h1>Your coordinates -</h1>
<h2>Latitude: {latitude}</h2>
<h2>Longitude: {longitude}</h2>  
    </div>

  )
}

export default App
