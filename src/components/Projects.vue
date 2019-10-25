<template>
  <div class="box">
    <div class="column-letter">
      <div class="l">
        <span class="letter">I</span>
      </div>
      <div class="l">
        <span class="letter">G</span>
      </div>
      <div class="l">
        <span class="letter">S</span>
      </div>
    </div>
    <div class="column">
      <div class="l">
        <router-link to="/intuit">Intuit</router-link>
      </div>
      <div class="l">
        <router-link to="/goodwill">Goodwill</router-link>
      </div>
      <div class="l">
        <router-link to="/scf">SCF</router-link>
      </div>
    </div>
    <div class="column-letter">
      <div class="l">
        <span class="letter">S</span>
      </div>
      <div class="l">
        <span class="letter">O</span>
      </div>
      <div class="l">
        <span class="letter">M</span>
      </div>
    </div>
    <div class="column">
      <div class="l">
        <router-link to="/spu">Spu</router-link>
      </div>
      <div class="l">
        <router-link to="/ornet">Ornet</router-link>
      </div>
      <div class="l">
        <router-link to="/malgo">Malgo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Euphoria+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

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

body {
  display: inline-block;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 16px;
  padding: 10px;
}

.box {
  margin: 0 auto;
  padding-right: 5%;
  text-align: center;
  width: 75%;
}

.column {
  display: inline-block;
  margin: 0;
  width: 150px;
}

.column-letter {
  display: inline-block;
  margin: 0;
  text-align: left;
  width: 5%;
}

.l {
  margin: 50px;
  text-align: left;
}

.letter {
  color:rgba(71, 61, 139, 0.438);
  font-family: 'Euphoria Script', cursive;
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  margin: 20px;
  padding: 5%;
}

</style>