<template>
  <div>
    <div id="content">
      <hello />
    </div>
    <div>
      <h3></h3>
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
body {
  display: inline-block;
  margin: 0;
  font-weight: 200;
  font-size: 16px;
}

h3 {
  font-weight: 100;
  font-size: 16;
}

#content {
  padding-top: 3%;
}

</style>
