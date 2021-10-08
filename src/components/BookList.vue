<template>
  <div class="book-list">
    <BookItem v-for="book in this.BOOKS" :key="book.id" :book_data="book" @addToCart="addToCart"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BookItem from "./BookItem";

export default {
  name: 'BookList',
  props: {},
  components: {
    BookItem
  },
  computed: {
    ...mapGetters([
      'BOOKS',
      'CART'
    ]),
  },
   methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
      
};
</script>

<style lang = "scss">
    .book-list {
      padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
       justify-content: center;
        align-items: stretch;
        margin: -10px;
        background: #e6e6e6;
    }

</style>