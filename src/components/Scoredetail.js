import React from 'react'
import Grid from '@material-ui/core/Grid'
export default function Scoredetail() {
    const mystyle = {
        width: 0,
        height: 0,
        marginTop: "5px",
        borderTop: "7px solid transparent",
        borderLeft: "9px solid #48b6a3",
        borderBottom: "7px solid transparent",
        marginRight: "10px"
    };

    const des = {
        height: "16px",
        fontSize: "16px",
        fontWeight: "300",
        textAlign: "left",
        color: "#48b6a3",
    }
    return (
        <Grid container>
            <div style={mystyle} />
            <p style={des}>ดูสัดส่วนคะแนน</p>
        </Grid>
    )
}