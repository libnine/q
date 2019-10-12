<template>
<div>
  <div>
    <hello />
  </div>
  <div id="content">
    <h1>hay</h1>
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
  display: inline;
  block: 0;
}

#content {
  position: absolute;
  top: 250px;
}

</style>
