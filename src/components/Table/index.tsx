import React,{useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import { Recado } from '../../store/modules/typeStore';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { atualizarRecado, excluirRecado } from '../../store/modules/userLogged/userSlice';
import { clearInputDesc, editarRecadoDes } from '../../store/modules/userLogged/descricaoSlice';
import { clearInputDet, editarRecadoDet } from '../../store/modules/userLogged/detailSlice';
import { changeBooleanFalse, changeBooleanTrue } from '../../store/modules/buttonEnviar';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { listaUsuarios } from '../../store/modules/users/usersSlice';

export default function BasicTable() {
    const userLogged = useAppSelector((state) => state.userLogged);
    const inputDesc = useAppSelector((state) => state.inputDesc);
    const inputDetail = useAppSelector((state) => state.inputDetail);
    const buttonEnviar = useAppSelector((state) => state.buttonEnviar);
    const listaUsuarios = useAppSelector((state) => state.users)
    const [teste, setTeste] = useState(true);


    const dispatch = useAppDispatch();

    function handleEdit(dado : Recado, index : number){
        dispatch(editarRecadoDes(dado));
        dispatch(editarRecadoDet(dado));
        setTeste(false)

        dispatch(changeBooleanFalse())
    }

    function handleAtt(dado : Recado){
        setTeste(true)
        dispatch(changeBooleanTrue())

        const novoRecado: Recado = {
            id: dado.id,
            description: inputDesc,
            detail: inputDetail,
        }

        dispatch(atualizarRecado(novoRecado));
        clearInput();

        dispatch(changeBooleanTrue())
    }
    
    function handleDelete(indice : number){
       dispatch(excluirRecado(indice));
    }
    
    function clearInput(){
        dispatch(clearInputDet())
        dispatch(clearInputDesc())
    }

    return (
        <Grid container padding={4}>
         <Grid xs={12}>
            <TableContainer component={Paper} sx={{display:'flex', justifyContent:'center', marginTop: '2rem', marginBottom: '2rem'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Título</TableCell>
                            <TableCell align="center">Descrição</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userLogged?.recados.map((dado : Recado, index : number) => (
                            <TableRow
                                key={dado.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, Color:'#fff',}}
                            >
                                <TableCell align="center">{dado.description}</TableCell>
                                <TableCell align="center">{dado.detail}</TableCell>
                                <TableCell align="center">
                                    <Grid container sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                                        <Grid item xs={12} sm={2} >
                                            <IconButton color="primary" sx={{fontSize:'10px', margin:'5px'}}  onClick={() => teste ? handleEdit(dado, index) : handleAtt(dado)}> {teste? <EditIcon /> : <UpgradeIcon />} </IconButton>
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                            <IconButton color="primary" sx={{fontSize:'10px', margin:'5px'}} onClick={() => handleDelete(index)}><DeleteIcon/> </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}