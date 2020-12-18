import './App.css';
import Loading from "./components/Loading";
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react'
import CheckboxDropdown from './components/CheckboxDropdown'

function App() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const locationList = [
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location',
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location',
    },
    {
      id: 6,
      title: 'Zurich',
      selected: false,
      key: 'location',
    },
  ];
  
  const [location, setLocation] = useState(locationList)



  const handleListChange = (e) => {
    let location_temp = [...location];
    let index = location.findIndex(({ id }) => id === Number(e.target.name));
    if (index !== -1) {
      location_temp[index].selected = !location_temp[index].selected;
      setLocation(location_temp);
    } 
  }

  return (
    <div>
      <Container maxWidth='md'>
        <div style={{ backgroundColor: '#116BC8', padding: 10, display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ width: '50%', padding: 10 }}>
            <TextField id="standard-basic" label="Search Furniture" fullWidth style={{ marginBottom: 20 }} />
            <CheckboxDropdown style={{ marginTop: 20 }} list={[]}
              title="Select location"
              list={location}
              onChange={handleListChange}
            />
          </div>
          <div style={{ width: '50%', padding: 10 }}>
            <CheckboxDropdown style={{ marginTop: 20 }} list={[]}
              title="Select location"
              list={location}
              onChange={handleListChange}
            />
          </div>
        </div>
      </Container>

      <Container maxWidth='md'>
        <div style={{
          display: 'flex'
        }}>
          <div>
          </div>
        </div>
      </Container>
    </div >
  );
}




export default App;
