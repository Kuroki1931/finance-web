import React from 'react';
import classes from './Question.module.css';
import Button from '@material-ui/core/Button';

const Question = () => {
    return (
        <div className={classes.all}>
            <div className={classes.head}>
                お問い合わせ
            </div>
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
    )
}

export default Question
