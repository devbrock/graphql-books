import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

export default function BookList() {
  const [selected, setSelected] = useState();
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
          <li
            key={book.id}
            className="text-gray-900 text-lg"
            onClick={e => {
              setSelected(book.id);
            }}
          >
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails id={selected} />
    </div>
  );
}
