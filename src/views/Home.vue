<template>
  <div class="home">
    <NavBar></NavBar>
    <b-container>
      <Profile></Profile>
      <Menu></Menu>
    </b-container>
    <b-container class="content-page" fluid>
      <b-container>
        <b-row class="dashboard">
          <b-col cols="6">
            <div class="card-content-page">
              <h5 class="mb-2">Nouveaux membres</h5>
              <p class="mb-4">Découvrez les nouveaux membres de la communauté OLBT</p>
              <div class="members" v-for="(member, index) in new_members" :key="index">
                <b-row align-v="center">
                  <b-col cols="3">
                    <div class="img-members" :style="{ 'background': 'url(' + member.img + ') no-repeat center','background-size':'contain', 'background-origin': 'content-box' }"></div>
                  </b-col>
                  <b-col cols="9">
                    <h5 class="mb-3">{{member.referer_firstname}} {{member.referer_lastname}} <span class="business">({{member.name}})</span></h5>
                    <p class="mb-2"><font-awesome-icon :icon="['fad', 'mail-bulk']" class="mr-3"/> {{member.mail}}</p>
                    <p class="mb-0"><font-awesome-icon :icon="['fad', 'mobile']" class="mr-3"/> {{member.phone}}</p>
                    <b-button class="px-4" pill>Contacter</b-button>
                  </b-col>
                </b-row>
                <hr v-if="(index+1) != new_members.length">
              </div>
            </div>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="6">
                <div class="card-content-page members-card">
                  <h5 class="mb-1">Entreprises</h5>
                  <h3 class="mb-3"><ICountUp :delay="delay" :endVal="endVal" :options="options"/></h3>
                  <p class="mb-0">400 - Blue</p>
                  <p class="mb-0">720 - Silver</p>
                  <p class="mb-4">350 - Gold</p>
                  <b-button class="px-4" pill>Annuaire</b-button>
                </div>
                <div class="card-content-page card-advantages">
                  <h5 class="mb-2">Avantages</h5>
                  <p class="mb-4">Utilisation de vos avantages</p>
                  <div class="advantages" v-for="(advantage, index) in advantages" :key="index">
                    <b-row align-v="center" class="advantage">
                      <b-col cols="4" class="col">
                        <p class="mb-0">{{advantage.name}}</p>
                      </b-col>
                      <b-col cols="5" class="col">
                        <b-progress :value="advantage.value"></b-progress>
                      </b-col>
                      <b-col cols="3" class="col text-center">
                        <p class="mb-0">{{advantage.complete}}</p>
                      </b-col>
                    </b-row>
                    <hr v-if="(index+1) != new_members.length">
                  </div>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="events-list">
                  <h5 class="mb-2">Evènements</h5>
                  <p class="mb-4">Vos prochaines rencontres</p>
                  <div class="events" v-for="(single_event, index) in events" :key="index">
                    <b-row align-v="center" class="event-title">
                      <b-col cols="12">
                        <p class="mb-1">{{single_event.name}} <font-awesome-icon :icon="['fad', 'arrow-alt-circle-right']"/></p>
                      </b-col>
                    </b-row>
                    <b-row align-v="center" class="event">
                      <b-col cols="6">
                        <p class="mb-0">Statut : <font-awesome-icon v-b-tooltip.hover.bottom="'OLBT BLue'" :icon="['fad', 'circle']" v-if="single_event.blue" class="mr-1 blue"/><font-awesome-icon v-b-tooltip.hover.bottom="'OLBT Silver'" v-if="single_event.silver" :icon="['fad', 'circle']" class="mr-1 silver"/><font-awesome-icon v-b-tooltip.hover.bottom="'OLBT Gold'" :icon="['fad', 'circle']" v-if="single_event.gold" class="mr-1 gold"/></p>
                      </b-col>
                      <b-col cols="6" class="text-right">
                        <p class="mb-0">{{ new Date() | moment("DD/MM/YY") }}</p>
                      </b-col>
                    </b-row>
                    <hr v-if="(index+1) != events.length">
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'
import ICountUp from 'vue-countup-v2'

export default {
  name: 'home',
  components: {
    NavBar,
    Profile,
    Menu,
    ICountUp
  },
  data() {
    return {
      new_members : [
        { img:'https://www.cerise-et-potiron.fr/images/logo/LogoCerisePotiron.png', name:'Cerise & Potiron', referer_firstname:'Hugo', referer_lastname: 'Arias', mail:'ceriseetpotirons@cerises.com', phone:'+ 33 0 00 00 00 00' },
        { img:'https://www.bledina.com/app/themes/bledina/assets/images/v6/logo-bledina-dsk.svg', name:'Blédina', referer_firstname:'Florent', referer_lastname: 'Chapelier', mail:'bledina@bledina.com', phone:'+ 33 0 00 00 00 00' },
        { img:'https://www.groupeseb.com/themes/custom/periscope/logo.svg', name:'SEB', referer_firstname:'Loïc', referer_lastname: 'Rollat', mail:'seb@seb.com', phone:'+ 33 0 00 00 00 00' }
      ],
      advantages : [
        { name:'Invitations', value:50, complete:'20/40' },
        { name:'Upgrade', value:100, complete:'1/1' },
        { name:'Parking', value:100, complete:'1/1' }
      ],
      events : [
        { name:'Déjeuner partenaires OLBT', blue:false, silver:false, gold:true, date:'12/12/12' },
        { name:'Retransmission Match', blue:false, silver:true, gold:true, description:'test description', date:'12/12/12' },
        { name:'Match - Dijon FCO', blue:true, silver:true, gold:true, description:'test description', date:'12/12/12' },
        { name:'Retransmission Match', blue:false, silver:true, gold:true, description:'test description', date:'12/12/12' },
        { name:'Match - Metz', blue:true, silver:true, gold:true, description:'test description', date:'12/12/12' },
        { name:'Conférence OLBT', blue:false, silver:true, gold:true, description:'test description', date:'12/12/12' }
      ],
      delay: 1000,
      endVal: 1500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  methods: {

  }
}
</script>
