import { React, useEffect } from 'react';
import BookCard from '../book-card/BookCard';
import { getLibrary } from './list';

export default function BookCollection({ library, setLibrary, user, show }) {
	const url = `http://localhost:4500/library-item/${user.userid}`;

	function removeBook(id) {
		var myLibrary = library;
		for (var i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].id === id) {
				fetch(`http://localhost:4500/library-item`, {
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: id,
						remove: true,
					}),
				})
					.then((data) => data.json())
					.then((books) => console.log(books));
				myLibrary.splice(i, 1);
				setLibrary(() => [...myLibrary]);
			}
		}
		return library.map(createBookCard);
	}

	useEffect(() => {
		let mounted = true;
		console.log(user);
		getLibrary(url).then((items) => {
			if (mounted) {
				setLibrary(items);
			}
		});
		return () => (mounted = false);
	}, [show]);

	function updateBook(id) {
		var myLibrary = library;
		for (var i = 0; i < myLibrary.length; i++) {
			if (myLibrary[i].id === id) {
				fetch('http://localhost:4500/library-item', {
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: id,
						update: true,
					}),
				})
					.then((data) => data.json())
					.then((book) => console.log(book));
				console.log(myLibrary[i].completed);
				if (myLibrary[i].completed === true) {
					myLibrary[i].completed = false;
				} else if (!myLibrary[i].completed) {
					myLibrary[i].completed = true;
				}
				setLibrary(() => [...myLibrary]);
			} else if (myLibrary[i].id === id) {
				fetch('http://localhost:4500/library-item', {
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: id,
						remove: true,
					}),
				})
					.then((data) => data.json())
					.then((book) => console.log(book));
				setLibrary(() => [...myLibrary]);
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
				finished={book.completed}
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
