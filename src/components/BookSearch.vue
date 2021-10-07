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

        <form @submit.prevent="search(searchQuery)" id="query">
          <input type="text" v-model.trim="searchQuery" placeholder="⌕" class="input" required>
          <button @click="search(searchQuery)" class="btn">
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
        this.GET_SEARCH_QUERY_TO_VUEX(searchQuery);
        this.GET_BOOKS_FROM_API(searchQuery);
        setTimeout(() => {
          this.searchQuery = ''
        }, 500)

      }
  }
    
}
</script>

<style lang="scss">
  .link_to_cart {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    align-items: center;

  }
    
</style>