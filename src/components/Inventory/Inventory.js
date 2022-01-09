import axios from "axios";
import {Link} from "react-router-dom";
import { API_URL } from '../../constant';
import { useDispatch } from 'react-redux';

export default function Inventory(props) {

    const dispatch = useDispatch();

    const {inventoryInfo} = props;

    const {_id, name, number} = inventoryInfo;

    const deleteInventoryAction = (data) => {
        return {
            type: "deleteInventory",
            data: data,
        }
    }

    const deleteInventory = () => {
        axios.delete(API_URL + '/inventory/deleteInventory/' + _id)
        .then((response) => {dispatch(deleteInventoryAction(response.data))})
        .catch((error) => console.log(error));
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{number}</td>
                <td><Link to={`/edit/${_id}`}><button>edit</button></Link></td>
                <td><button onClick={deleteInventory}>delete</button></td>
            </tr>
        </>
    )
}