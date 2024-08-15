import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
function Login() {
    return (
        <div className='formContainer'>
            <p>Create Password Form</p>
            <hr/>
            <Form>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label>Site:</Form.Label>
                        <Form.Control type='text' placeholder="Enter Your Site Name" />
                    </Form.Group>
                    <Button type="button">Submit Form</Button>
                </fieldset>
            </Form>
        </div>
    )
}
export default Login;