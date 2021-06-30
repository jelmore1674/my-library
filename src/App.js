import './App.css';
import { React, useState } from 'react';
import Nav from './components/navbar/navbar';
import BookCollection from './components/book-collection/BookCollection';
import Form from './components/form/form';
import Signin from './components/signin/signin';
import Register from './components/register/register';

function App() {
	const [library, setLibrary] = useState([]);

	let defaultModal = {
		display: 'none',
	};

	let modalStyle = {
		display: 'block',
		backgroundColor: 'rgba(0, 0, 0, .8)',
	};

	const [showModal, setShowModal] = useState(defaultModal);
	const [show, setShow] = useState('');
	const [route, setRoute] = useState('signin');
	const [isSignedIn, setSignin] = useState(false);
	const [user, setUser] = useState('');

	function openForm() {
		setShowModal(modalStyle);
		setShow('show');
	}

	function handleSubmit(event, title) {
		event.preventDefault();
		setShow('');
		setShowModal(defaultModal);
	}

	function removeModal() {
		setShowModal(defaultModal);
		setShow('');
	}

	function onRouteChange(route) {
		if (route === 'signout') {
			setRoute('signin');
			setUser('');
			setSignin(false);
		} else if (route === 'home') {
			setSignin(true);
		} else {
			setRoute('signin');
		}
		setRoute(route);
	}

	return (
		<div className='App'>
			<Nav
				openModal={openForm}
				isSignedIn={isSignedIn}
				onRouteChange={onRouteChange}
				user={user}
			/>

			{route === 'home' ? (
				<div>
					<Form
						show={show}
						showModal={showModal}
						handleSubmit={handleSubmit}
						removeModal={removeModal}
						setLibrary={setLibrary}
						user={user}
					/>
					<BookCollection
						library={library}
						setLibrary={setLibrary}
						user={user}
						show={show}
					/>
				</div>
			) : route === 'signin' || route === 'signout' ? (
				<Signin onRouteChange={onRouteChange} setUser={setUser} />
			) : (
				<Register
					onRouteChange={onRouteChange}
					setUser={setUser}
					user={user}
				/>
			)}
		</div>
	);
}

export default App;
