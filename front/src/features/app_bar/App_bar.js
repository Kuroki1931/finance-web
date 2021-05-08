import classes from "./App_bar.module.css";
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import footer_logo from './東大金融研究会_ロゴ.png';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { FinanceContext } from "../../App";

const App_bar = () => {
  const { links_info } = useContext(FinanceContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.all}>
      <div className={classes.header}>
        <img src={footer_logo} className={classes.header_logo}/> 
        <div className={classes.menu_header}>
          {/* 画面が広い時 */}
          {links_info.map((link) => (
            <div className={classes.wide_header_url}>
              <Link to={link.url}>
                <div className={classes.header_font}>
                  {link.title}
                </div>
              </Link>
            </div>
          ))}
          {/* # 画面が狭い時 */}
          <div className={classes.narrow_header_url}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon style={{fontSize: '40px'}}/>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {links_info.map((link) => (
              <MenuItem onClick={handleClose}>
                <Link to={link.url}>
                  <div className={classes.menu_font}>
                    {link.title}
                  </div>
                </Link>
              </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App_bar
