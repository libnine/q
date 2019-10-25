<template>
  <div id="box">
    <div class="column">
      <p>
        Malgo was one of the many algorithmic trading projects I had the pleasure of working on. The goal, like most objectives in this field, was to spot trends in the market that could be exploited for profit using fundamental and historical data.<br><br>
        The securities used for this project only involved those in the S&P 500. The source of this data can come from a number of places, but I decided to use <a href="https://en.wikipedia.org/wiki/List_of_S%26P_500_companies" target="_blank">wikipedia</a>, as it's consistently updated and can be scraped easily, thus having a reliable & easy 'refresh' into our Mongo instance of active symbols.<br><br>
        I used Python, mostly numpy, alongside Mongo, and the <a href="https://iextrading.com/developer/docs/" target="_blank">IEX API</a>, which has since been deprecated, to get relevant data. 
      </p>
    </div>
    <div id="git">
      <a href="https://www.github.com/libnine/malgo" target="_blank">github</a>      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

a, a:visited {
  color: dodgerblue;
  font-size: 16px;
  position: relative;
  text-decoration: none;
}

a:after, a:visited:after {
  content: '';
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  background: rgba(71, 61, 139, 0.801);
  transition: 0.2s;
}

a:hover {
  text-decoration: none;
}

a:hover:after, a:visited:hover:after {
  text-decoration: none;
  width: 100%;
}

a.block, a:visited.block {
  display: block;
  padding: 0.5em;
}

a.block:hover, a:visited.block:hover {
  background: #eee;
}

#box {
  margin: 0 auto;
  text-align: center;
  width: 50%;
}

.column {
  display: inline-block;
  margin: 0;
  width: 400px;
}

#git {
  padding: 5%;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-align: left;
}
</style>