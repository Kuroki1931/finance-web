import React from 'react'
import classes from './Our_company.module.css'
import head_icon from './team.jpeg'

const Our_company = () => {
    return (
        <div>
            <div className={classes.head_box}>
                <img src={head_icon} className={classes.head_icon}/>
                <div className={classes.head_font}>会社概要</div>
            </div>
            <div className={classes.all}>
            </div>
        </div>
    )
}

export default Our_company
