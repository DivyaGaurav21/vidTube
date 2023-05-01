import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
   <Stack
     direction="row"
     alignItems="center"
     p={2}
     sx={{ position: 'sticky'  , top:0 , justifyContent:'space-between'}}
     style={{background: 'linear-gradient(175deg, rgb(6, 2, 2) 32.4%, rgb(137, 30, 47) 98.8%)'}}
     >
    
    <Link to='/' style={{display:'flex' , alignItems:'center' }}>
      <img src={logo} alt="Logo Image" height={45}/>
    </Link>

   <SearchBar/>
    

   </Stack>
  )
}

export default Navbar