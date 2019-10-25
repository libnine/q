<template>
  <div>
    <div>
      <transition 
        name="slide-fade">
          <h1 id="name"><span id="firstname">matt</span><span id="lastname">gorzka</span></h1>  
      </transition>
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
  color:darkslateblue
}

#lastname {
  color:dodgerblue
}

.slide-fade-enter-active {
  transition: all 1.1s ease;
}

.slide-fade-leave-active {
  transition: all 1.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, 
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>