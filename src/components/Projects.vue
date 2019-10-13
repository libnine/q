<template>
  <div id="app">
    <div class="box">
      <div class="column">
        <div class="l">
          <span class="letter">I</span><a href="#">Intuit</a>
        </div>
        <div class="l">
          <span class="letter">G</span><a href="#">Goodwill</a>
        </div>
        <div class="l">
          <span class="letter">S</span><a href="#">SCF</a>
        </div>
      </div>
      <div class="column">
        <div class="l">
          <span class="letter">S</span><a href="#">Spu</a>
        </div>
        <div class="l">
          <span class="letter">O</span><a href="#">Ornet</a>
        </div>
        <div class="l">
          <span class="letter">M</span><a href="#">Malgo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#app {
  width:1000px;
  margin:100px auto;
}

a, a:visited {
  color: dodgerblue;
  font-size: 24px;
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
  background: #069;
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

body {
  display: inline-block;
  margin: 0 auto;
  font-weight: 200;
  font-size: 16px;
  padding: 10px;
}

.box {
  margin:auto;
  text-align: center;
  width: 80%;
}



.column {
  display: inline-block;
  margin: 0;
  width: 20%;
}

.l {
  margin: 50px;
  text-align: left;
}

.letter {
  font-size: 24px;
  text-align: left;
  margin: 20px;
  padding: 5%;
}

</style>