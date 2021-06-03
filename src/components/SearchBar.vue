<template>
  <div class="coin-search">
    <input 
      :type="type" 
      :name="name" 
      :placeholder="placeholder" 
      id="search"
      v-model="search"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data(){
    return{
      search: ''
    }
  },
  props: {
    type: String,
    placeholder: String,
    name: String,
    getSearchText: Function
  },
  watch: {
    search(newValue){
      //alternative for event bus in vue 2, sends props value to parent component
      this.getSearchText(newValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .coin-search{
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;

    input{
      background: #222531;
      border: none;
      padding: 16px;
      border-radius: 4px;
      outline: none;
      height: 100%;
      width: 100%;
      color: #ffffff;

      &::placeholder{
        color: #e2e2e2;
      }
    }
  }
</style>
