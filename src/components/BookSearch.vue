<template>
    <div class="search-books">

      <router-link :to="{name: 'cart', params: {cart_data: CART}}">
        <div class="link_to_cart">
          <i class="material-icons">shopping_cart</i>
          <span>: {{CART.length}}</span>
          <!-- <span v-if="CART.length">Total price: </span> -->
        </div>
      </router-link>

      <div class="query">
        <h1 class="title">Flibusta - simple book search</h1>

        <form @submit.prevent="search(searchQuery)" ref="form" class="query-form">
          <input type="text" v-model.trim="searchQuery" placeholder="Search..." class="query-input" required>
          <button class="btn-search" type="submit">
             <i class="material-icons">search</i>
          </button>
        </form>
      </div>

      <!-- search results -->
      <div class="content">
        <BookList v-if="BOOKS.length"/>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import BookList from '@/components/BookList.vue'

export default {
  name: 'BookSearch',
  components: {
    BookList,
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
      ...mapGetters([
        'SEARCH_QUERY',
        'BOOKS',
        "CART"
      ])
  },
  methods: {
      ...mapActions([
        'GET_SEARCH_QUERY_TO_VUEX',
        'GET_BOOKS_FROM_API',
      ]),
      search(searchQuery) {
        if(this.searchQuery == '') {
          this.$toast.warning("Ooops, you need to type search query", {
            timeout: 3000
          });
          return
        }

        this.GET_BOOKS_FROM_API(searchQuery);
        this.searchQuery = ''
    

      }
  }
    
}
</script>

<style lang="scss">
  .link_to_cart {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    color: #2c3e50;
  }

  .query-form {
    display: flex;
    align-items: center;
  }

  .query-input::placeholder {
    font-size: 18px;
  }

  .btn-search {
    text-shadow: 0 -1px 0 rgb(0 0 0 / 30%);
    background-color: #f87a00;
    background-image: linear-gradient(to bottom, #ff9300, #ed5500);
    background-repeat: repeat-x;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }


    
</style>