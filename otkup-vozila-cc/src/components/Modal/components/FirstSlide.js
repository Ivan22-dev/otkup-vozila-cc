import { Autocomplete, TextField } from '@mui/material';
import * as React from 'react';
import { carBrands, endpoint } from '../constants/constants';
import EngineType from './EngineType';

export const FirstSlide = () => {

  return (
    <>
        <Autocomplete
            className='mt-2'
            disablePortal
            name="brand"
            id="combo-box-demo"
            options={carBrands}
            getOptionLabel={(option) => option.make_display}
            required
            renderInput={(params) => <TextField {...params} label="Odaberite marku vozila *" />}
         />
        <TextField
            className='mt-3'
            autoFocus
            required
            margin="dense"
            id="model"
            name="model"
            label="Unesite model vozila"
            type="model"
            fullWidth
            variant="outlined"
        />
          <TextField
            className='mt-3'
            autoFocus
            required
            margin="dense"
            id="production"
            name="production"
            label="Godina proizvodnje"
            type="production"
            fullWidth
            variant="outlined"
          />
        <TextField
            className='mt-3 mb-3'
            autoFocus
            required
            margin="dense"
            id="kilometers"
            name="kilometers"
            label="Unesite prijeđenu kilometražu"
            type="kilometers"
            fullWidth
            variant="outlined"
        />
        <EngineType  />
    {"istek registracije, ocekiva cijena, kratak opis"}
  </>
  )
}
