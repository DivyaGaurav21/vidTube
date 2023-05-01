import React from 'react';
import { Stack } from '@mui/material';

import { categories } from '../../utils/constants';

// const selectedCateogary = 'New';


const SideBar = ({selectedCateogary , setSelectedCateogary}) => {
   
  return (
    <Stack
     direction="row"
     sx={{
        overflowY:"auto",
        height:{sx:'auto' , md:'95%'},
        flexDirection:{md:'column'},
     }}
    >
    {
        categories.map((category) =>(
            <button 
            className='category-btn'
            onClick={()=>{setSelectedCateogary(category.name)}}
            style={{
                background:category.name === selectedCateogary && '#fc1503',
                color:'#fff'
            }}
            key={category.name}
            >
                <span 
                  style={{
                    color:category.name === selectedCateogary ? 'white': 'red' , marginRight:'10px'
                  }}
                >{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))
    }
    </Stack>
  )
}

export default SideBar;