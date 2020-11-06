import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editNoteAction,
  removeNoteAction,
} from "../redux/actions/NotesActions";
import { findFocusedNoteSelector } from "../redux/selectors/notesSelectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteDisplay = (props) => {
  const note = useSelector(findFocusedNoteSelector);
  const dispatch = useDispatch();
  // useEffect(() => () => dispatch(editNoteAction(note.id, { focused: false })));
  const removeNote = () => {
    dispatch(removeNoteAction(note.id));
  };
  const editNote = () => {
    props.setNoteToEdit(note); //remenber this note still have property {focused: true}
    dispatch(editNoteAction(note.id, { focused: false }));
  };
  return (
    <div className="note-display">
      <div className="note-display__note">
        <h3>{note.title}</h3>
        <p>{note.description}</p>
      </div>
      <div className="note-display__options">
        <FontAwesomeIcon icon="trash" onClick={removeNote} />
        <FontAwesomeIcon icon="edit" onClick={editNote} />
      </div>
    </div>
  );
};

export default NoteDisplay;
