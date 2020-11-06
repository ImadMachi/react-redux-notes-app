export const findFocusedNoteSelector = (state) =>
  state.notes.find(({ focused }) => focused);

export const isListEmptySelecor = (state) => !state.notes.length;
