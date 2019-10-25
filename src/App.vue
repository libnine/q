<template>
  <div id="app">
    <headertmp id="hdr"/>
    <toolbar id="tb"/>
    <transition
      name="fade"
      mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import Toolbar from './components/Toolbar'

export default {
  components: {
    'headertmp': Header,
    'toolbar': Toolbar
  },

  data () {
    return {
      show: true
    }
  },

  name: 'App'
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

html {
  margin-left: calc(100vw - 100%); 
  }

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

#hdr {
  align-content: center;
  padding: 2px;
  height: 100%;
  width: 100%;
}

#tb {
  align-content: center;
  padding: 1px;
  height: 100%;
  width: 100%;
  padding-bottom: 55px;
}
</style>
