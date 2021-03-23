import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Button,OverlayTrigger,Popover} from 'react-bootstrap';
import Forward30Icon from '@material-ui/icons/Forward30';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EcoIcon from '@material-ui/icons/Eco';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FastForwardIcon from '@material-ui/icons/FastForward';
import TapAndPlayIcon from '@material-ui/icons/TapAndPlay';
function Thirdhead() {
    return (
        <div class="third">
            <Navbar style={{'marin-right':"12%"}}size="" bg="ligth" variant="light" container>
  
  
  <Navbar.Collapse className="justify-content-left" >
    <Navbar.Text><div className="icons"><FastForwardIcon/>
       ZNOW:UNLIMITED NEXT DAY DELIVERY</div>
    </Navbar.Text>
    
    
    <Navbar.Text ><div className="icons"><Forward30Icon/>
              DAYS FREE RETURNS</div>
    </Navbar.Text>
    
    
    <Navbar.Text>
       <div className="icons"><LocalShippingIcon/>
       FREE DELIVERY AVAILABLE*</div>
    </Navbar.Text>
    
    <Navbar.Text>
       <div className="icons"><EcoIcon/>
       OUR SUSTAINABILITY JOURNEY</div>
    </Navbar.Text>
   
            <Navbar.Text><div className="icons"><FavoriteIcon/>
       COVID-19 DONATION</div>
       </Navbar.Text>
    </Navbar.Collapse>
   
  
</Navbar>

        </div>
    )
}

export default Thirdhead
