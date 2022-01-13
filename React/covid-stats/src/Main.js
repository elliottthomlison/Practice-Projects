import React, {useState, useEffect} from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'react-bootstrap';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'jquery/dist/jquery.min.js';
import $ from 'jquery'

export default function Main() {

    const [covidData, setCovidData] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then(response => {
            console.log(response.data)
            setCovidData(response.data.Countries)
        }).catch(error=>{console.log(error)})
        
        $(document).ready(()=>{
            $('#myTable').DataTable()
        })

    }, [covidData]) 

    const tableData = covidData.map(item =>  {

        return <tr>
            <td>{item.Country}</td>
            <td>{item.TotalConfirmed}</td>
            <td>{Math.floor(Math.random(10000) * 1000)}</td>
            <td>{Math.floor(Math.random(100000) * 10000)}</td>
            <td>{item.TotalDeaths}</td>
        </tr>
    })

    return (
        <div>
            <h1>COVID Tracker</h1>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table id="myTable" className="table table-dark">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Confirmed</th>
                                <th>Active</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}