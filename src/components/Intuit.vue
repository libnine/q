<template>
  <div id="box">
    <div class="column">
      <p>
        TurboTax, Quickbooks, Mint... all owned by <a href="https://www.intuit.com" target="_blank">Intuit</a>.<br><br>
        I joined the Intuit project in May, and i'm happy to still be part of the team. My role has slightly changed over the months. I started as part of the <i>S</i>mall <i>B</i>usiness <i>G</i>roup, and within that department, I focused my time on data related to Quickbooks customer service agents. 
        The agent data was mostly held with a third party service. To retrieve this data, we used their API, which ultimately involved scheduling python scripts to dump responses into JSON files. These files would later be moved to an S3 bucket once they were loaded into the Vertica database.<br><br>
        After my work was completed with SBG Quickbooks, I spent my time working on optimizing backend processes, mostly shell scripts & python scripts being scheduled on a linux instance.<br><br>
        My role has recently transitioned to <i>C</i>onsumer <i>G</i>roup. CG involves data related to TurboxTax managers and agents. Similar to SBG, agent activity is warehoused in Vertica. This role involves maintaining various Tableau reports and data sources.
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
  width: 75%;
}

.column {
  display: inline-block;
  margin: 0;
  width: 700px;
  margin-left: 2.5%;
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