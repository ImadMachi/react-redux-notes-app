export const addNoteAction = (note) => ({
  type: "notes/addnote",
  payload: note,
});

export const removeNoteAction = (id) => ({
  type: "notes/removenote",
  id,
});

export const editNoteAction = (id, updates) => ({
  type: "notes/editnote",
  id,
  updates,
});
