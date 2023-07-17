import { useEffect, useState } from "react";
import getUrlFromConfig from "./utils";
import axios from "axios";
import BookCard from "./components/Book";
import { Container, Grid, Typography } from "@mui/material";
import CreateBook from "./components/CreateBook";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const { data } = await axios.get(getUrlFromConfig("api"));
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Books</Typography>
        </Grid>
        <Grid item xs={12}>
          <CreateBook onCreate={getBooks} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {books.map((book) => (
              <Grid item xs={12} sm={6} key={book.id}>
                <BookCard book={book} onDelete={getBooks} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
