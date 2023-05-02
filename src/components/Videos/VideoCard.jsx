import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../../utils/constants';

const VideoCard = ({ video }) => {
  // console.log(video.id.videoId , video.snippet);


  const vId = video.id.videoId;
  const vSnippet = video.snippet;
  return (
    <Card
      sx={{
        width: {
          xs: '100%', // for extra-small devices
          sm: '300px', // for small devices and above
          md: '330px',
        },
        borderRadius: 0,
        boxShadow: 'none'
      }}
    >

      <Link to={vId ? `/video/${vId}` : demoVideoUrl}>
        <CardMedia
          image={vSnippet?.thumbnails?.high?.url}
          alt={vSnippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', maxWidth:'328px' }}>
        <Link to={vId ? `/video/${vId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#fff">
            {vSnippet?.title.slice(0, 60)}
          </Typography>
        </Link >
        <Link to={vSnippet.channelId ? `/channel/${vSnippet.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="gray">
            {vSnippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 16, color: 'gray', ml: '5px', position: 'relative', top: '7px' }} />
          </Typography>
        </Link >
      </CardContent>

    </Card>
  )
}

export default VideoCard;