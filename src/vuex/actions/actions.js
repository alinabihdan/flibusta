import axios from "axios";

export default {
  GET_SEARCH_QUERY_TO_VUEX({ commit }, value) {
    commit("SET_SEARCH_QUERY_TO_VUEX", value);
  },
  GET_BOOKS_FROM_API({ commit }, searchQuery) {
    return axios(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchQuery}&filter=paid-ebooks&maxResults=40`
    )
      .then((books) => {
        commit("SET_BOOKS_TO_STATE", books.data.items);
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
