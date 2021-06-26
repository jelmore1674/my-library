import React from 'react';

export default function Nav() {
	return (
		<nav class='navbar sticky-top navbar-light bg-light '>
			<div class='container-fluid justify-content-center'>
				<span className='h1 mb-0 textColorGradient'>
					<i class='fas fa-book-reader'></i>
				</span>
				<span class='mb-0 h1'>My Library</span>
			</div>
		</nav>
	);
}
