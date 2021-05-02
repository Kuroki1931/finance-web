import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { withCookies } from "react-cookie";
import { Link } from 'react-router-dom';


import {
    selectCompany_list,
    fetchAsyncCompnay_listGet,
    selectPDF_list,
    fetchAsyncPDF_listGet,
} from "./reportSlice";
import Search_bar from './Search_bar';

const Report = (props) => {
    const dispatch = useDispatch();
    const token = props.cookies.get("current-token");
    const company_list = useSelector(selectCompany_list);
    const pdf_list = useSelector(selectPDF_list);

    useEffect(() => {
        dispatch(fetchAsyncPDF_listGet(token))
        dispatch(fetchAsyncCompnay_listGet())
    }, [dispatch]);
    
    const take_url_name = (number) => {
        let dir = window.location.href.split("/");
        let dir2 = dir[dir.length - number];
        return dir2;
    }

    const target_company = pdf_list.filter((output) => {
        return output.company == take_url_name(2)
    })

    return (
        <div>
        
            <div>
                <Search_bar company_list={company_list}/>
            </div>
            <div>
                {company_list.map((company) => (
                    <Link key={company.id} to={`/report/${company.id}/`} style={{ textDecoration: 'none', color: '#424242' }}>
                        {company.company_name} {company.company_number} 
                    </Link>
                ))}
            </div>
                {target_company.map((each_pdf) => (
                    <div>
                        <a href={each_pdf.pdf}>{each_pdf.regist_date.slice(0, 10)}{each_pdf.pdf_title}</a>
                    </div>
                ))}
            <div>
                
            </div>
        </div>
    )
}

export default withCookies(Report)
