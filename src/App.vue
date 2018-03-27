<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1><router-link :to="{path:'/'}">首页</router-link></h1>
    <p>购物车({{ totalnumber }})</p>
    <p>总价格:{{ totalprice }} 元</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
  	totalnumber(){
  		return this.$store.state.totalnumber;
  	},
  	totalprice(){
  		return this.$store.state.totalprice;
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
