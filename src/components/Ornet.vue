<template>
  <div id="box">
    <div class="column">
      <p>
        Ornet, which stands for <i>Or</i>thopedic <i>Net</i>work, is an application designed for hospitals in efforts to 
        make communication with vendors seamless, organized, and easy.<br><br>
        The application is still in development, with most of the work needing to be finished on the frontend. Ornet's backend was made with Go which is containerized in Docker. The data is stored in Mongo with the frontend being developed in Vue.<br><br>
        Understanding the intricacies of the business has been key throughout this project. Our architecture is <a href="https://digitalguardian.com/blog/what-hipaa-compliance" target="_blank">HIPAA compliant</a>.
      </p>
    </div>
    <div id="git">
      <a href="https://www.github.com/libnine/ornet" target="_blank">github</a>
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
  padding: 5%;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-align: left;
}
</style>