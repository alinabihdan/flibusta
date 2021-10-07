<template>
    <div class="book-item">

      <Popup 
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"
        @checkForm="addToCart" 
        :popup_data="book_data"
      />


        <!-- image -->
        <template v-if="book_data.volumeInfo.imageLinks">
            <img :src="book_data.volumeInfo.imageLinks.thumbnail" :alt="book_data.volumeInfo.title" height="150">
        </template>
        <template v-else>
            <img
            src="https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png"
            :alt="book_data.volumeInfo.title"
            width="128"
            >
        </template>
        <!-- name of book -->
        <h4>{{ book_data.volumeInfo.title }}</h4>
        <!-- author -->
        <p class="author">
            <span v-if="!book_data.volumeInfo.authors">No authors to display</span>
            <span v-else>
                By
                <span v-for="(author, index) in book_data.volumeInfo.authors" :key="index">
                    <em>
                        {{
                        index + 1 !== book_data.volumeInfo.authors.length && index + 1 !== book_data.volumeInfo.authors.length-1 ? author + ', ' : index + 1 == book_data.volumeInfo.authors.length && index+1 !== 1 ? ' and ' + author : author
                        }}
                    </em>
                </span>
            </span>
        </p>
        <!-- published -->
        <div v-if="book_data.volumeInfo.publishedDate" class="published">
            <p>Published {{ book_data.volumeInfo.publishedDate.slice(0, 4) }}</p> 
            <p v-if="book_data.volumeInfo.publisher"> by {{ book_data.volumeInfo.publisher }}</p>
        </div>
        <!-- price --> 
       <p class="price">
          {{`${book_data.saleInfo.listPrice.amount} ${book_data.saleInfo.retailPrice.currencyCode}`}}
        </p>


        <!-- подробнее -->
            <button
              class="book-item__show-info"
              @click="showPopupInfo"
            >
              Show details
            </button>

        <!-- заказать -->
        <button 
          class="book-item__order" 
          @click="addToCart"
        >
          <i class="material-icons">add_shopping_cart</i>
        </button>

  </div>
</template>

<script>
import Popup from './popup/Popup.vue'
export default {
  name: 'BookItem',
  components: {
    Popup,
  },
  data() {
    return {
      isInfoPopupVisible: false,
    }
  },
  props: {
    book_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      this.$set(this.book_data, 'quantity', 1)
      this.$emit('addToCart', this.book_data)
      this.isInfoPopupVisible = false
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closeInfoPopup() {
      this.isInfoPopupVisible = false
    }
  },
  watch: {
    isInfoPopupVisible: function() {
      if(this.isInfoPopupVisible){
        document.body.style.overflow = 'hidden'
        return
      }

      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style lang = "scss">
  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-basis: 25%;
    border-radius: 4px;
    background-color: rgb(0 0 0 / 12%);
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 14%), 0 2px 1px rgb(0 0 0 / 20%);
    padding: 16px;
    margin: 10px;

    &__show-info,
    &__order {
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    /* &__show-info {
      color: #a9a9a9;
      position: absolute;
      top: 10px;
      right: 10px;
    } */
  }
</style>