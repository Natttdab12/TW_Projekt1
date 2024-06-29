import "./styles.css";
import React, { useState, useEffect } from "react";
import AuthorForm from "./components/AuthorForm";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const response = await axios.get("http://localhost:8000/authors");
    setAuthors(response.data);
  };

  const addAuthor = async (author) => {
    await axios.post("http://localhost:8000/authors", author);
    fetchAuthors();
  };

  const deleteAuthor = async (id) => {
    await axios.delete(`http://localhost:8000/authors/${id}`);
    fetchAuthors();
  };

  return (
    <div className="App">
      <h1>Authors</h1>
      <h5>Add new author</h5>
      <AuthorForm addAuthor={addAuthor} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.surname}</td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteAuthor(author.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
