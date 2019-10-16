<template>
  <div id="box">
    <div class="column">
      <p>
        hey
      </p>
    </div>
    <div class="column">
      <p>
        I'm a seasoned software developer who has developed various products for clients such as Intuit, Goodwill Industries, and others.<br><br>
        I have done work in software development, data warehousing, ETL development, front & backend web development, database/server management, and algorithmic trading.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#box {
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 75%;
}

.column {
  display: inline-block;
  margin: 25px;
  height: 400px;
  width: 400px;
}

p {
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}

img {
  height:350px;
  width:550px;
}

</style>