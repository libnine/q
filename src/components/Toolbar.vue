<template>
  <div id="tb">
    <svg id="stroke" width="0" height="0">
        <defs>
            <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
        </defs>
    </svg>
    <div class="container">
        <a class="btn" href="#/"><span class="url" ref="home">home</span>
            <svg class="button-stroke" viewBox="0 2 101 3">
                <use href="#line"></use>
            </svg>
            <svg class="button-stroke" viewBox="0 1 101 13">
                <use href="#line"></use>
            </svg>
        </a>
        <a class="btn" href="#/projects"><span class="url" ref="projects">projects</span>
            <svg class="button-stroke" viewBox="0 2 120 1">
                <use href="#line"></use>
            </svg>
            <svg class="button-stroke" viewBox="0 0 154 10">
                <use href="#line"></use>
            </svg>
        </a>
        <a class="btn" href="#/music"><span class="url" ref="music">music</span>
            <svg class="button-stroke" viewBox="0 2 115 2">
                <use href="#line"></use>
            </svg>
            <svg class="button-stroke" viewBox="0 0 150 11">
                <use href="#line"></use>
            </svg>
        </a>
        <a class="btn" href="#/about"><span class="url" ref="about">about</span>
            <svg class="button-stroke" viewBox="0 2 170 7">
                <use href="#line"></use>
            </svg>
            <svg class="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
            </svg>
        </a>
        <a class="btn" href="#/contact"><span class="url" ref="connect">connect</span>
            <svg class="button-stroke" viewBox="0 1 85 8">
                <use href="#line"></use>
            </svg>
            <svg class="button-stroke" viewBox="0 0 140 13">
                <use href="#line"></use>
            </svg>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    glitch() {

      let about = this.$refs.about
      let home = this.$refs.home
      let projects = this.$refs.projects
      let music = this.$refs.music
      let connect = this.$refs.connect

      const r = (x, y) => {
        return (Math.random() * (y - x)) + x
      }

    }
  },

  name: 'Toolbar'
}
</script>

<style lang="scss" scoped>
body {
    font-size: 16px;
}

.btn {
    font-size: 16px;
	display: inline-block;
	color: white;
	min-width: 155px;
	text-decoration: none;
	margin-right: 5px;
	padding: 10px;
	position: relative;
	text-align: center;
	
	&:hover {
		.button-stroke:nth-child(2) {
			stroke-dashoffset: 55;
		}

        .url {
            color: rgba(71, 61, 139, 0.801);
            font-weight: 700;
            transition: font-weight 100ms ease-in-out;
        }

        text-decoration: none;

	}
}

.button-stroke {
	display: block;
	width: calc(100% - 50px);
	height: 25px;
	stroke: rgba(71, 61, 139, 0.801);
	position: absolute;
	left: 20px;
	bottom: -10px;
	stroke-width: 4;
	
	&:nth-child(2) {
		stroke-dasharray: 650px;
		stroke-dashoffset: 650px;
		stroke: darken(dodgerblue, 10%);
		stroke-width: 5;
		transition: stroke-dashoffset 600ms ease-out;
	}
}

.url {
    font-weight: 100;
    transition: font-weight .25s ease-in-out;
}

</style>