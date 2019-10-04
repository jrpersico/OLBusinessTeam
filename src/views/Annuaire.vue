<template>
  <div class="annuaire">
    <NavBar></NavBar>
    <b-container class="profile-container">
      <Profile></Profile>
    </b-container>
    <b-container class="menu-container">
      <Menu></Menu>
    </b-container>
    <b-container class="content-page" fluid>
      <b-container>
        <b-row class="search-bar">
          <b-col cols="12">
            <h5 class="mb-4">Entreprises OLBT</h5>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="8">
            <b-input-group>
              <b-input-group-prepend is-text><font-awesome-icon :icon="['fad', 'search']"/></b-input-group-prepend>
              <b-form-input type="text" placeholder="Rechercher" v-model="search"></b-form-input>
            </b-input-group>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="2">
            <b-form-select v-model="selected" :options="optiones"></b-form-select>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="2">
            <b-form-select v-model="selected" :options="optiones"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="12" sm="12" md="12" lg="6" v-for="(member, index) in list" :key="index">
            <div class="card-content-page member-card">
                <b-row align-v="center">
                  <b-col cols="12" sm="3">
                    <img class="img-members" :src="member.img" alt="">
                  </b-col>
                  <b-col cols="12" sm="9">
                    <h5 class="mb-3">{{member.referer_firstname}} {{member.referer_lastname}} <span class="business">({{member.name}})</span></h5>
                    <p class="mb-2"><font-awesome-icon :icon="['fad', 'mail-bulk']" class="mr-3"/> {{member.mail}}</p>
                    <p class="mb-0"><font-awesome-icon :icon="['fad', 'mobile']" class="mr-3"/> {{member.phone}}</p>
                  </b-col>
                  <b-col cols="12">
                    <b-button class="px-4" :href="'mailto:' + member.mail" pill>Contacter</b-button>
                  </b-col>
                </b-row>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-pagination :total-rows="totalRows" v-model="currentPage" :per-page="perPage" align="right"/>
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

export default {
  name: 'annuaire',
  components: {
    NavBar,
    Profile,
    Menu,
    Footer
  },
  data() {
    return {
      members : [
        { img:'https://www.cerise-et-potiron.fr/images/logo/LogoCerisePotiron.png', name:'Cerise & Potiron', referer_firstname:'Hugo', referer_lastname: 'Arias', mail:'ceriseetpotirons@cerises.com', phone:'+ 33 0 00 00 00 00' },
        { img:'https://www.bledina.com/app/themes/bledina/assets/images/v6/logo-bledina-dsk.svg', name:'Blédina', referer_firstname:'Florent', referer_lastname: 'Chapelier', mail:'bledina@bledina.com', phone:'+ 33 0 00 00 00 00' },
        { img:'https://www.groupeseb.com/themes/custom/periscope/logo.svg', name:'SEB', referer_firstname:'Loïc', referer_lastname: 'Rollat', mail:'seb@seb.com', phone:'+ 33 0 00 00 00 00' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/loco-capsa.jpg', name:'CAPSA', referer_firstname:'Michel', referer_lastname: 'Gonzague', mail:'container@capsa.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-ccld.jpg', name:'CCLD', referer_firstname:'Florent', referer_lastname: 'Masson', mail:'florent@ccld.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2017/03/Logotype-HD-2.jpg', name:'DIATEX', referer_firstname:'Loïc', referer_lastname: 'Petitjean', mail:'loic@diatex.com', phone:'+ 33 0 00 00 00 00' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2017/10/logo-easyskill.jpg', name:'Easy Skill', referer_firstname:'Hugo', referer_lastname: 'Benamou', mail:'benamou@easy-skill.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/ExperBuy.png', name:'ExperBuy', referer_firstname:'Florent', referer_lastname: 'Fernandez', mail:'fernandez@experbuy.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-inevo.jpg', name:'INEVO', referer_firstname:'Fanny', referer_lastname: 'Pallard', mail:'fanny@inevo.com', phone:'+ 33 0 00 00 00 00' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2018/01/LOGO_Le-Livre-Scolaire_FLAT_2016_300dpi_CMJN.jpg', name:'Lelivrescolaire.fr', referer_firstname:'Hugo', referer_lastname: 'Arias', mail:'hugo@lelivrescolaire.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-lumaps.jpg', name:'Lumapps', referer_firstname:'Florent', referer_lastname: 'Chapelier', mail:'lumapps@lumapps.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/11/Roamler.png', name:'Roamler', referer_firstname:'Carlos', referer_lastname: 'Tevez', mail:'roamler@roamler.com', phone:'+ 33 0 00 00 00 00' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/sesaly.png', name:'Sesaly', referer_firstname:'Romain', referer_lastname: 'Genot', mail:'sesaly@sesaly.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/Soladis-logo-2017_GROUP.jpg', name:'Soladis', referer_firstname:'Mark', referer_lastname: 'Zuckernberg', mail:'soladis@soladis.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2018/01/logo-sunaero-HD-COMPRESSE.jpg', name:'Sunaero', referer_firstname:'Brian', referer_lastname: 'Leduc', mail:'sunaero@sunaero.com', phone:'+ 33 0 00 00 00 00' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2017/10/logo-techteam.jpg', name:'Tech F1team', referer_firstname:'Thomas', referer_lastname: 'Walbert', mail:'techteam@techteam.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/tertradis.jpg', name:'Tertradis', referer_firstname:'Florient', referer_lastname: 'Boulet', mail:'tertradis@tertradis.com', phone:'+ 33 0 00 00 00 00' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2019/09/Vélogik-logo-2019-modifié.png', name:'Velogik', referer_firstname:'Dorah', referer_lastname: 'Talbi', mail:'velogik@velogik.com', phone:'+ 33 0 00 00 00 00' }
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
      },
      selected: 'Loge',
      optiones: [
        { value: 'Loge', text: 'Loge' },
        { value: 'Salon', text: 'Salon' },
        { value: 'Tribune', text: 'Tribune' }
      ],
      currentPage: 1,
      perPage: 8,
      search: null
    }
  },
  methods: {

  },
  computed: {
    list () {
      var self = this;
      var search = self.search

      var items = []

      if (search){
        items = this.members

        var items_display = items.filter(member => {
          return member.name.toLowerCase().includes(search.toLowerCase())
        })

        if(items.length > 0){
          return items_display.sort();
        } else {
          return false;
        }

      } else {
        items_display = this.members
      }


      // Return just page of items needed
      return items_display.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.members.length
    }
  }
}
</script>
