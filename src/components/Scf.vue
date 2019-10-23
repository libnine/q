<template>
  <div id="box">
    <div class="column">
      <p>
        SCF, which stands for <i>S</i>ports <i>C</i>ards <i>F</i>orever, is a privately owned company from Chicago that buys and sells vintage sports cards.<br><br>
        I developed and maintained the backend architecture and processes, including web apps designed for internal use by key employees. 
        This involved development with Python, AWS, Azure, and SQL Server. A few APIs were used to retrieve pricing on items, as well as delivery services.<br><br>
        The project offered great exposure to a unique business and allowed me free rein in using creative ways to make the system more efficient.
     </p>
    </div>
    <div id="git">
      <a href="https://www.github.com/libnine/scf" target="_blank">github</a>
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
  font-size: 16px;
  text-align: left;
}
</style>