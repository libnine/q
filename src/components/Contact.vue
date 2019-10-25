<template>
  <div id="contact">
    <div>
      <a href="https://www.linkedin.com/in/matthew-gorzka-71ba273b" target="_blank">
        <img src="@/assets/icons/linkedin.png" class="icons" @mouseover="linkedin='1'" @mouseleave="linkedin='0'">
      </a>
      <a href="mailto:mgorzk@gmail.com">
        <img src="@/assets/icons/google.png" class="icons" @mouseover="email='1'" @mouseleave="email='0'">
      </a>
      <a href="https://www.instagram.com/qorka" target="_blank">
        <img src="@/assets/icons/instagram.png" class="icons" @mouseover="instagram='1'" @mouseleave="instagram='0'">
      </a>
    </div>
    <div>
      <span class="caps" v-bind:style="{ opacity: linkedin, transition: 'opacity 750ms'}">{{ linkedin_text }}</span>
      <span class="caps" v-bind:style="{ opacity: email, transition: 'opacity 750ms' }">{{ email_text }}</span>
      <span class="caps" v-bind:style="{ opacity: instagram, transition: 'opacity 750ms' }">{{ instagram_text }}</span>
    </div>
    <div>
      <a href="skype:flyingmooze?call">
        <img src="@/assets/icons/skype.png" class="icons" @mouseover="skype='1'" @mouseout="skype='0'">
      </a>
      <a href="https://www.soundcloud.com/libra9" target="_blank">
        <img src="@/assets/icons/soundcloud.png" class="icons" @mouseover="soundcloud='1'" @mouseout="soundcloud='0'">
      </a>
      <a href="https://open.spotify.com/user/21cbiqxy6eaq25n3dk3qkzj6a" target="_blank">
        <img src="@/assets/icons/spotify.png" class="icons" @mouseover="spotify='1'" @mouseout="spotify='0'">
      </a>
    </div>
    <div>
      <span class="capstwo" v-bind:style="{ opacity: skype, transition: 'opacity 750ms' }">{{ skype_text }}</span>
      <span class="capstwo" v-bind:style="{ opacity: soundcloud, transition: 'opacity 750ms' }">{{ soundcloud_text }}</span>
      <span class="capstwo" v-bind:style="{ opacity: spotify, transition: 'opacity 750ms' }">{{ spotify_text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkedin: 0,
      linkedin_text: 'linkedin',
      email: 0,
      email_text: 'email',
      instagram: 0,
      instagram_text: 'instagram',
      skype: 0,
      skype_text: 'skype',
      soundcloud: 0,
      soundcloud_text: 'soundcloud',
      spotify: 0,
      spotify_text: 'spotify'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

#contact {
  color: darkslateblue;
  justify-content: center;
}

.icons {
  height: 125px;
  margin: 2.5%;
  padding: 5;
  width: 120px;
}

.caps {
  color:dodgerblue;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 5px;
  margin: 65px;
}

.capstwo {
  color:dodgerblue;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;  
  padding: 5px;
  margin: 60px;
}

</style>