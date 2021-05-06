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
    const ask_to_qustion = (id) => {
        const ask_to = ask_list.filter((output) => {
            return output.askto == id
        })
        return ask_to
    }

    useEffect(() => {
        dispatch(fetchAsyncAsk_listGet(token))
        dispatch(fetchAsyncQuestion_listGet())
    }, [dispatch]);

    return (
        <div className={classes.all}>
            <div className={classes.head}>
                質問箱
            </div>
            {question_list.map((question) => (
                <div>
                    <div>
                        <div className={classes.question_box}>
                            <div>A, {question.title}</div>
                            <div>
                                {question.question}
                            </div>
                        </div>
                    </div>
                    <div className={classes.ask_all}>
                        <div className={classes.ask_box}>
                            {ask_to_qustion(question.id).length != 0 ?
                            <div>
                                {ask_to_qustion(question.id).map((ask) => (
                                    <div>
                                        A, {ask.ask}
                                    </div>
                                ))}
                            </div>
                            :
                            <div>
                            　質問内容を審査の上で対応いたします。
                            </div>
                            }
                        </div>
                    </div>
                </div>
            ))}
            

        </div>
    )
}

export default withCookies(Question_box)
