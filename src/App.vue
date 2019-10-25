<template>
  <div id="app">
    <transition 
      name="slide-fade">
      <headertmp id="hdr"/>
      <toolbar id="tb"/>
    </transition>
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
#app {
  display: inline;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

.slide-fade-enter-active {
  transition: all 1.1s ease;
}
.slide-fade-leave-active {
  transition: all 1.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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
