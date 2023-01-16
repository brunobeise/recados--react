import React from "react";
import BannerImage from "../../components/BannerImage";
import ContainerForm from "../../components/ContainerForm";
import MainConfig from "../../components/Main";
import Form from "../../components/Form";
import { Grid } from "@mui/material";

function Signup(){
    return(
        <Grid container width='100vw' height='100vh' justifyContent='center' >
            <Grid item xs={12} md={5} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Form mode="signup"/>
            </Grid>
        </Grid>
    )
}

export default Signup;