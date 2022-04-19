import React, {useRef} from 'react';
import AxiosDataAccessService from "../../services/AxiosDataAccessService";
import './NewUser.css'
import axios from "axios";
const NewUser = () => {

    const newUserForm = useRef();

    const  addButtonClicked = (e) =>{
        e.preventDefault();
        const form = newUserForm.current;
        const data = {
            firstName: form['firstName'].value,
            lastName: form['lastName'].value,
            email: form['email'].value,
            username: form['username'].value,
            password: form['password'].value,
            authorities:[form['role'].value],
            addresses: [{
                street: form['b-street'].value,
                city: form['b-city'].value,
                state: form['b-state'].value,
                zipCode: form['b-zipcode'].value,
                type:"BILLING"
            },
            {
                street: form['sh-street'].value,
                city: form['sh-city'].value,
                state: form['sh-state'].value,
                zipCode: form['sh-zipcode'].value,
                type:"SHIPPING"
            }]
        }

        AxiosDataAccessService.addEntity('users',data)
            .then(response =>{console.log('Successfully added:',response)})
            .catch(err =>{console.log('Error Seyfegeb:', err)})
    }

    return (
        <div className="newUser">
            <form ref={newUserForm} onSubmit={addButtonClicked}>
                <h1>Add User</h1>
                <br/>
                <label>First Name</label>
                <input type="text" label={'firstName'} name={'firstName'} />

                <br/><br/>

                <label>Last Name</label>
                <input type="text" label={'lastName'} name={'lastName'} />

                <br/><br/>
                <label>Email</label>
                <input type="text" label={'Email'} name={'email'} />

                <br/><br/>
                <label>User Name</label>
                <input type="text" label={'username'} name={'username'} />

                <br/><br/>
                <label>Password</label>
                <input type="text" label={'password'} name={'password'} />

                <br/><br/>

                <div className="billing">
                    <label> Billing Address </label><br/>
                    Street:<input type= "text" label={"b-street"} name={'b-street'} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    City:<input type= "text" label={"b-city"} name={'b-city'} />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br/>
                    State:<input type= "text" label={"b-state"} name={'b-state'} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    Zipcode:<input type= "text" label={"b-zipcode"} name={'b-zipcode'} />  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <br/><br/>

                <div className="shipping">
                    <label> Shipping Address </label><br/>
                    Street:<input type= "text" label={"sh-street"} name={'sh-street'} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    City:<input type= "text" label={"sh-city"} name={'sh-city'} />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br/>
                    State:<input type= "text" label={"sh-state"} name={'sh-state'} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    Zipcode:<input type= "text" label={"sh-zipcode"} name={'sh-zipcode'} />  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <br/><br/>
                <label>Role</label>
                <select label={'role'} name={'role'}>
                    <option value="" >Select a Role</option>
                    <option value="SELLER">Seller</option>
                    <option value="BUYER">Buyer</option>
                </select>

                <br/><br/>
                <button className="btn">Add User</button>

                <br/><br/><br/><br/>
            </form>
        </div>
    );
};

export default NewUser;