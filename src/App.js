import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";


import './App.css'

import Navbar from "./components/navSection/Navbar";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/Videos/ChannelDetail";
import SearchFeed from "./components/SearchFeed";



function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background:'#000000',}}>
        <Navbar/>
       <Routes>
        <Route path="/" exact element = {<Feed/>} />
        <Route path="/video/:id" element = {<VideoDetail/>} />
        <Route path ="/channel/:id" element={<ChannelDetail/>} />
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
       </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
