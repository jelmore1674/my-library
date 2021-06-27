import { React, useState } from 'react';
import Input from '../input/input';
import { MDBAnimation } from 'mdbreact';

export default function Register({ onRouteChange }) {
	const [input, setInput] = useState({
		email: '',
		password: '',
		name: '',
	});

	const emptyInput = {
		email: '',
		password: '',
		name: '',
	};

	const home = 'home';

	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.id]: event.target.value,
		});
	};

	function handleSubmit(event) {
		onRouteChange('home');
	}

	return (
		<MDBAnimation type='slideInLeft' duration='2s'>
			<div className='mt-5 d-flex justify-content-center '>
				<div className='container-fluid col-8 offset-2 bg-primary-trans  overflow-hidden  shadow-lg p-3 mb-5 rounded'>
					<div className='w-100'>
						<div className='border-bottom h2 p-2 text-white'>
							Register
						</div>
						<div>
							<Input
								type='text'
								id='name'
								name='name'
								label='Name'
								placeholder='Name'
								labelFor='name'
								setValue={input.name}
								handleChange={handleChange}
							/>
							<Input
								type='email'
								id='email'
								name='email'
								label='Email'
								placeholder='Email'
								labelFor='email'
								setValue={input.email}
								handleChange={handleChange}
							/>
							<Input
								type='password'
								id='password'
								name='password'
								label='Password'
								placeholder='Password'
								labelFor='password'
								setValue={input.password}
								handleChange={handleChange}
							/>

							<div className='d-flex justify-content-sm-between flex-column'>
								<button
									onClick={handleSubmit}
									className='btn btn btn-secondary btn-lg col-xs-12  '>
									Register
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MDBAnimation>
	);
}
