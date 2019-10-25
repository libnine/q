<template>
  <div id="box">
    <div class="column">
      <p>
        <i>G</i>oodwill <i>I</i>ndustries <i>I</i>nternational, or Goodwill, is one of the most well known nonprofit organizations in the world. 
        You're probably familiar with them as a donations center, but they're actually much more than that. They also focus on skill building, education, and training.<br><br>
        With so many moving parts in the business, the data warehouse was pretty in depth. I joined the team in the spring of 2018 to create and maintain many of the backend processes and help with reporting. The technology stack was mostly Microsoft products such as SQL Server, SSIS, SSRS (reporting), along with some in-house tools.<br><br>
        By fall, I was tasked with optimizing our file ingestion process across all of our environments. The original process had a SSIS job on loop, scanning the FTP folder for new files being dropped every five minutes. The new process, made with Python, was created to 'listen' for new files, which resulted in less resources and memory errors.<br><br>
      </p>
    </div>
    <div id="git">
      <i>github repo is private</i>
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
  padding: 2.5%;
}

p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-align: left;
}
</style>