<template>
  <div>
    <div id="content">
      <hello />
    </div>
    <div id="quote">
      <h3><span id="quote-text">{{ qod }}</span></h3>
    </div>
    <div id="author">
      <h5><span id="quote-author">{{ author }}</span></h5>
    </div>
  </div>
</template>

<script>
import Hello from './Hello'
import axios from 'axios'

export default {
  components: {
    'hello': Hello
  },

  mounted() {
    try {
      axios.get("http://quotes.rest/qod.json")
      .then(r => {
        this.author = `- ${r.data.contents.quotes[0].author}`
        this.qod = `"${r.data.contents.quotes[0].quote}"`
      })
    } catch(e) {
      console.log(e)
    }
  },

  data () {
    return {
      author: null,
      qod: null
    }
  },

  name: 'Home'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Zeyada&display=swap');

#box-text {
  padding: 1%;
}

body {
  display: inline-block;
  margin: 0;
  font-weight: 200;
  font-size: 16px;
}

#author {
  width: 75%;
}

#content {
  padding-top: 3%;
}

#quote {
  display: inline-block;
  margin: 0 auto;
  margin-top: 10%;
  text-align: center;
  width: 40%
}

#quote-author {
  font-size: 16px;
  font-weight: 300;
  float: right;
  animation: appear 6.5s;
}

#quote-text {
  color:rgba(0, 0, 0, 0.555);
  font-family: Zeyada;
  font-weight: 100;
  font-size: 28px;
  opacity: 1;
  animation: appear 3s;  
}

@keyframes appear-author {
  from { bottom: 0%; }
  to { bottom: }
}

@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
