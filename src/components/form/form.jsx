import { React, useState } from 'react';

export default function Form({ show, showModal, removeModal, handleSubmit }) {
	const [input, setInput] = useState({
		title: '',
		author: '',
		pages: '',
		finished: false,
	});

	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.id]: event.target.value,
		});
	};
	console.log(input);

	return (
		<div
			className={`modal ${show} fade `}
			id='exampleModal'
			tabIndex='1'
			role='dialog'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
			style={showModal}>
			<div className='modal-dialog' role='document'>
				<div className='modal-content text-center'>
					<div className='modal-header text-center'>
						<h5
							className='modal-title text-uppercase text-center'
							id='exampleModalLabel'>
							Add Book To Library
						</h5>
						<button
							type='button'
							className='btn-close'
							data-dismiss='modal'
							aria-label='Close'
							onClick={removeModal}></button>
					</div>
					<div className='modal-body text-center'>
						<form>
							<div className='form-floating mb-3'>
								<input
									onChange={handleChange}
									type='text'
									className='form-control'
									id='title'
									name='title'
									placeholder='Enter Book Title'
								/>
								<label htmlFor='floatingInput'>Title</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									onChange={handleChange}
									type='text'
									className='form-control'
									id='author'
									placeholder='Author'
								/>
								<label htmlFor='floatingPassword'>Author</label>
							</div>
							<div className='form-floating mb-3'>
								<input
									onChange={handleChange}
									type='number'
									className='form-control'
									id='pages'
									placeholder='Pages'
								/>
								<label htmlFor='floatingPassword '>Pages</label>
							</div>
							<div className='form-group'>
								<label htmlFor='finished'>
									Have you finished the book?
								</label>
								<select
									onChange={handleChange}
									className='form-select form-select-lg mb-3'
									id='finished'
									aria-label='.form-select-lg form'>
									<option value={true} selected>
										Yes
									</option>
									<option value={false}>No</option>
								</select>
							</div>

							<button
								onClick={(e) => handleSubmit(e)}
								className='btn rounded-pill btn-primary'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
