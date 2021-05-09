import React, { useContext } from "react";
import logo from '../icon/logo.png';
import classes from './Footer.module.css';
import { FinanceContext } from "../../App";
import { Link } from 'react-router-dom';

const Footer = () => {
    const { links_info } = useContext(FinanceContext);

    return (
        <div className={classes.all}>
            <footer className={classes.footer_box}>
                <div>
                    <img src={logo} className={classes.logo}/>
                </div>
                <div className={classes.each_box}>
                    <div className={classes.top_font}>About us</div>
                    {links_info.map((link) => (
                        <div>
                            <Link to={link.url} style={{textDecoration: 'none', color: 'black'}}>
                                <div className={classes.link_font}>
                                {link.title}
                                </div>
                            </Link>
                        </div>
                    ))} 
                </div>
            </footer>
        </div>
    )
}

export default Footer
