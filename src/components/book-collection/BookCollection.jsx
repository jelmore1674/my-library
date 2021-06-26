import React from 'react';
import BookCard from '../book-card/BookCard';

export default function BookCollection() {
	return (
		<div className='container mt-5'>
			<div className='row row-cols-xs-1 row-cols-md-2 g-4'>
				<BookCard className='col' />
				<BookCard className='col' />
				<BookCard className='col' />
				<BookCard className='col' />
				<BookCard className='col' />
				<BookCard className='col' />
			</div>
		</div>
	);
}
