import React from 'react';
import './css/App.css';
import Infohead from './components/Infohead';
import Scoreboard from './components/Scoreboard';
import Scoredetail from './components/Scoredetail';
import Share from './components/Share';
import { Grid, Paper } from '@material-ui/core'
function App() {
  return (
    <Grid container justify="center">
      <Grid item>
        <Paper className="main">
        <Infohead faculty="วิศวกรรมศาสตร์" major="วิศวกรรมทั่วไป" university="จุฬาลงกรณ์มหาวิทยาลัย"/>
        <hr/>
        <Scoreboard/>
        <hr/>
        <Scoredetail/>
        <hr/>
        <Share nUsers={10}/>
        </Paper>
        
      </Grid>
    </Grid>
  );
}
export default App
