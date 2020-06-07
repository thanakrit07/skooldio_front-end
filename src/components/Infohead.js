import React from 'react';
import logo from '../image/engineer-icon.svg';
import heart from '../image/heart.svg';
import Grid from '@material-ui/core/Grid';
import '../css/Infohead.css';

export default function Infohead(props) {

    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            className="infohead"
        >
            <Grid item xs={3}>
                <img src={logo} alt="Logo" width="80px" height="86px" />
            </Grid>

            <Grid item xs={8}>
                <Grid container direction="column">
                    <p className="faculty">คณะ{props.faculty}</p>
                    <p className="major">สาขา{props.major}</p>
                    <p className="univ">{props.university}</p>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <img src={heart} alt="heart" width="24px" height="21px"/>
            </Grid>
        </Grid>
    )
}