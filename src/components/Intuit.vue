<template>
  <div id="box">
    <div class="column">
      <p>
        TurboTax, Quickbooks, Mint... all owned by <a href="https://www.intuit.com" target="_blank">Intuit</a>.<br><br>
        I joined the Intuit project in May, and i'm happy to still be part of the team. My responsibilities have slightly changed over the months. I started as part of the  <i>S</i>mall <i>B</i>usiness <i>G</i>roup, and within that department, I focused my time on data related to Quickbooks customer service agents.<br><br>
        The agent data was held with a third party, and to retrieve that data we used their API, which ultimately involved scheduling python scripts to dump responses to JSON files to folders on a server. These files would later be moved to an S3 bucket once they were loaded to the Vertica database.<br><br>
        After my work was completed with SBG Quickbooks, I spent my time working on optimizing backend processes, mostly scheduled shell & python scripts running on a linux instance.<br><br>
      </p>
    </div>
    <div id="git">
      <i>github repo unavailable</i>
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