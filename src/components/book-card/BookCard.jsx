import React from 'react';

export default function BookCard() {
	return (
		<div
			className='card m-3 pb-1'
			style={{
				width: '18rem',
				border: '1px solid black',
				borderRadius: '20%',
			}}>
			<div className='container'>
				<h2 className='card-title'>Justin</h2>
				<div className='card-body row'>
					<p className='card-text'>Author: Justin</p>
					<p className='card-text'>33 pages</p>
					<p className='card-text'>Finished</p>
				</div>
				<div className='d-grid gap-2'>
					<button class='btn btn-success btn-sm m-1' data--i-d='0'>
						Finished Book
					</button>
					<button data--i-d='0' class='btn btn-danger btn-sm m-1'>
						Delete from Library
					</button>
				</div>
			</div>
		</div>
	);
}
