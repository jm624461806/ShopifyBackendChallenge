import { useState } from 'react';
import './Mainpage.css';
import {Link} from "react-router-dom";
import Inventory from "../Inventory/Inventory"
import axios from 'axios';
import { API_URL } from '../../constant';
import { useSelector, useDispatch } from 'react-redux';
import {CSVLink} from "react-csv";

export default function Homepage() {

    const dispatch = useDispatch();
    const currInventories = useSelector((state) => state.currInventories);

    const [showInventories, setShow] = useState(false);

    const headers = [
        {label: 'Inventory Item Name', key: 'name'},
        {label: 'Inventory Item Number', key: 'number'}
    ]

    const csvReport = {
        filename: "currentInventory.csv",
        headers: headers,
        data: currInventories,
    }

    const getInventoriesAction = (data) => {
        return {
            type: "getAllInventories",
            data: data,
        }
    }
    
    const getInventories = () => {
        setShow(true);
        axios.get(API_URL + "/inventory/getAllInventories")
        .then(response => {dispatch(getInventoriesAction(response.data))})
        .catch(error => console.log(error));
    }

    const inventoriesDiv = [];
    for (let i = 0; i < currInventories.length; i++) {
        let newDiv = <Inventory inventoryInfo={currInventories[i]}/>
        inventoriesDiv.push(newDiv);
    }

    return (
        <div>
            <div>
                <h1 className='title'>
                    Backend Developer Intern Challenge - Summer 2022
                </h1>
            </div>

            <div>
                <span className='getInventories'>
                    <button onClick={getInventories}>GetInventories</button>
                </span>
                <span>
                    <button onClick={()=> {setShow(false)}}>HideInventories</button>
                </span>
            </div>


            <div className="createInventory">
                <Link to="/create"><button>Create Inventory Items</button></Link>
            </div>

            {showInventories ? 
                <div>
                    <table>
                        <tr>
                            <th>Inventory Item Name</th>
                            <th>Inventory Item Number</th>
                            <th></th>
                            <th></th>
                        </tr>

                        {inventoriesDiv}
                    
                    </table>

                    <div className="export">
                        <CSVLink {...csvReport}><button>export to CSV</button></CSVLink>
                    </div>
                </div>
        
            : <></>}  
        </div>
    )
}
