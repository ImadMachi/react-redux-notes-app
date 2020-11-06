import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addNoteAction, editNoteAction } from "../redux/actions/NotesActions";

const NoteForm = ({ noteToEdit, setNoteToEdit }) => {
  const [title, setTitle] = useState(noteToEdit.title || "");
  const [description, setDescription] = useState(noteToEdit.description || "");
  const [error, setError] = useState("");

  const onChange = (e) => {
    const elem = e.target;
    if (elem.name === "title") {
      setTitle(elem.value);
      setError("");
    }
    if (elem.name === "description") setDescription(elem.value);
  };
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (title && noteToEdit.title) {
      dispatch(
        editNoteAction(noteToEdit.id, {
          ...noteToEdit,
          title,
          description,
        })
      );
      setNoteToEdit({});
    } else if (title) {
      const note = { id: uuidV4(), title, description, focused: true };
      dispatch(addNoteAction(note));
    } else {
      setError("you should add title");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="note-form">
        <h3 className="note-form__header">New Note</h3>
        {error && <p className="error-message">{error}</p>}
        <input
          className="note-form__input"
          type="text"
          value={title}
          onChange={onChange}
          placeholder="title"
          name="title"
        />
        <textarea
          className="note-form__textarea"
          value={description}
          onChange={onChange}
          placeholder="description"
          name="description"
        ></textarea>
        <button className="note-form__button" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
