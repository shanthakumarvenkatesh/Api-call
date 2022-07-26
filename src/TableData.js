import React, { useState, useEffect } from 'react';
import './tabledata.css';
 
function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://dgldigital.com/api/Country';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
 
    return (
        <>
            <h1>Fetch the data to table in React JS</h1>
            <tbody>
                <tr>
                    <th>S no</th>
                    <th>Country Name</th>
                    <th>createdBy</th>
                    <th>created</th>
                    <th>Updated</th>
                    <th>Updated Date</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.createdBy}</td>
                        <td>{item.created}</td>
                        <td>{item.modifiedBy}</td>
                        <td>{item.modified}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;