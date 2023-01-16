import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { blue } from '@mui/material/colors';

interface InputProps {
    type: string;
    name: inputRecado;
    label: string;
    value: string;
    handleChange: (value: string, key: inputRecado) => void;
}

export type inputRecado = 'Description' | 'Detail';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black'
      },
      '&.Mui-focused fieldset': {
        borderColor:'black'
      },
    },
  });
  

function InputHome({name, type, label, value, handleChange} : InputProps){
    return(
        <CssTextField name={name} label={label} variant="outlined" type={type} value={value} sx={{ width: '85%'}} onChange={(ev) => handleChange(ev.target.value, name)} />
    )
}

export default InputHome;