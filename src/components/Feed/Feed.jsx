import React from 'react'
import { useState , useEffect } from 'react';
import { Box , Stack , Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from '../Videos/Videos';

//-----api data-------------//
import { fetchFromAPI } from '../../utils/fetchFromAPI';


const Feed = () => {
const [selectedCateogary , setSelectedCateogary] = useState('New');
const [videos , setVideos] = useState([]);

useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${selectedCateogary}`).then(data=>{
   setVideos(data.items)
  })
}, [selectedCateogary])


  return (
    <Stack sx={{flexDirection:{sx:"column" , md: "row"}}}>

     <Box sx={{height:{sx: 'auto' , md: '92vh'} , borderRight:'1px solid #800000' , px:{sx:0 , md:2}}}>
      
       <SideBar 
       selectedCateogary={selectedCateogary}
       setSelectedCateogary={setSelectedCateogary}
       />

      <Typography className='copyright' varient='body2' sx={{mt:1.5 , color:'#fff'}}>
       cpr fetching@rapidApi
      </Typography>
     </Box>

    <Box p={2} sx={{overflowY:'auto' , height:'90vh' }} >
      <Typography variant='h6' fontWeight="bold" mb={2} sx={{color:"#fff"}}>
       {selectedCateogary} <span style={{color:'#f31503' }}>videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>

    </Stack>
  )
}

export default Feed;