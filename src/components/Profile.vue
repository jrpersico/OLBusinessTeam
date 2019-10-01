<template>
  <b-row class="profil" align-v="center">
    <b-col cols="12" sm="12" md="6">
      <b-row align-v="center">
        <b-col cols="4">
          <b-img right class="profile-pic" src="https://media.licdn.com/dms/image/C4D03AQEk423IZXAf1w/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=rdzfYl6aWTMTcbuJzl-uvy7uc7TeIcn8GsBqUSHAC-k" alt="Profile Pic"></b-img>
        </b-col>
        <b-col cols="8" class="hello-info">
          <h3 class="mb-4">Bonjour Hugo 👋</h3>
          <p class="mb-2"><font-awesome-icon :icon="['far', 'mail-bulk']" class="mr-3"/> harias@ol.fr</p>
          <p class="mb-2"><font-awesome-icon :icon="['far', 'mobile']" class="mr-3"/> +33 6 88 77 89 77</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" sm="12" md="6" class="ml-auto">
      <slick ref="slick" class="complete-status" :options="slickOptions">
        <div>
          <div class="complete">
            <b-container>
              <b-row align-v="center">
                <b-col cols="4">
                  <apexchart type=radialBar width='100%' :options="chartOptions" :series="series" />
                </b-col>
                <b-col cols="8" class="pr-4 pt-3 pb-3">
                  <h5 class="mb-1">Profil</h5>
                  <p class="mb-1">Bénéficiez de tous vos avantages en complétant votre profil.</p>
                  <b-button class="px-4" pill>Compléter</b-button>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <div>
          <ul class="advantages pt-3">
            <li>
              <font-awesome-icon :icon="['far', 'ticket-alt']" class=""/>
              <h5 class="mb-0">Tarifs exclusifs</h5>
              <p>places supplémentaires</p>
            </li>
            <li>
              <font-awesome-icon :icon="['far', 'stars']" class=""/>
              <h5 class="mb-0">Remises</h5>
              <p>sur les expériences OL</p>
            </li>
            <li>
              <font-awesome-icon :icon="['far', 'badge-percent']" class=""/>
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
    max-width: 100%;
    height: auto;
    max-height: 150px;
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
.complete-status {

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
.advantages {
  padding-left: 0;
  margin: 0;
  width: 100%;
  li {
    display: inline-block;
    width: 33%;
    text-align: center;
    color: #19356c;
    h5 {
      text-transform: uppercase;
      font-weight: bold;
    }
    svg {
      color: #c99148;
      font-size: 3rem;
      border: solid 3px;
      border-radius: 4rem;
      padding: 9%;
      height: 4rem;
      width: 4rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
