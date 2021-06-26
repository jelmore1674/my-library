import './App.css';
import { React, useState } from 'react';
import Nav from './components/navbar/navbar';
import BookCollection from './components/book-collection/BookCollection';
import Form from './components/form/form';

function App() {
	let defaultModal = {
		display: 'none',
	};

	let modalStyle = {
		display: 'block',
		backgroundColor: 'rgba(0, 0, 0, .8)',
	};

	const [showModal, setShowModal] = useState(defaultModal);
	const [show, setShow] = useState('');

	function openForm() {
		console.log('clicked');
		setShowModal(modalStyle);
		setShow('show');
	}

	function handleSubmit(event) {
		event.preventDefault();
		setShow('');
		setShowModal(defaultModal);
	}

	function removeModal() {
		setShowModal(defaultModal);
		setShow('');
	}
	return (
		<div className='App'>
			<Nav openModal={openForm} />
			<Form
				show={show}
				showModal={showModal}
				handleSubmit={handleSubmit}
				removeModal={removeModal}
			/>
			<BookCollection />
		</div>
	);
}

export default App;
