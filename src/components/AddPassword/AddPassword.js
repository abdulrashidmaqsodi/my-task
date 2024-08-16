import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddPassword.css'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
function AddPassword() {
    const [formData, setFormData] = useState({})

    const restFormData = () => {
        setFormData({
            site : '',
            username : '',
            password : '',
            note : ''
        })
    }

    const formHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const addDataasite = () => {
        axios.post('https://66b4311c9f9169621ea2030c.mockapi.io/api/v1/savedpasswords', formData)
            .then(response => {
                if (response.status === 201) {
                        Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Data saved successfully",
                        showConfirmButton: false,
                        timer: 1500
                     });
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Data didn't saved",
                    showConfirmButton: false,
                    timer: 1500
                 });
            })
            restFormData()
    }
    return (
        <div className='formContainer'>
            <p>Create Password Form</p>
            <hr />
            <Form>
                <fieldset>
                    <Form.Group className="mb-3">
                        <Form.Label>Site:</Form.Label>
                        <Form.Control onChange={formHandler} value={formData.site} name='site' type='text' placeholder="Enter your site address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control onChange={formHandler}value={formData.username} name='username' type='text' placeholder="Enter your username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control onChange={formHandler}value={formData.password} name='password' type='password' placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Note:</Form.Label>
                        <Form.Control onChange={formHandler}value={formData.note} name='note' type='text' placeholder="Enter your note" />
                    </Form.Group>
                    <Button onClick={addDataasite} type="button" >Submit Form</Button>
                </fieldset>
            </Form>
        </div>
    )
}
export default AddPassword;