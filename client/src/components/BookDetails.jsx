import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

export default function BookDetails({ id }) {
  const { data } = useQuery(getBookQuery, {
    variables: { id: id }
  });

  function displayDetails() {
    const { book } = data;
    if (book) {
      const { book } = data;
      return (
        <div className="bg-white px-8 py-6 rounded shadow">
          <p className="text-xl">{book.name}</p>
          <p className="text-lg">Genre: {book.genre}</p>
          <p className="text-lg">Author: {book.author.name}</p>
          <p className="text-lg">All books by this author:</p>
          <ul>
            {book.author.books.map(book => (
              <li key={book.id} className="pl-4 text-lg">
                {book.name}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <p>No book selected</p>;
    }
  }
  return <div className="font-semibold">{data ? displayDetails() : ""}</div>;
}
