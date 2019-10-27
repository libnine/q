<template>
  <div>
    <div id="content">
      <hello />
    </div>
    <div>
      <h3><span id="box-text">contact</span> <span id="box-text">github</span></h3>
    </div>
  </div>
</template>

<script>
import Hello from './Hello'

export default {
  components: {
    'hello': Hello
  },

  data () {
    return {
      
    }
  },

  name: 'Home'
}
</script>

<style scoped>
#box-text {
  padding: 1%;
}

body {
  display: inline-block;
  margin: 0;
  font-weight: 200;
  font-size: 16px;
}

h3 {
  font-weight: 100;
  font-size: 28px;
  margin-top: 7.5%;
}

#content {
  padding-top: 3%;
}

</style>
