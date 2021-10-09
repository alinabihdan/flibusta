<template>
  <div class="list-wrapper">
    <div class="book-list">
      <BookItem v-for="book in this.BOOKS" :key="book.id" :book_data="book" @addToCart="addToCart"/>
    </div>
    <button 
      v-if="isLoadMoreVisible" 
      class="btn-load-more"
      @click="loadMoreSearch"
    >Load more</button>
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
      'CART',
      'isLoadMoreVisible'
    ]),
  },
   methods: {
    ...mapActions([
      'ADD_TO_CART',
      'LOAD_MORE_BOOKS'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    loadMoreSearch() {
      this.LOAD_MORE_BOOKS()
    }
  },
      
};
</script>

<style lang = "scss">
  .list-wrapper {
    background: #e6e6e6;  
  }
    .book-list {
      padding-top: 30px;
        display: flex;
        flex-wrap: wrap;
       justify-content: center;
        align-items: stretch;
        margin: -10px;
      
    }

    .btn-load-more {
      margin: 15px 0;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 30%);
      background-color: #f87a00;
      background-image: linear-gradient(to bottom, #ff9300, #ed5500);
      background-repeat: repeat-x;
      color: #fff;
      border-radius: 4px;
      border: 0;
      padding: 4px;
    }
</style>