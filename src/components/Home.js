import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Search from './Search.js'
import "./Home.css";
function Home() {
  return (
    <div className="home">
        <div className='home_header'>
            <div className='home_headerLeft'>
                
                </div>
        
    <div className='home_headerRight'>
<p>Gmail</p>
<p>Images</p>

<div className='Icons'>
<AppsIcon />
<AccountCircleIcon />
</div>



    </div>
    </div>
    <div className='home_body'>
    <a href="https://www.freepnglogos.com/pics/google-logo" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" width="300" alt="file google logo svg wikimedia commons" /></a>
        <div className='home_input'>
<Search />
<div className='language'>
<p>Google offered in: हिन्दी  বাংলা  తెలుగు  मराठी  தமிழ்  ગુજરાતી  ಕನ್ನಡ  മലയാളം  ਪੰਜਾਬੀ</p>
        </div></div>
        
    </div>
    <div className='home_footer'>
    <div className='home_footerLeft'>
        <p>About</p>
        <p>Advertising</p>
        <p>Business</p>
        <p>How Search works</p>
        </div>
    <div className='home_footerRight'>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Settings</p>
    </div>
    </div>
    </div>
  );
}

export default Home