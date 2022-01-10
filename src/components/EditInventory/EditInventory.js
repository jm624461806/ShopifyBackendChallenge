import { useState, useEffect } from 'react';
import { useParams, useHistory} from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../constant';
import {Link} from "react-router-dom";

export default function EditInventory() {

    const history = useHistory();
    const params = useParams();
    const inventoryId = params.id;

    const [InventoryInfo, setInventory] = useState({
        InventoryItemName: '',
        InventoryItemNumber: '',
    })

    useEffect(() => {
        if (inventoryId) {
            axios.get(API_URL + '/inventory/getInventory/' + inventoryId)
            .then(response => {
                const {name, number} = response.data;
                setInventory({InventoryItemName: name, InventoryItemNumber: number});
            })
            .catch(error => console.log(error));
        }
    }, []);

    const onNameChange = (event) => {
        setInventory({...InventoryInfo, InventoryItemName: event.target.value});
    }

    const onNumberChange = (event) => {
        const pattern = /^[0-9\b]+$/;
        if(event.target.value === "" || pattern.test(event.target.value)) {
            setInventory({...InventoryInfo, InventoryItemNumber: event.target.value});
        }
    }

    const editInventory = () => {
        axios.put(API_URL + '/inventory/editInventory', {...InventoryInfo, id: inventoryId})
        .then((response) => history.push("/"))
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <div>
                <h1 className='title'>
                    Backend Developer Intern Challenge - Summer 2022
                </h1>
            </div>

            <div>
                <input type="text" placeholder='Inventory Item Name' value={InventoryInfo.InventoryItemName} onChange={onNameChange}></input>
            </div>

            <div>
                <input type="text" placeholder='Inventory Item Number' value={InventoryInfo.InventoryItemNumber} onChange={onNumberChange}></input>
            </div>
            
            <div>
                <button onClick={editInventory}>Edit Inventory</button>
            </div>

            <div>
                <Link to="/"><button>Back To MainPage</button></Link>
            </div>
            
        </div>
    )
}