<template>
  <b-row class="mt-4" align-v="center">
    <b-col cols="12" class="menu-items">
      <slick ref="slick" class="menu" :options="slickOptions">
        <div class="menu-item text-center py-5">
          <b-button class="px-5 py-3" to="/dashboard">Dashboard</b-button>
        </div>
        <div class="menu-item text-center py-5">
          <b-button class="px-5 py-3" to="/annuaire">Annuaire</b-button>
        </div>
        <div class="menu-item text-center py-5">
          <b-button class="px-5 py-3" to="/calendrier">Calendrier</b-button>
        </div>
        <div class="menu-item text-center py-5">
          <b-button class="px-5 py-3" to="/billets">Mes Billets</b-button>
        </div>
        <div class="menu-item text-center py-5">
          <b-button class="px-5 py-3" to="/compte">Mon Compte</b-button>
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
      slidesToShow: 5,
      infinite: false,
      autoplay: false,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: 15,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
            centerMode: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            variableWidth: true,
            centerMode: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            variableWidth: true,
            centerMode: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true
          }
        }
      ]
    }
  }
},
methods: {
}
}
</script>

<style lang="scss" scoped>
.menu-items {
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
  .menu {
    .btn {
      background-color: #fff;
      border-color: #fff;
      color: #19356c;
      text-transform: uppercase;
      box-shadow: 0 10px 30px 0 rgba(2, 13, 70, 0.1);
    }
    .btn.router-link-active {
      background-color: #f2b64e;
      border-color: #f2b64e;
      color: #fff;
      text-transform: uppercase;
    }
    .menu-item {
      @media screen and (max-width: 576px) {
        padding: 2rem 1rem !important;
      }
      @media (min-width: 576px) and (max-width: 768px) {
        padding: 2rem 2rem !important;
      }
      @media (min-width: 768px) and (max-width: 992px) {
        padding: 2rem 2rem !important;
      }
      @media (min-width: 992px) and (max-width: 1200px) {
        padding: 2rem 2rem !important;
      }
    }
  }
}
</style>
