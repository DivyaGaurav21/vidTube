import React from 'react'
import { useState , useEffect } from 'react';
import { Box , Stack , Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from '../Videos/Videos';


const Feed = () => {
  return (
    <Stack sx={{flexDirection:{sx:"column" , md: "row"}}}>

     <Box sx={{height:{sx: 'auto' , md: '92vh'} , borderRight:'1px solid #3d3d3d' , px:{sx:0 , md:2}}}>
       <SideBar/>
      <Typography className='copyright' varient='body2' sx={{mt:1.5 , color:'#fff'}}>
       cpr fetching@rapidApi
      </Typography>
     </Box>

    <Box p={2} sx={{overflowY:'auto' , height:'90vh', flex:2}}>
      <Typography variant='h5' fontWeight="bold" mb={2} sx={{color:"#fff"}}>
       New <span style={{color:'#f31503' }}>videos</span>
      </Typography>
      <Videos/>
    </Box>

    </Stack>
  )
}

export default Feed;