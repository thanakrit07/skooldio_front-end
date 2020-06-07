import React from 'react';
import edt from '../image/edit.svg';
import Grid from '@material-ui/core/Grid'

export default function Editscore() {
    const editscore = {
        width: "120px",
        height: "35px",
        borderRadius: "17.5px",
        border: "solid 1px #ff5a5a",
        backgroundColor: "white",
        alignItems: "inline",
        paddingLeft:"20px",
        paddingRight:"9px"
    }
    const txt = {
        width: "61px",
        height: "18px",
        fontFamily: "Prompt",
        fontSize: "12px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        color: "#ff5a5a",
    }
    return (
        <Grid container direction="row" justify="space-between" alignItems="center" style={editscore}>
            <p style={txt}>แก้ไขคะแนน</p>
            <img src={edt} alt="edit" />
        </Grid>

    )
}