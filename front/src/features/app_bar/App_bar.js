import classes from "./App_bar.module.css";
import React from "react";
import { Link } from 'react-router-dom';
import footer_logo from './東大金融研究会_ロゴ.png';

const links_info = [
  {
    title: '企業レポート',
    url: '/report/',
  },
  {
    title: '読み方',
    url: '/how_read/',
  },
  {
    title: '質問箱',
    url: '/question_box/',
  },
  {
    title: '日本最高基盤とは',
    url: '/our_company/',
  },
  {
    title: '東大金融会とは',
    url: '/ut_finance/',
  },
  {
    title: 'お問い合わせ',
    url: '/question/',
  },
  {
    title: 'ログイン',
    url: '/login/',
  },
]

const App_bar = () => {
  
  return (
    <div className={classes.header}>
      <img src={footer_logo} className={classes.header_logo}/>
      {links_info.map((link) => (
        <div className={classes.header_url}>
          <Link to={link.url}>
            <div className={classes.header_font}>
              {link.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default App_bar
