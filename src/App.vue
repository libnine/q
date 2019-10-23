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

  created() {
    document.title = 'Matt Gorzka'
  },

  name: 'App'
}

</script>

<style>
#app {
  display: inline;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.7s;
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
