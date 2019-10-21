<template>
  <b-row class="profil" align-v="center">
    <b-col cols="12" sm="12" md="6" lg="6">
      <b-row align-v="center">
        <b-col cols="12" sm="4" class="profile-pic-container">
          <b-img class="profile-pic" src="https://media.licdn.com/dms/image/C4D03AQEk423IZXAf1w/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=rdzfYl6aWTMTcbuJzl-uvy7uc7TeIcn8GsBqUSHAC-k" alt="Profile Pic"></b-img>
        </b-col>
        <b-col cols="12" sm="8" class="hello-info">
          <h3 class="mb-4">Bonjour Hugo 👋</h3>
          <p class="mb-2"><font-awesome-icon :icon="['fad', 'mail-bulk']" class="mr-3"/> harias@ol.fr</p>
          <p class="mb-2"><font-awesome-icon :icon="['fad', 'mobile']" class="mr-3"/> +33 6 88 77 89 77</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" sm="12" md="6" lg="6" class="ml-auto">
      <slick ref="slick" class="complete-status" :options="slickOptions">
        <div>
            <ul class="complete p-2">
              <li class="progression m-3 d-none d-sm-inline-block">
                <vue-circle
                  :progress="70"
                  :size="100"
                  :reverse="false"
                  line-cap="round"
                  :fill=fill
                  empty-fill="#fff"
                  :animation-start-value="0.0"
                  :start-angle="25"
                  insert-mode="append"
                  :thickness="5"
                  :show-percent="true">
                </vue-circle>
              </li>
              <li class="progression-info">
                <h5 class="mb-2">Profil à compléter</h5>
                <p class="mb-2">Bénéficiez de tous vos avantages<br>en complétant votre profil</p>
                <b-button class="px-4" to="/compte" pill>Compléter</b-button>
              </li>
            </ul>
        </div>
        <div>
          <ul class="advantages pt-4">
            <li>
              <font-awesome-icon :icon="['fad', 'ticket-alt']" class=""/>
              <h5 class="mb-0">Tarifs exclusifs</h5>
              <p>places supplémentaires</p>
            </li>
            <li>
              <font-awesome-icon :icon="['fad', 'stars']" class=""/>
              <h5 class="mb-0">Remises</h5>
              <p>sur les expériences OL</p>
            </li>
            <li>
              <font-awesome-icon :icon="['fad', 'badge-percent']" class=""/>
              <h5 class="mb-0">10% de remises</h5>
              <p>en boutique OL et adidas</p>
            </li>
          </ul>
        </div>
      </slick>
    </b-col>
  </b-row>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VueCircle from 'vue2-circle-progress/src/index.vue'

export default {
  name: 'Profile',
  components: {
    Slick,
    VueCircle
  },
  data() {
    return {
      value: 33.333333333,
      max: 50,
      fill: { color: "#f2b64e" },
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 15,
        speed: 1500,
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.profil {
  .profile-pic-container {
    text-align: right;
    @media screen and (max-width: 576px) {
        text-align: center;
    }
    .profile-pic {
      box-shadow: 0 10px 30px 0 rgba(2,13,70,.1);
      border-radius: 1rem !important;
      max-width: 100%;
      height: auto;
      max-height: 150px;
      @media screen and (max-width: 576px) {
          margin-bottom: 1rem;
      }
      @media (min-width: 576px) and (max-width: 768px) {
        margin-bottom: 2rem;
      }
    }
  }
  .hello-info {
    color: #19356c;
    text-align: left;
    @media screen and (max-width: 576px) {
        text-align: center;
        margin-bottom: 2rem;
    }
    h3 {
      font-weight: bold;
      font-size: xx-large;
    }
    p {
      font-size: large;
    }
    svg {
      color: #f2b64e;
    }
  }
}
.complete-status {
  max-width: 450px;
  float: right;
  @media screen and (max-width: 768px) {
      max-width: 100%;
      float: right;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 450px;
    float: right;
  }
  .complete {
    background-color: #f9f5f1;
    border-radius: 10rem;
    @media screen and (max-width: 576px) {
      border-radius: 1rem;
    }
    color: #19356c;
    padding-left: 0;
    margin: 0;
    width: 100%;
    li {
      display: inline-block;
      vertical-align: middle;
      h5 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: large;
      }
      p {
        font-size: medium;
      }
      .btn {
        background-color: #f2b64e;
        border-color: #f2b64e;
        font-size: small;
        text-transform: uppercase;
      }
      .percent-text {
        font-size: x-large !important;
      }
    }
    li.progression-info {
      @media screen and (max-width: 576px) {
        padding: 0.8rem 3.5rem;
        width: 100%;
      }
    }
  }
  .advantages {
    padding-left: 0;
    margin: 0;
    width: 100%;
    @media screen and (max-width: 576px) {
      padding-top: 1rem !important;
    }
    @media (min-width: 576px) and (max-width: 768px) {
      padding-top: 1rem !important;
    }
    li {
      display: inline-block;
      width: 33%;
      text-align: center;
      color: #19356c;
      vertical-align: top;
      h5 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: large;
        @media screen and (max-width: 576px) {
          font-size: smaller;
        }
        @media (min-width: 576px) and (max-width: 768px) {
          font-size: smaller;
        }
      }
      p {
        font-size: small;
      }
      svg {
        color: #f2b64e;
        font-size: 3rem;
        border: solid 3px;
        border-radius: 4rem;
        padding: 9%;
        height: 4rem;
        width: 4rem;
        margin-bottom: 1rem;
        @media screen and (max-width: 576px) {
          font-size: smaller;
          padding: 12%;
        }
        @media (min-width: 576px) and (max-width: 768px) {
          font-size: smaller;
          padding: 12%;
        }
      }
    }
  }
}
</style>
