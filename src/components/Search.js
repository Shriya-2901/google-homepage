import React from 'react'
import "./Search.css";
import Button  from '@mui/material/Button';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
function search() {
  return (
    
    <form className='search'>
      <div className='search_input'>
        <div className='search_items'>
      <SearchIcon />
        <input type="text" className='search_box' />
        <MicIcon />
      </div></div>
    
      <div className='search_button'>
    
        <Button type="submit" variant="outlined">Google Search</Button>
        <Button type="submit" variant="outlined">I'm Feeling Lucky</Button>
          </div>
          
    </form>
   
  )
}

export default search