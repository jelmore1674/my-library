import React from 'react';
import { MDBAnimation } from 'mdbreact';

export default function BookCard({
	title,
	author,
	pages,
	id,
	removeBook,
	updateBook,
	finished,
}) {
	return (
		<MDBAnimation
			className='m-4'
			style={{ width: '30vh' }}
			type='zoomIn'
			duration='1.5s'>
			<div
				className='card overflow-hidden'
				style={{
					width: '33vh',
					border: '1px solid black',
					borderRadius: '20%',
				}}>
				<div className='container p-3 bg-primary-trans'>
					<h2
						className='card-title h-100'
						style={{
							fontWeight: 'bold',
							minHeight: '72px',
						}}>
						{title}
					</h2>
					<div className='card-body row'>
						<p className='card-text text-white'>{`Author: ${author}`}</p>
						<p className='card-text text-white'>{`${pages} pages`}</p>
						<p className='card-text text-white'>
							{finished === true ? 'Finished' : 'Not Read'}
						</p>
					</div>
					<div className='d-grid gap-2'>
						<button
							onClick={() => updateBook(id)}
							className='btn btn-success  rounde btn-sm m-1'>
							Finished Book
						</button>
						<button
							onClick={() => removeBook(id)}
							className='btn btn-danger rounded btn-sm m-1'>
							Delete from Library
						</button>
					</div>
				</div>
			</div>
		</MDBAnimation>
	);
}
