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
            email: form['email'].value,
            username: form['username'].value,
            password: form['password'].value,
            address: {
                street: "",
                apartmentNo: "",
                city: "",
                state: "",
                zipcode: ""
            }[form['address'].value],
            authorities:[form['role'].value]
        }

        AxiosDataAccessService.addEntity('users',data)
            .then(response =>{console.log('Successfully added:',response)})
            .catch(err =>{console.log('Error :', err)})
    }

    return (
        <div className="newUser">
            <form ref={newUserForm}>
                <h1>Add User</h1>
                <br/>
                <label>First Name</label>
                <input type="text" label={'firstName'} name={'firstName'} />
                <label>Last Name</label>
                <input type="text" label={'lastName'} name={'lastName'} />
                <label>Email</label>
                <input type="text" label={'Email'} name={'Email'} />
                <label>User Name</label>
                <input type="text" label={'username'} name={'username'} />
                <label>Password</label>
                <input type="text" label={'Password'} name={'Password'} />
                <label> Address </label>
                <input type= "text" label={"address"} name={'Shipping Address'} />
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