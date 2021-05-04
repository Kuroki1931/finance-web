import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import classes from "./Report.module.css";


import {
    selectCompany_list,
    fetchAsyncCompnay_listGet,
    selectPDF_list,
    fetchAsyncPDF_listGet,
    selectCompany,
    fetchAsyncCompnayGet,
    selectError,
} from "./reportSlice";
import Search_bar from './Search_bar';

const Report = (props) => {
    const dispatch = useDispatch();
    const token = props.cookies.get("current-token");
    const company_list = useSelector(selectCompany_list)
    const company = useSelector(selectCompany)
    const error = useSelector(selectError)
    const pdf_list = useSelector(selectPDF_list);
    const take_url = (number) => {
        let dir = window.location.href.split("/");
        let dir2 = dir[dir.length - number];
        return dir2;
    }
    const uuid = take_url(2)

    useEffect(() => {
        dispatch(fetchAsyncPDF_listGet(token))
        dispatch(fetchAsyncCompnay_listGet())
        dispatch(fetchAsyncCompnayGet(uuid))
    }, [dispatch, uuid]);

    useEffect(() => {
        if (!token) {
            window.location.href = '/report/';
        }
    }, [token]);
    
    const target_company = pdf_list.filter((output) => {
        return output.company == uuid
    })
    const basic_report = target_company.filter((output) => {
        return output.pdf_type == 0
    })
    const deep_report = target_company.filter((output) => {
        return output.pdf_type == 1
    })
    const short_report = target_company.filter((output) => {
        return output.pdf_type == 2
    })
    console.log(basic_report)


    return (
        <div className={classes.all}>
            <div>
                <Search_bar company_list={company_list}/>
            </div>
            <div>
                <div className={classes.target_company_box}>
                 <div className={classes.target_company_name}>{company.company_name} {company.company_number} </div>
                    {basic_report != 0 &&
                        <div>
                            <div className={classes.report_head}>
                                シンプルベーシックレポート
                            </div>
                            {basic_report.map((each_pdf) => (
                                <div key={each_pdf.id} className={classes.report_box}>
                                    <a href={each_pdf.pdf}>{each_pdf.regist_date.slice(0, 10)}{each_pdf.pdf_title}</a>
                                </div>
                            ))}
                        </div>
                    }
                    {deep_report != 0 &&
                        <div>
                            <div className={classes.report_head}>
                                ディープレポート
                            </div>
                            {deep_report.map((each_pdf) => (
                                <div key={each_pdf.id} className={classes.report_box}>
                                    <a href={each_pdf.pdf}>{each_pdf.regist_date.slice(0, 10)}{each_pdf.pdf_title}</a>
                                </div>
                            ))}
                        </div>
                    }
                    {short_report != 0 &&
                        <div>
                            <div className={classes.report_head}>
                                ショートレポート
                            </div>
                            {short_report.map((each_pdf) => (
                                <div key={each_pdf.id} className={classes.report_box}>
                                    <a href={each_pdf.pdf}>{each_pdf.regist_date.slice(0, 10)}{each_pdf.pdf_title}</a>
                                </div>
                            ))}
                        </div>
                    }
                    <div className={classes.error}>
                        {error}
                    </div>
                </div>
                <div className={classes.company_list_box}>
                    {company_list.map((company) => (
                        <ul>
                            <li>
                                <Link key={company.id} to={`/report/${company.id}/`} style={{color: '#424242' }}>
                                    <dic className={classes.company_link}>
                                        {company.company_name} {company.company_number} 
                                    </dic>
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withCookies(Report)
