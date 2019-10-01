<template>
  <b-row class="profil" align-v="center">
    <b-col cols="12" md="7">
      <b-row align-v="center">
        <b-col cols="4">
          <b-img right class="profile-pic" src="https://media.licdn.com/dms/image/C4D03AQEk423IZXAf1w/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=rdzfYl6aWTMTcbuJzl-uvy7uc7TeIcn8GsBqUSHAC-k" height="150px" alt="Profile Pic"></b-img>
        </b-col>
        <b-col cols="8" class="hello-info">
          <h3 class="mb-4">Bonjour Hugo 👋</h3>
          <p class="mb-2"><font-awesome-icon :icon="['far', 'mail-bulk']" class="mr-3"/> harias@ol.fr</p>
          <p class="mb-2"><font-awesome-icon :icon="['far', 'mobile']" class="mr-3"/> +33 6 88 77 89 77</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" md="5">
      <slick ref="slick" class="worked" :options="slickOptions">
        <div>
          <div class="complete">
            <b-container>
              <b-row align-v="center">
                <b-col cols="5">
                  <apexchart type=radialBar width='100%' :options="chartOptions" :series="series" />
                </b-col>
                <b-col cols="7" class="pr-4 pt-3 pb-3">
                  <h5>Profil</h5>
                  <p>Bénéficiez de tous vos avantages en complétant votre profil.</p>
                  <b-button class="px-4" pill>Compléter</b-button>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h5></h5>
              <p>toto</p>
            </li>
            <li>
              <p>toto</p>
            </li>
            <li>
              <p>toto</p>
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

export default {
  name: 'Profile',
  components: {
    Slick
  },
  data() {
    return {
      value: 33.333333333,
      max: 50,
      slickOptions: {
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 15
      },

      series: [70],
        chartOptions: {
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              },
              track: {
                background: "#fff",
                margin: 3
              },
              dataLabels: {
                style: {
                  colors: '#19356c'
                },
                name: {
                  show: false
                },
                value: {
                  offsetY: 4,
                  fontSize: '18px',
                  fontFamily: 'Roboto Condensed',
                  fonWeight: 'bold',
                  color: '#c99148'
                }
              }
            },
          },
          labels: ['Cricket'],
          colors:['#c99148']
        }


    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.profil {
  .profile-pic {
    box-shadow: 0 10px 30px 0 rgba(2,13,70,.1);
    border-radius: 1rem !important;
  }
  .hello-info {
    color: #19356c;
    h3 {
      font-weight: bold;
    }
    svg {
      color: #c99148;
    }
  }
}
.complete {
  background-color: #f9f5f1;
  border-radius: 10rem;
  color: #19356c;
  h5 {
    font-weight: bold;
    text-transform: uppercase;
  }
  .btn {
    background-color: #c99148;
    border-color: #c99148;
  }
}
</style>
