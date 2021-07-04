import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import {Button} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Delete} from '@material-ui/icons';
import {Checkbox} from '@material-ui/core';
import {Select, MenuItem} from '@material-ui/core';
import {Switch} from '@material-ui/core';
import {Grid} from '@material-ui/core';

function App() {
  const[color, setColor]=useState('primary');
  const[btnDisable, setBtnDisable]=useState(false);
  const[name, setName]=useState([]);
  const[course, setCourse]=useState(3);
  function customMe() {
    // setColor('secondary')
    setBtnDisable(true)
    // alert("function called")
  }

  function getValue(e) {
    let data = name;
    // setBtnDisable(true)
    data.push(e.target.value)
    setName(data)
    console.warn(name);
  }

  function updateSelectVal(e) {
    setCourse(e.target.value)
    console.warn(e.target.value);
  }

  function getSwitchVal(e,val) {
    // setCourse(e.target.value)
    console.warn(val);
  }

  return (
    <div className="App">
      <h1>React Component</h1>
      <Button color={color} variant="contained" disabled={btnDisable} onClick={()=>customMe()} startIcon={<Delete/>}>Material UI Button</Button>
      <Checkbox color="primary" value="abhi" onChange={(e)=> getValue(e)}/>
      <Checkbox color="primary" value="roy" onChange={(e)=> getValue(e)}/>
      <Checkbox color="primary" value="joy" onChange={(e)=> getValue(e)}/>
      <Select value={course} displayEmpty onChange={(e)=>updateSelectVal(e)}>
          <MenuItem value="" disabled>Select</MenuItem>
          <MenuItem value={1}>Python</MenuItem>
          <MenuItem value={2}>PHP</MenuItem>
          <MenuItem value={3}>React</MenuItem>
      </Select>
      <Switch color="primary" size="small" onChange={getSwitchVal}/>
      <br/>
      <Grid lg={12} item container spacing={10}>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'purple'}}>First</h1></Grid>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'purple'}}>Second</h1></Grid>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'purple'}}>Third</h1></Grid>
        <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:'purple'}}>Fourth</h1></Grid>
      </Grid>
    </div>
  );
}

export default App;
