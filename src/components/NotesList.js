import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editNoteAction } from "../redux/actions/NotesActions";

const Noteslist = ({ focusedNote = {} }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const handleOnClick = (id) => {
    dispatch(editNoteAction(focusedNote.id, { focused: false }));
    dispatch(editNoteAction(id, { focused: true }));
  };
  return (
    <div className="notes-list">
      {notes.map(({ id, title }) => (
        <div
          key={id}
          className={`note ${focusedNote.id === id ? "note--focus" : ""}`}
          tabIndex={0}
          onClick={() => handleOnClick(id)}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Noteslist;
