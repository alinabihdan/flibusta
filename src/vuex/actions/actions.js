import axios from "axios";

export default {
  GET_BOOKS_FROM_API({ commit, state }, searchQuery) {
    return axios(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&filter=paid-ebooks&startIndex=0&maxResults=40`
    )
      .then((books) => {
        state.totalItems = books.data.totalItems;
        if (books.data.totalItems == 0) {
          state.isLoadMoreVisible = false;
          state.startIndex = 0;
          this._vm.$toast.warning("Ooops, try another search query", {
            timeout: 3000,
          });
          return;
        }
        if (books.data.totalItems <= 40) {
          state.isLoadMoreVisible = false;
          commit("SET_BOOKS_TO_STATE", books.data.items);
          return;
        }
        state.searchQuery = searchQuery;
        state.isLoadMoreVisible = true;
        commit("SET_BOOKS_TO_STATE", books.data.items);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  LOAD_MORE_BOOKS({ commit, state }) {
    state.startIndex += 40;

    return axios(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${state.searchQuery}&filter=paid-ebooks&startIndex=${state.startIndex}&maxResults=40`
    )
      .then((books) => {
        if (state.startIndex + 40 > state.totalItems) {
          state.isLoadMoreVisible = false;
        }
        commit("LOAD_MORE_BOOKS_TO_STATE", books.data.items);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  ADD_TO_CART({ commit }, book) {
    commit("SET_CART", book);
  },
  DELETE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT", index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit("DECREMENT", index);
  },
  CLEAR_CART_AFTER_SUBMIT({ commit }) {
    commit("CLEAR_CART");
  },
};
