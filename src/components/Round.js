import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Round(props) {
    window.console.log(props)   
    const dot = {
        height: "29px",
        width: "29px",
        color: "white",
        backgroundColor: props.isOpen ? "#2ecc71":"#d8d8d8",
        borderRadius: "50%",
        marginLeft:"8px",
    }
    const nb ={
        fontColor: "white",
        fontWeight:"500",
        fontSize:"18.4px",
    }
    return (
        <Grid container style={dot} justify="center" alignItems="center">
            <p style={nb}>
                {props.num}
            </p>
        </Grid>
    )
}