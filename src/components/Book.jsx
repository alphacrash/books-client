import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";
import getUrlFromConfig from "../utils";

const BookCard = ({ book, onDelete }) => {
  const handleDelete = async () => {
    await axios.delete(getUrlFromConfig("api")+ book.bookId);
    onDelete();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography color="text.secondary">{book.author}</Typography>
        <Typography variant="body2" component="p">
          Price: {book.price}
        </Typography>
        <Typography variant="body2" component="p">
          Publisher: {book.publisher}
        </Typography>
        <Typography variant="body2" component="p">
          Language: {book.language}
        </Typography>
        <Typography variant="body2" component="p">
          Pages: {book.pages}
        </Typography>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
