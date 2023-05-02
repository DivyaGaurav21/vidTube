import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utils/constants'

const ChannelCard = ({ channelDetail , marginTop }) => {
  // console.log(channelDetail, 'channel')
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: {
          xs: '100%', // for extra-small devices
          sm: '300px', // for small devices and above
          md: '330px',
        },
        height:'326px',
        margin:'auto',
        marginTop:marginTop
        
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          textAlign:'center',
          color:'#fff'
        }}
        >
          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius:'50%',
             height:'180px' ,
              width:'180px',
              mb:2,
              border:'1px solid #f44336'
          }}
          />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 19, color: 'gray', ml: '5px', position: 'relative', top: '7px' }} />
        </Typography>
         {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {channelDetail?.statistics?.subscriberCount} Subscriber
          </Typography>
         )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;