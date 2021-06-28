import { React, useState } from 'react';
import Input from '../input/input';

export default function Form({
	show,
	showModal,
	removeModal,
	handleSubmit,
	setLibrary,
}) {
	const [input, setInput] = useState({
		title: '',
		author: '',
		pages: '',
		finished: false,
	});

	const emptyInput = {
		title: '',
		author: '',
		pages: '',
		finished: false,
	};

	const handleChange = (event) => {
		setInput({
			...input,
			[event.target.id]: event.target.value,
		});
	};

	function addBook(event) {
		event.preventDefault();
		fetch('http://localhost:4500/library-item', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: input.title,
				author: input.author,
				pages: input.pages,
				finished: input.finished,
			}),
		})
			.then((data) => data.json())
			.then((books) => {
				setLibrary(() => books);
			});
		handleSubmit(event);
		setInput(emptyInput);
	}

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
							onClick={() => {
								removeModal();
								setInput(emptyInput);
							}}></button>
					</div>
					<div className='modal-body text-center'>
						<form>
							<Input
								type='text'
								id='title'
								name='title'
								label='Title'
								placeholder='Title'
								labelFor='title'
								setValue={input.title}
								handleChange={handleChange}
							/>
							<Input
								type='text'
								id='author'
								name='author'
								label='Author'
								placeholder='Author'
								labelFor='author'
								setValue={input.author}
								handleChange={handleChange}
							/>
							<Input
								type='number'
								id='pages'
								name='pages'
								label='Pages'
								placeholder='Pages'
								labelFor='pages'
								setValue={input.pages}
								handleChange={handleChange}
							/>
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
								onClick={(e) => addBook(e)}
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
