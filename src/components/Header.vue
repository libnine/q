<template>
  <div>
    <div class="slide-left">
      <h1 id="name"><span id="firstname">matt</span><span id="lastname">gorzka</span></h1>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#name {
  text-decoration: none;
  font-size: 96px;
}

#firstname {
  color:darkslateblue;
  transition: color .7s ease-in-out;
}

#firstname:hover {
  color:dodgerblue;
  transition: color .7s ease-in-out;
}

#lastname {
  color:dodgerblue;
  transition: color .7s ease-in-out;
}

#lastname:hover {
  color:darkslateblue;
  transition: color .7s ease-in-out;
}

div.slide-left {
  width:100%;
  overflow:hidden;
}
div.slide-left h1 {
  animation: slide-left 0.25s;
}

@keyframes slide-left {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

</style>