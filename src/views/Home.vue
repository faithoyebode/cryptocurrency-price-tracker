<template>
  <div class="home">
    <SearchBar type="text" name="search" placeholder="Search" :getSearchText="getSearchText" />
    <CoinList :searchText="searchText" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import CoinList from '@/components/CoinList.vue';
import { mapActions } from 'vuex';


export default {
  name: 'Home',

  components: {
    SearchBar,
    CoinList
  },

  data(){
    return{
      searchText: ''
    }
  },

  methods: {
    ...mapActions({
      getCoins: "coins/getCoins"
    }),
    getSearchText(search){
      this.searchText = search.toLowerCase();
    } 
  },

  mounted(){
    this.getCoins();
  },

  watch: {
    searchText(newValue){
      console.log(newValue);
    }
  }
}
</script>
