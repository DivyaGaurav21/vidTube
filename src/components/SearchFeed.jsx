import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Videos from './Videos/Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';



//-----api data-------------//



const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(data => {
      setVideos(data.items)
    })
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh' }} >
      <Typography variant='h6' fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for:  <span style={{ color: '#f31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;