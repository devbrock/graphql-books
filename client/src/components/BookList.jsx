import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';

export default function BookList() {
	const { loading, error, data } = useQuery(getBooksQuery);
	let books = [];

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	if (data) {
		books = data.books;
	}

	return (
		<div className="my-4">
			<ul id="book-list">
				{books.map(book => (
					<li key={book.id} className="text-gray-900">
						{book.name}
					</li>
				))}
			</ul>
		</div>
	);
}
