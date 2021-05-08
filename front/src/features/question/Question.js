import React from 'react';
import classes from './Question.module.css';
import Button from '@material-ui/core/Button';
import head_icon from './phone.jpeg'

const Question = () => {
    return (
        <div>
            <div className={classes.head_box}>
                <img src={head_icon} className={classes.head_icon}/>
                <div className={classes.head_font}>お問い合わせ</div>
            </div>
            <div className={classes.body_all}>
                <div　className={classes.form_all}>
                    <div>
                        以下のフォームから回答してください。
                    </div>
                    <div　className={classes.form_box}>
                        <Button variant="contained" color="primary">
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfufDZ65-WX590zRFBDBF41EH0AD2Hk4LqPq_wbex7FAfepBA/viewform'　className={classes.form}>お問い合わせフォーム</a>
                        </Button>
                    </div>
                </div>
            </div>   
        </div>  
    )
}

export default Question
