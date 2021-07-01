import React from 'react';
import AddBookButton from '../add-book-button/add-book';

export default function Nav({ openModal, isSignedIn, onRouteChange, setUser }) {
	function handleDemo() {
		fetch('https://damp-depths-04548.herokuapp.com/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: 'demo@demo.com',
				password: 'demo',
			}),
		})
			.then((data) => data.json())
			.then((user) => {
				if (user[0].userid) {
					setUser(user[0]);
					onRouteChange('home');
				}
			})
			.catch((err) => {
				console.log('look over code screwy somewhere');
			});
	}

	return (
		<nav className='navbar navbar-expand-sm sticky-top navbar-light bg-light'>
			<div className='container-fluid justify-content-between'>
				<div className='ms-2 navbar-brand'>
					<span className='h1 mb-0 textColorGradient'>
						<i className='fas fa-book-reader'></i>
					</span>
					<span className='mb-0 h1'>My Library</span>
				</div>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarTogglerDemo03'
					aria-controls='navbarTogglerDemo03'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				{isSignedIn === true ? (
					<div
						className='collapse navbar-collapse justify-content-sm-end d-grid'
						id='navbarTogglerDemo03'>
						<AddBookButton
							className='.d-none .d-sm-block .d-md-none'
							openModal={openModal}
						/>
						<button
							onClick={() => onRouteChange('signout')}
							className='btn btn-danger '>
							Sign Out
						</button>
					</div>
				) : (
					<div>
						<button onClick={handleDemo} className='btn btn-info '>
							Demo
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}
