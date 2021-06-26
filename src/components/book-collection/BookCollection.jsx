import { React, useState } from 'react';
import BookCard from '../book-card/BookCard';

export default function BookCollection({ openModal }) {
	const myLibrary = [
		{
			id: 1,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: true,
		},
		{
			id: 2,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: false,
		},
		{
			id: 3,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 233,
			finished: true,
		},
		{
			id: 4,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: true,
		},
		{
			id: 5,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 353,
			finished: true,
		},
		{
			id: 6,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: true,
		},
		{
			id: 7,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: true,
		},
		{
			id: 8,
			title: 'Smokey and the Bandit',
			author: 'Burt Reynolds',
			pages: 33,
			finished: true,
		},
	];

	const [library, setLibrary] = useState([...myLibrary]);

	function removeBook(id) {
		var myLibrary = library;
		for (var i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].id === id) {
				console.log(myLibrary[i]);
				myLibrary.splice(i, 1);
				console.log('removed book');
				setLibrary((library) => [...myLibrary]);
				break;
			}
		}
		return library.map(createBookCard);
	}

	function updateBook(id) {
		var myLibrary = library;
		for (var i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].id === id) {
				console.log(myLibrary[i]);
				if (myLibrary[i].finished === true) {
					myLibrary[i].finished = false;
				} else if (!myLibrary[i].finished) {
					myLibrary[i].finished = true;
				}
				setLibrary((library) => [...myLibrary]);
			}
		}
	}

	function createBookCard(book) {
		return (
			<BookCard
				key={book.id}
				id={book.id}
				title={book.title}
				author={book.author}
				pages={book.pages}
				finished={book.finished}
				className='col'
				openModal={openModal}
				removeBook={removeBook}
				updateBook={updateBook}
			/>
		);
	}

	return (
		<div className='container mt-5'>
			<div className='row rol-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 justify-content-center align-items-center'>
				{library.map(createBookCard)}
			</div>
		</div>
	);
}
