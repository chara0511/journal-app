/*
{
    notes: [],
    active: {
      uid: "GQBiB36N4ueuZgyxjj",
      title: "",
      body: "",
      imageUrl: "",
      date: new Date(),
    }
}
*/

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
