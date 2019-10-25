<template>
  <div class="wrapper">
    <h1 id="name slide"><span id="firstname">matt</span><span id="lastname slide">gorzka</span></h1>
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
  color:darkslateblue
}

#lastname {
  color:dodgerblue
}

.wrapper {
    position: relative;
    overflow: hidden;
    width: 100px;
    height: 100px; 
    border: 1px solid black;
}

#slide {
    position: absolute;
    left: -100px;
    width: 100px;
    height: 100px;
    background: blue;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}

@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}

</style>