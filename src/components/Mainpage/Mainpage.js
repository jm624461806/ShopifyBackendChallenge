import { useState } from 'react';
import './Mainpage.css';
import {Link} from "react-router-dom";

export default function Homepage() {
    const [showInventories, setShow] = useState(false);

    const [Inventories, setInventories] = useState([]);
    
    const getInventories = () => {
        setShow(true);
        return;
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

            {Inventories ? 
                <div>

                </div>
            : <></>}  
        </div>
    )
}
