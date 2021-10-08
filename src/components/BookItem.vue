<template>
  <div class="book-item">

    <Popup 
      v-if="isInfoPopupVisible"
      @closePopup="closeInfoPopup"
      @checkForm="addToCart" 
      :popup_data="book_data"
    />
    <!-- подробнее -->
      <button
        class="book-item__show-info"
        @click="showPopupInfo"
      >
        <i class="material-icons">info</i>
      </button>
    <!-- name of book -->
    <div class="book-item__header">
      <h4 class="book-item__title">{{ book_data.volumeInfo.title }}</h4>
      
    </div>
    

    <div class="book-item__body">
      <!-- image -->
      <template v-if="book_data.volumeInfo.imageLinks">
        <img :src="book_data.volumeInfo.imageLinks.thumbnail" :alt="book_data.volumeInfo.title" height="150">
      </template>
      <template v-else>
        <img
          src="https://upittpress.org/wp-content/themes/pittspress/images/no_cover_available.png"
          :alt="book_data.volumeInfo.title"
          height="300"
        >
      </template>

      <div class="book-item__content">
        <!-- author -->
        <p class="author">
          <span v-if="!book_data.volumeInfo.authors">No authors to display</span>
          <span v-else>
            By <span v-for="(author, index) in book_data.volumeInfo.authors" :key="index">
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
      </div>
    </div> 

    <div class="book-item__footer">
      <!-- price --> 
      <p class="price">
        {{`${Math.round(book_data.saleInfo.listPrice.amount)} ${book_data.saleInfo.retailPrice.currencyCode}`}}
      </p>
      <!-- заказать -->
      <button 
        class="book-item__order" 
        @click="addToCart"
      >
        <i class="material-icons">add_shopping_cart</i>
      </button>
    </div>
    
    

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
      this.$toast.success("Added to cart", {
            timeout: 3000
          });
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
  h4,
  p {
    margin: 0;
  }
  .book-item {
    flex-basis: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 8px 8px 16px 16px;
    margin: 10px;

    &__header,
    &__body,
    &__footer {
      display: flex;
      align-items: center;
    }
    &__header{
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10px;


    }
    &__body {
      justify-content: space-around;
      margin-bottom: 10px;
    }
    &__content {
      font-style: italic;
    }
    &__footer {
      justify-content: space-around;
    }

    &__show-info,
    &__order {
      border: 0;
      background: transparent;
      cursor: pointer;
      
    }
    &__show-info {
      margin-left: auto;

      & .material-icons {
      color: #f15e00;
      }
    }

    &__order {
      text-shadow: 0 -1px 0 rgb(0 0 0 / 30%);
      background-color: #f87a00;
      background-image: linear-gradient(to bottom, #ff9300, #ed5500);
      background-repeat: repeat-x;
      color: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 4px;
    }

    &__title {
      color: #446699;
      text-align: left;
    }

  }
  .price {
    color: #f15e00;
    font-size: 20px;
    font-weight: 700;
  }

  .author,
  .published {
    margin-bottom: 10px;
  }
</style>