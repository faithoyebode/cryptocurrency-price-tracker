<template>
  <div class="coin-search">
    <input :type="type" :name="name" :placeholder="placeholder" id="search" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    type: String,
    placeholder: String,
    name: String
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

      &::placeholder{
        color: #e2e2e2;
      }
    }
  }
</style>
