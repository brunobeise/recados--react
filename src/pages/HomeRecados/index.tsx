import React,{useState, useEffect} from 'react';
import InputHome, { inputRecado } from '../../components/InputHome';
import BasicTable from '../../components/Table';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router/dist';
import { v4 as uuid} from 'uuid';
import { Recado, User } from '../../store/modules/typeStore';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { cadastrarRecado, excluirLogado } from '../../store/modules/userLogged/userSlice';
import { logout } from '../../store/modules/users/usersSlice';
import { clearInputDesc, mudarValueDesc } from '../../store/modules/userLogged/descricaoSlice';
import { clearInputDet, mudarValueDet } from '../../store/modules/userLogged/detailSlice';
import { blue, grey } from '@mui/material/colors';
import { Grid } from '@mui/material';




function HomeRecados(){

    const navigate = useNavigate();
    const userLogged = useAppSelector((state) => state.userLogged);
    const inputDesc = useAppSelector((state) => state.inputDesc);
    const inputDetail = useAppSelector((state) => state.inputDetail);
    const buttonEnviar = useAppSelector((state) => state.buttonEnviar);

    const dispatch = useAppDispatch();

    useEffect(() =>{
        if (userLogged.email === ''){
            navigate('/')
        }
    },[userLogged])

    function mudaInputDesc(event : string) {
        dispatch(mudarValueDesc(event));
    }

    function mudaInputDet(event : string) {
        dispatch(mudarValueDet(event));
    }

    const sendInputs = () => {
        const novoRecado: Recado = {
            id: uuid(),
            description: inputDesc,
            detail: inputDetail
        }

        dispatch(cadastrarRecado(novoRecado));
        dispatch(clearInputDet())
        dispatch(clearInputDesc())
        
    }

    const Logout = () => {
        if(userLogged){
            dispatch(logout(userLogged));
            dispatch(excluirLogado());
            navigate('/')
        }
    }

    return(

        <Grid container sx={{
                width: '100vw',
                height: '100vh',
                margin: 'none',
                backgroundColor: '#ebebeb',
                color: 'white',
            }}>
            <Grid item xs={12} md={5} sx={{
                height: {xs:'10vh', md:'20vh'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <InputHome label='Título' name='Description' type='text' value={inputDesc} handleChange={mudaInputDesc}/>
            </Grid>
            <Grid item xs={12} md={5} sx={{
                height: {xs:'10vh', md:'20vh'},
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <InputHome label='Descrição' name='Detail' type='text' value={inputDetail} handleChange={mudaInputDet}/>
            </Grid >
            <Grid item xs={12} md={2} sx={{
                height: {xs:'10vh', md:'20vh'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white !important',
            }}>
                <Button  variant="contained" endIcon={<SendIcon />} sx={{ width: '50%', height: '3rem', color: grey[50], backgroundColor: blue[900]}} disabled={buttonEnviar == false} onClick={sendInputs}>Enviar</Button>
            </Grid>
            <Grid item xs={12}>
                <BasicTable />
            </Grid>
            <Grid item>
                <Button variant="outlined" color="error" startIcon={<LogoutIcon />} onClick={Logout} sx={{marginLeft: '2rem'}}>Logout</Button>
            </Grid>
        </Grid>   
    )
}

export default HomeRecados;