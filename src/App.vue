<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
        
    
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    
    
  }
  .title {
    margin-bottom: 30px;
    
  }
  .query {
    padding: 70px 60px;
    
    background-image: url(https://images.unsplash.com/photo-1563210426-e5902fa57376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-bottom: 1px solid #afb1b8;
  }

  .content {
    text-align: center;
  }

</style>
