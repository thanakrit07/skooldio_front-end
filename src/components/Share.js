import React from 'react'
import Grid from '@material-ui/core/Grid'
import user from '../image/user.svg'
import share from '../image/share.svg'
export default function Share(props) {
    return (
        <Grid container justify="space-between">
            <Grid item xs={3}>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <img src={user} alt="user" width="10px" height="10px" />
                    <p>{props.nUsers} คนที่สนใจ</p>
                </Grid>
            </Grid>
            <Grid>
                <img src={share} alt="share" />
            </Grid>
        </Grid>
    )
}