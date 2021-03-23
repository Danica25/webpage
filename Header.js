import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Header() {  
  return (
    
    
    <div className="header" container-fluid>
      
      <img alt=" "
          className="header__logo"

          src="http://www.guesswork.co/custom/logo/zaloracom.png"
        />
  <div className="header__nav">
    
  <div className="header__option">
      <span className="header__optionLineTwo">WOMEN</span>
    </div>
    <div className="header__option">
      <span className="header__optionLineTwo">MEN</span>
    </div>
    <div className="header__option">
      <span className="header__optionLineTwo">LUXURY</span>
    </div>
    <div className="header__option">
      <span className="header__optionLineTwo">BEAUTY</span>
    </div>
    <div className="header__option">
      <span className="header__optionLineTwo"><mark>KIDS</mark></span>
    </div>
    
    

    <div className="header__option">
      <span className="header__optionLineTwo">LIFESTYLE</span>
    </div>

    <div className="header__search">
   <input className="header__searchInput-md" type="text" placeholder="search for products,trends and brands" />
    <SearchIcon className="header__searchIcon" />
  </div>
      
    

        
          <div className="header__optionBasket">
              <PermIdentityIcon mergin-left="4%"cursor="pointer" fontSize="large"/>
              </div>
              <div className="header_optionheart">
              <FavoriteBorderIcon cursor="pointer" fontSize="large"/>
              </div>
              <div className="header__optionBasket">
            <ShoppingBasketIcon cursor="pointer"  fontSize="large"/>
            
          </div>
        
      </div>
    </div>
    
  );
}

export default Header;