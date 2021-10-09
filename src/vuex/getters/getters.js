export default {
  SEARCH_QUERY(state) {
    return state.searchQuery;
  },
  BOOKS(state) {
    return state.books;
  },
  CART(state) {
    return state.cart;
  },
  isLoadMoreVisible(state) {
    return state.isLoadMoreVisible;
  },
};
