import { useState } from 'react';
//import './Mainpage.css';
import {Link} from "react-router-dom";

export default function CreateInventory() {
    const [InventoryItemName, setName] = useState("");
    const [InventoryItemNumber, setNumber] = useState("");


    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onNumberChange = (event) => {
        const pattern = /^[0-9\b]+$/;
        if(event.target.value === "" || pattern.test(event.target.value)) {
            setNumber(event.target.value);
        }
    }

    return (
        <div>
            <div>
                <h1 className='title'>
                    Backend Developer Intern Challenge - Summer 2022
                </h1>
            </div>

            <div>
                <input type="text" placeholder='Inventory Item Name' value={InventoryItemName} onChange={onNameChange}></input>
            </div>

            <div>
                <input type="text" placeholder='Inventory Item Number' value={InventoryItemNumber} onChange={onNumberChange}></input>
            </div>
            
            <div>
                <button>Create Inventory</button>
            </div>
        </div>
    )
}