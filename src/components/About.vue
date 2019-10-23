<template>
  <div id="box">
    <div class="column">
      <p>
        Hi! I'm Matt - a software developer currently residing in sunny Los Angeles, CA. Let me tell you a little bit about myself.<br><br>
        Like many finance graduates, I began my career in New York City. I worked for two big banks before moving on to equities trading on Park Avenue.
        After realizing I was spending more time developing algorithms and automated trading strategies than actual trading, I decided to pursue my passion. I joined the consultancy Keyrus at the beginning of 2018 that specializes in data analytics.<br><br>
        Keyrus gave me great exposure not just to the technical side, but working with different teams, understanding businesses, and the importance of communication.<br><br>
        As of today, I have done work in software development, data warehousing, ETL development, front & backend web development, database/server management, and algorithmic trading.<br><br>
        When I have some downtime, you can find me either making music or at In-N-Out burger.
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
  padding-bottom: 25px;
}

.column {
  display: inline-block;
  margin: 0px;
  height: 400px;
  width: 550px;
}

p {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
}

img {
  height:350px;
  width:550px;
}

</style>