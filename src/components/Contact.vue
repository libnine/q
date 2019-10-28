<template>
  <div class="parent">
    <div class="row">
      <ul>
        <li><a href="https://www.linkedin.com/in/matthew-gorzka-71ba273b" target="_blank" @mouseover="hoverfunc('linkedin')" @mouseleave="leavefunc()"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="mailto:mgorzk@gmail.com" @mouseover="hoverfunc('email')" @mouseleave="leavefunc()"><i class="far fa-envelope-open"></i></a></li>
        <li><a href="skype:flyingmooze?call" @mouseover="hoverfunc('skype')" @mouseleave="leavefunc()"><i class="fab fa-skype"></i></a></li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="https://www.instagram.com/qorka" target="_blank"><i class="fab fa-instagram" @mouseover="hoverfunc('instagram')" @mouseleave="leavefunc()"></i></a></li>
        <li><a href="https://open.spotify.com/user/21cbiqxy6eaq25n3dk3qkzj6a" target="_blank"><i class="fab fa-spotify" @mouseover="hoverfunc('spotify')" @mouseleave="leavefunc()"></i></a></li>
        <li><a href="https://www.soundcloud.com/libra9" target="_blank"><i class="fab fa-soundcloud" @mouseover="hoverfunc('soundcloud')" @mouseleave="leavefunc()"></i></a></li>
      </ul>
    </div>
    <div class="row">
      <ul>
        <li><a href="https://www.github.com/libnine" target="_blank"><i class="fab fa-github" @mouseover="hoverfunc('github')" @mouseleave="leavefunc()"></i></a></li>
      </ul>
    </div>
    <div class="text">
      <h1 v-bind:style="{ opacity: op, transition: 'opacity 750ms' }">{{ text }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      op: 0,
      text: "hey now eeryone!"
    }
  },
  
  methods: {
    hoverfunc(link) {
      this.op = 1
      this.text = link
    },

    leavefunc() {
      this.op = 0
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
  font-size: 20px;
  color: darkslateblue;
  margin-right: 7.5%;
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
  display: inline;
  margin: 0 auto;
}
</style>