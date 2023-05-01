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
      sx={{ position: 'sticky', top: 0, justifyContent: 'space-between' }}
      style={{
        background: 'linear-gradient(1deg, rgb(0, 0, 0) 11.2%, rgb(247, 30, 30) 100.3%)',
        borderBottom: '1px solid #800000'
      }}
    >

      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo Image" height={45} />
        <span className='logotext' style={{color:'#fff' , marginLeft:'5px' , fontSize:'1.5rem' , fontWeight:'800'}}>VTuBe</span>
      </Link>

      <SearchBar />


    </Stack>
  )
}

export default Navbar