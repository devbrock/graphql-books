import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="min-h-screen bg-gray-200">
				<div className="font-display container mx-auto">
					<h1 className="font-bold text-6xl text-blue-900 text-center">
						Reading List
					</h1>
					<BookList />
					<AddBook />
				</div>
			</div>
		</ApolloProvider>
	);
}

export default App;
