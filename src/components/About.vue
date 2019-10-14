<template>
  <div id="box">
    <div class="column">
      <div id="slideshow">
        <div>
          <img src="//farm6.static.flickr.com/5224/5658667829_2bb7d42a9c_m.jpg">
        </div>
        <div>
          <img src="//farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg">
        </div>
        <div>
          Pretty cool eh? This slide is proof the content can be anything.
        </div>
      </div>
    </div>
    <div class="column">
      <p>
        I'm a seasoned software developer who has developed various products for clients such as TurboTax, QuickBooks, Goodwill Industries, and others.<br><br>
        I have done work in software development, data warehousing, ETL development, front & backend web development, database/server management, and algorithmic trading.
      </p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  computed: {
    slideshow() {
      $("#slideshow > div:gt(0)").hide();

      setInterval(function() {
        $('#slideshow > div:first')
          .fadeOut(1000)
          .next()
          .fadeIn(1000)
          .end()
          .appendTo('#slideshow');
      }, 3000);
    }
  }
}
</script>

<style scoped>
body {
  display: inline-block;
  margin: 0 auto;
  font-weight: 200;
  font-size: 16px;
  padding: 10px;
}

#box {
  margin: 0 auto;
  text-align: center;
  width: 75%;
}

.column {
  display: inline-block;
  margin: 0;
  width: 400px;
}

p {
  text-align: left;
}

#slideshow { 
    margin: 50px auto; 
    position: relative; 
    width: 240px; 
    height: 240px; 
    padding: 10px; 
    box-shadow: 0 0 20px rgba(0,0,0,0.4); 
}

#slideshow > div { 
    position: absolute; 
    top: 10px; 
    left: 10px; 
    right: 10px; 
    bottom: 10px; 
}
</style>