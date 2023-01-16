import React from "react";
import BannerImage from "../../components/BannerImage";
import ContainerForm from "../../components/ContainerForm";
import MainConfig from "../../components/Main";
import Form from "../../components/Form";
import Grid from "@mui/material/Grid";

function Login(){
    return(
        <Grid container width='100vw' height='100vh' alignItems='center' justifyContent='center'>
            <Grid item xs={12} md={5} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Form mode="login"/>
            </Grid>
        </Grid>
    )
}

export default Login;