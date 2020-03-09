import { gql } from 'apollo-boost';

const getBooksQuery = gql`
	{
		books {
			name
			id
			genre
			author {
				name
				age
			}
		}
	}
`;

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

const addBookMutation = gql`
	mutation {
		addBook(name: "", genre: "", authorID: "") {
			id
			name
		}
	}
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
