import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

export default function AddBook() {
	const { loading, error, data } = useQuery(getAuthorsQuery);

	const [name, setName] = useState('initial');
	const [genre, setGenre] = useState('initial');
	const [authorID, setAuthorID] = useState('initial');

	const [addBook] = useMutation(addBookMutation);
	let authors = [];

	if (error) return <p>Error :(</p>;
	if (data) {
		authors = data.authors;
	}

	return (
		<div>
			<form
				className="bg-blue-900 p-4 flex flex-1 flex-wrap"
				onSubmit={e => {
					e.preventDefault();
					addBook({
						variables: {
							name: name,
							genre: genre,
							authorID: authorID,
						},
					});
				}}
			>
				<label className="font-semibold text-gray-100">Book Name</label>
				<input
					type="text"
					className="py-1 px-2 rounded border mx-2"
					onChange={e => setName(e.target.value)}
				/>

				<label className="font-semibold text-gray-100">Genre</label>
				<input
					type="text"
					className="py-1 px-2 rounded border mx-2"
					onChange={e => setGenre(e.target.value)}
				/>

				<label className="font-semibold text-gray-100">Author</label>
				<select
					className="py-1 px-2 rounded border mx-2"
					onChange={e => setAuthorID(e.target.value)}
				>
					{loading ? <option>Loading authors...</option> : ''}
					<option defaultValue>Select Author</option>
					{authors.map(author => (
						<option key={author.id} value={author.id}>
							{author.name}
						</option>
					))}
				</select>
				<button
					type="submit"
					className="bg-gray-200 text-gray-900 font-semibold py-1 px-2 rounded"
				>
					Add Book
				</button>
			</form>
		</div>
	);
}
