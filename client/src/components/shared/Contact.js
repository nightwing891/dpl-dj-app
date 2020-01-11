import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const Contact = () => (
	<Form action="https://formspree.io/xlejejeq" method="POST">
		<Form.Input type='text' name='name' label='Your Name' placeholder='Name' />
		<Form.Input type='email' name='email' label='Your Email' placeholder='Email' required />
		<Form.TextArea name='message' label='Message' placeholder='Type your message here...' required />
		<Button type='submit'>Submit</Button>
	</Form>
)
	
export default Contact;
