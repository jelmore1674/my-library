import React from 'react';
import { MDBAnimation } from 'mdbreact';

export default function BookCard({
	openModal,
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
			type='zoomInOut'
			duration='2s'>
			<div
				className='card overflow-hidden'
				style={{
					width: '33vh',
					border: '1px solid black',
					borderRadius: '20%',
				}}>
				<div className='container p-3 bg-primary'>
					<h2 className='card-title'>{title}</h2>
					<div className='card-body row'>
						<p className='card-text text-dark'>{`Author: ${author}`}</p>
						<p className='card-text text-dark'>{`${pages} pages`}</p>
						<p className='card-text text-dark'>
							{finished === true ? 'Finished' : 'Not Read'}
						</p>
					</div>
					<div className='d-grid gap-2'>
						<button
							onClick={(prevState) => updateBook(id)}
							className='btn btn-success btn-sm m-1'
							data--i-d='0'>
							Finished Book
						</button>
						<button
							data--i-d='0'
							onClick={(prevState) => removeBook(id)}
							class='btn btn-danger btn-sm m-1'>
							Delete from Library
						</button>
					</div>
				</div>
			</div>
		</MDBAnimation>
	);
}
