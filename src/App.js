import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import NoteDisplay from "./components/NoteDisplay";
import { editNoteAction } from "./redux/actions/NotesActions";
import {
  findFocusedNoteSelector,
  isListEmptySelecor,
} from "./redux/selectors/notesSelectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const focusedNote = useSelector(findFocusedNoteSelector); //should return a note or undefined
  const [isListEmpty, setIsListEmpty] = useState(true);
  const notesListLength = useSelector(isListEmptySelecor);
  useEffect(() => {
    setIsListEmpty(!!notesListLength);
  }, [notesListLength]);
  const [noteToEdit, setNoteToEdit] = useState({});
  const dispatch = useDispatch();
  const handleOnClick = (_focusedNote = {}) => {
    setIsListEmpty(false);
    dispatch(editNoteAction(_focusedNote.id, { focused: false }));
  };
  const noteDisplay = <NoteDisplay setNoteToEdit={setNoteToEdit} />;
  const noteForm = (
    <NoteForm noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
  );
  const emptyListMessage = <p className="empty-list-message">Add some notes</p>;

  return (
    <div className="container">
      <NotesList focusedNote={focusedNote} />

      <div className="main-display">
        {!!focusedNote
          ? noteDisplay
          : isListEmpty
          ? emptyListMessage
          : noteForm}
        <FontAwesomeIcon
          icon="plus-circle"
          onClick={() => handleOnClick(focusedNote)}
        />
      </div>
    </div>
  );
};

export { App as default };
