import classes from './Question_box.module.css'
import { useSelector, useDispatch } from "react-redux";
import { withCookies } from "react-cookie";
import React, { useEffect } from 'react'

import {
    selectQuestion_list,
    fetchAsyncQuestion_listGet,
    selectAsk_list,
    fetchAsyncAsk_listGet,
} from "./question_boxSlice";

const Question_box = (props) => {
    const dispatch = useDispatch();
    const token = props.cookies.get("current-token");
    const question_list = useSelector(selectQuestion_list)
    const ask_list = useSelector(selectAsk_list)

    useEffect(() => {
        dispatch(fetchAsyncAsk_listGet(token))
        dispatch(fetchAsyncQuestion_listGet())
    }, [dispatch]);

    return (
        <div className={classes.all}>
            <div className={classes.head}>
                質問箱
            </div>

        </div>
    )
}

export default withCookies(Question_box)
