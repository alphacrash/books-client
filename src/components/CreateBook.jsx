import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import axios from "axios";
import getUrlFromConfig from "../utils";

const CreateBook = ({ onCreate }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [language, setLanguage] = useState("");
  const [pages, setPages] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(getUrlFromConfig("api"), {
        name,
        author,
        price,
        publisher,
        language,
        pages,
      });
      if (response.status === 201) {
        const book = response.data;
        onCreate(book);
        handleClose();
      } else {
        console.error(
          `Failed to create book: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error(`Failed to create book: ${error}`);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Book</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            label="Author"
            fullWidth
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <TextField
            label="Publisher"
            fullWidth
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
          />
          <TextField
            label="Language"
            fullWidth
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          />
          <TextField
            label="Pages"
            fullWidth
            value={pages}
            onChange={(event) => setPages(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleCreate}
            disabled={
              !name || !author || !price || !publisher || !language || !pages
            }
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateBook;
