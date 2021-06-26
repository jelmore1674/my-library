import './App.css';
import { React, useState } from 'react';
import Nav from './components/navbar/navbar';
import BookCollection from './components/book-collection/BookCollection';
import Form from './components/form/form';

function App() {
	const [showModal, setShowModal] = useState('');
	const [show, setShow] = useState('');

	function openForm() {
		console.log('clicked');
		setShowModal('block');
		setShow('show');
	}

	function handleSubmit(event) {
		event.preventDefault();
		setShow('');
		setShowModal('');
	}

	function removeModal() {
		setShowModal('');
		setShow('');
	}
	return (
		<div className='App'>
			<Nav />
			<Form
				show={show}
				showModal={showModal}
				handleSubmit={handleSubmit}
				removeModal={removeModal}
			/>
			<BookCollection openModal={openForm} />
		</div>
	);
}

export default App;
