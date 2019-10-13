<template>
  <div id="app">
    <div class="box">
      <div class="column">
        <div class="l">
          <a href="#">Intuit</a>
        </div>
        <div class="l">
          <a href="#">Goodwill</a>
        </div>
        <div class="l">
          <a href="#">SCF</a>
        </div>
      </div>
      <div class="column">
        <div class="l">
          <a href="#">Spu</a>
        </div>
        <div class="l">
          <a href="#">Ornet</a>
        </div>
        <div class="l">
          <a href="#">Malgo</a>
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
a {
  font-size: 48px;
}

#app {
  width:1000px;
  margin:100px auto;
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
  width: 25%;
}

.l {
  margin: 50px;
  text-align: left;
}

</style>