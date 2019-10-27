<template>
  <div class="parent">
    <div class="row">
      <ul>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="#"><i class="far fa-envelope-open"></i></a></li>
        <li><a href="#"><i class="fab fa-skype"></i></a></li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-spotify"></i></a></li>
        <li><a href="#"><i class="fab fa-soundcloud"></i></a></li>
      </ul>
    </div>
    <div class="row text">
      <h1>{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: "hey now eeryone!"
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#content {
  color: darkslateblue;
  justify-content: center;
}

h1 {
  font-weight: 100;
  color: darkslateblue;
}

body {
  margin: 0px;
  padding: 0px;
  background: #f0f0f0; 
}

a {
  color: #f2d0f1; 
}

ul {
  display: inline;
  position: relative;
  transform: translate(-50%, 50%);
}

ul li {
  list-style-type: none;
  float: left;
  margin: 10px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  font-size: 50px;
  position: relative; 
  z-index: 1;
}

ul li:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background:rgba(71, 61, 139, 0.253);
  border-radius: 50%;
  transform: scale(0);
  transition: 0.2s ease-in-out;
  z-index: -1;
}

ul li:hover:before {
  transform: scale(0.9);
}

.parent {
  display: inline-block;
  margin: 0 auto;
  align-content: center;
  width: 30%;
  margin-left: 2.5%;
}

.row {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
}

.text {
  padding: 5%;
  margin-right: 8%;
}

</style>