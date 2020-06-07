import React from 'react'
import Grid from '@material-ui/core/Grid'
import Round from './Round'
import Editscore from './Editscore'
import medal from '../image/medal.svg'
import '../css/scoreboard.css'
export default function Scoreboard() {
    return (
        <Grid container className="scoreboard">
            <Grid container direction="row">
                <p className="listR">รอบที่เปิด</p>
                <Round num="1" isOpen={true} />
                <Round num="2" isOpen={true} />
                <Round num="3" isOpen={false} />
                <Round num="4" isOpen={true} />
                <Round num="5" isOpen={false} />
            </Grid>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <p className="myR">รอบที่ 4 : Admission</p>
                <Editscore />
            </Grid>
            <Grid container direction="row" justify="space-around">

                <Grid item xs={8}>
                    <Grid style={{ marginTop: "20px", marginLeft: "20px" }}>

                        <img src={medal} alt="medal" />

                    </Grid>
                </Grid>

                <Grid item item xs={4} className="myscore">
                    <Grid container direction="column" alignItems="flex-end">
                        <p id="t">คะแนนของคุณคือ</p>
                        <p id="myscore">23,453</p></Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
                <Grid item xs={3}>
                    <Grid container direction="column" alignItems="center">
                        <p className="allscore">20,845</p>
                        <p className="des">คะแนนต่ำสุด 60</p>
                    </Grid>
                </Grid>
                <hr />
                <Grid item xs={3}>
                    <Grid container direction="column" alignItems="center">
                        <p className="allscore">21,345</p>
                        <p className="des">คะแนนเฉลี่ย 60</p>
                    </Grid>
                </Grid>
                <hr />
                <Grid item xs={3}>
                    <Grid container direction="column" alignItems="center">
                        <p className="allscore">23,415</p>
                        <p className="des">คะแนนสูงสุด 60</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}