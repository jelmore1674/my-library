import { React, useState } from 'react';

export default function Form({ show, showModal, removeModal, handleSubmit }) {
	return (
		<div>
			<div
				className={`modal fade ${show}`}
				id='exampleModal'
				tabIndex='1'
				role='dialog'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
				style={{ display: showModal }}>
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
										type='text'
										className='form-control'
										id='title'
										placeholder='Enter Book Title'
									/>
									<label for='floatingInput'>Title</label>
								</div>
								<div className='form-floating mb-3'>
									<input
										type='text'
										className='form-control'
										id='author'
										placeholder='Author'
									/>
									<label for='floatingPassword'>Author</label>
								</div>
								<div className='form-floating mb-3'>
									<input
										type='number'
										className='form-control'
										id='pages'
										placeholder='Pages'
									/>
									<label for='floatingPassword '>Pages</label>
								</div>
								<div className='form-check form-switch justify-content-center'>
									<input
										className='form-check-input text-center'
										type='checkbox'
										id='flexSwitchCheckDefault'
									/>
									<label
										className='form-check-label text-center'
										for='flexSwitchCheckDefault'>
										Default switch checkbox input
									</label>
								</div>
								<button
									onClick={(e) => handleSubmit(e)}
									className='btn btn-primary'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
