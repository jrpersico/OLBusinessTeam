<template>
  <b-row class="menu mt-4" align-v="center">
    <b-col cols="12">
      <slick ref="slick" class="menu" :options="slickOptions">
        <div class="text-center py-4">
          <b-button class="px-5 py-3" to="/">Dashboard</b-button>
        </div>
        <div class="text-center py-4">
          <b-button class="px-5 py-3" to="/annuaire">Annuaire</b-button>
        </div>
        <div class="text-center py-4">
          <b-button class="px-5 py-3" to="/calendrier">Calendrier</b-button>
        </div>
      </slick>
    </b-col>
  </b-row>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
name: 'Menu',
components: {
  Slick
},
data() {
  return {
    slickOptions: {
      slidesToShow: 3,
      infinite: true,
      autoplay: false,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: 15
    }
  }
},
methods: {
}
}
</script>

<style lang="scss" scoped>
.menu {
  .btn {
    background-color: #fff;
    border-color: #fff;
    color: #19356c;
    text-transform: uppercase;
    box-shadow: 0 10px 30px 0 rgba(2, 13, 70, 0.1);
  }
  .btn.router-link-active {
    background-color: #c99148;
    border-color: #c99148;
    color: #fff;
    text-transform: uppercase;
  }
}
</style>
