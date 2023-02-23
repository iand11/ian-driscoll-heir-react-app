import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 0,
      title: "First Item",
      body: "This is the first item",
      votesCount: 10,
    },
    {
      id: 1,
      title: "Second Item",
      body: "This is the second item",
      votesCount: 20,
    },
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addListItem: (state, action) => {
      state.list.push(action.payload);
    },
    upvoteListItem: (state, action) => {
      const { id } = action.payload;
      const foundItem = state.list.find((item) => item.id === id);
      foundItem.votesCount += 1;

      state.list = state.list.map((item) => {
        if (item.id === id) {
          return foundItem;
        }
        return item;
      });
    },
    downvoteListItem: (state, action) => {
      const { id } = action.payload;
      const foundItem = state.list.find((item) => item.id === id);
      console.log(foundItem);
      foundItem.votesCount -= 1;

      state.list = state.list.map((item) => {
        if (item.id === id) {
          return foundItem;
        }
        return item;
      });
    },
  },
});

export const { addListItem, upvoteListItem, downvoteListItem } =
  listSlice.actions;

export default listSlice.reducer;
