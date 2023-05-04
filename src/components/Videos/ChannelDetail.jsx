import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channnelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(videos)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(0deg, rgba(93,14,94,0.9214186895461309) 0%, rgba(112,2,2,1) 83%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channnelDetail} marginTop='-130px' />
      </Box>
      <Box display="flex" p="2">
      <Videos videos={videos}/>
       <Box></Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail