<template>
  <div class="billets">
    <NavBar></NavBar>
    <b-container class="profile-container">
      <Profile></Profile>
    </b-container>
    <b-container class="menu-container">
      <Menu></Menu>
    </b-container>
    <b-container class="content-page" fluid>
      <b-container>
        <b-row v-if="tickets.length > 0">
          <b-col cols="12" sm="12" md="6" lg="4" v-for="(ticket, index) in lists" :key="index">
            <div class="card-content-page ticket-card" :class="ticket.class">
                <p class="mb-0">{{ticket.date}}</p>
                <div class="logos py-3">
                  <ul>
                    <li>
                      <img :src="ticket.logo_home" alt="">
                    </li>
                    <li>
                      <img :src="ticket.logo_away" alt="">
                    </li>
                  </ul>
                </div>
                <h5 class="pb-4">{{ticket.name}}</h5>
                <slick ref="slick" class="complete-status" :options="slickOptions">
                  <div class="ticket" v-for="(seat, index) in ticket.seats" :key="index">
                    <h4 class="pb-2">{{seat.rank}}</h4>
                    <b-button class="px-5" :href="seat.url" target="_blank" pill>Télécharger</b-button>
                  </div>
                </slick>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-pagination v-if="totalRows > 6" :total-rows="totalRows" v-model="currentPage" :per-page="perPage" align="right"/>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  name: 'billets',
  components: {
    NavBar,
    Profile,
    Menu,
    Footer,
    Slick
  },
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      tickets : [
        {
          name:'OL / Dijon FCO',
          date:'19/10/19 - 17h30',
          class:'ligue',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/202/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / FC Metz',
          date:'26/10/19 - 20h00',
          class:'ligue',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/20/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / Benfica',
          date:'16/11/19 - 21h00',
          class:'champions',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/431/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / OGC Nice',
          date:'23/11/19 - 20h00',
          class:'ligue',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/46/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / Lille',
          date:'04/12/19 - 20h00',
          class:'ligue',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/43/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / RB Leipzig',
          date:'10/12/19 - 21h00',
          class:'champions',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/6994/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        },
        {
          name:'OL / Rennes',
          date:'14/12/19 - 20h00',
          class:'ligue',
          logo_home:'https://medias.lequipe.fr/logo-football/22/200',
          logo_away:'https://medias.lequipe.fr/logo-football/14/200',
          seats : [
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 185'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Rang 6 - Place 186'
            },
            {
              url:'https://www.google.fr/',
              rank: 'Parking P7'
            }
          ]
        }
      ],
      slickOptions: {
        slidesToShow: 1,
        infinite: false,
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

  },
  computed: {
    lists () {
      const items = this.tickets
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows() {
      return this.tickets.length
    }
  }
}
</script>
