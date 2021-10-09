export default {
  SET_BOOKS_TO_STATE: (state, books) => {
    state.books = books.filter(
      (book) => book.saleInfo.saleability === "FOR_SALE"
    );
  },
  LOAD_MORE_BOOKS_TO_STATE: (state, books) => {
    const results = books.filter(
      (book) => book.saleInfo.saleability === "FOR_SALE"
    );
    state.books.push(...results);
  },
  SET_CART: (state, book) => {
    if (state.cart.length) {
      let isProductExist = false;
      state.cart.map(function(item) {
        if (item.id === book.id) {
          isProductExist = true;
          item.quantity++;
        }
      });
      if (!isProductExist) {
        state.cart.push(book);
      }
    } else {
      state.cart.push(book);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  CLEAR_CART: (state) => {
    state.cart = [];
  },
};
