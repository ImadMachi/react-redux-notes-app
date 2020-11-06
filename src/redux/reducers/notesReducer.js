const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "notes/addnote":
      return [...state, action.payload];
    case "notes/removenote":
      return state.filter(({ id }) => id !== action.id);
    case "notes/editnote":
      return state.map((note) => {
        if (note.id !== action.id) return note;
        return { ...note, ...action.updates };
      });
    default:
      return state;
  }
};
export default notesReducer;
