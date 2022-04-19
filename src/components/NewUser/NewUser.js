import React, {useRef} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import './NewUser.css'
const NewUser = () => {

    const newUserForm = useRef();

    const  addButtonClicked = () =>{
        const form = newUserForm.current;
        const data = {
            firstName: form['firstName'].value,
            lastName: form['lastName'].value,
            authorities:[form['role'].value]

        }
        AxiosDataAccessService.addEntity('http://localhost:8080/api/v1/users',data)
            .then(response =>{console.log('Successfully added:',response)})
            .catch(err =>{console.log('Error :', err)})
    }

    return (
        <div className="newUser">
            <form ref={newUserForm}>
                <h1>Add User</h1>

                <label>First Name</label>
                <input type="text" label={'firstName'} name={'firstName'} />

                <label>Last Name</label>
                <input type="text" label={'lastName'} name={'lastName'} />
                <label>Role</label>
                <select label={'role'} name={'role'}>
                    <option value="" >Select a Role</option>
                    <option value="SELLER">Seller</option>
                    <option value="BUYER">Buyer</option>
                </select>
            </form>
            <button className="btn" onClick={addButtonClicked}>Add User</button>

        </div>
    );
};

export default NewUser;