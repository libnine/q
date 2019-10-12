<template>
  <div id="toolbar">
    <div id="links">
      <a href="#/" class="link">home</a> <a href="#/projects" class="link">projects</a> <a href="#/music" class="link">music</a> <a href="#/about" class="link">about</a> <a href="#/contact" class="link">contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style scoped>
.link {
	font-size: 20px;
	font-weight: 500;

	text-decoration: none;
	text-transform: lowercase;

	position: relative;
	z-index: 1;
	display: inline-flex;
	padding: 20px;
}

.link::before{
	content: "";
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to top, rgba(71, 61, 139, 0.856) 5%, rgba(0, 0, 0, 0) 30%);
	
	position: absolute;
	left: 0;
	bottom: 2px;
	z-index: -1;

	will-change: width;
	transform: rotate(-3deg);
	transform-origin: left bottom;
	transition: width .1s ease-out;
}

.link:hover {
	text-decoration: none;
}

.link:hover::before {
	width: 0;
	transition-duration: .15s;
}
</style>