<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Temp from './components/Temp'
import Temp2 from './components/Temp2'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Temp,
    Temp2
  },

  data: () => ({
    //
  })
}
</script>
<style>
  #id{
    height: 100%;
  }
</style>
