<template>
  <div id="box">
    <div class="column">
      <p>
        Spu, also known as <i>spoo</i>, is the contract for the S&P 500 which trades on the Chicago Mercantile Exchange.<br><br>
        Spu is a CLI (command line interface) that pulls securities data from various sources. It was developed in Go & Python. The idea came to mind after years of frustration with visiting too many different URLs for different information pertaining to symbols. Spu is now my go-to tool for actionable information in the market.<br><br>
        Use spu to access short interest, earnings dates, headlines, robinhood data, options data, trending tickers, upcoming economic events, and more.
      </p>
    </div>
    <div id="git">
      <a href="https://www.github.com/libnine/spu" target="_blank">github</a>
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
  font-size: 14px;
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
  padding: 2.5%;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-align: left;
}
</style>