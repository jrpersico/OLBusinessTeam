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
          <b-col cols="12" sm="12" md="12" lg="6">
            <b-input-group>
              <b-input-group-prepend is-text><font-awesome-icon :icon="['fad', 'search']"/></b-input-group-prepend>
              <b-form-input type="text" placeholder="Rechercher" v-model="search"></b-form-input>
            </b-input-group>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3">
            <b-form-select v-model="selected_espace" :options="options_espaces"></b-form-select>
          </b-col>
          <b-col cols="12" sm="6" md="6" lg="3">
            <b-form-select v-model="selected_sector" :options="options_sectors"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="12" sm="12" md="12" lg="6" v-for="(member, index) in list" :key="index">
            <div class="card-content-page member-card">
                <b-row align-v="center">
                  <b-col cols="12" sm="3" class="text-center">
                    <img class="img-members" :src="member.img" alt="">
                  </b-col>
                  <b-col cols="12" sm="9">
                    <h5 class="mb-1">{{member.referer_firstname}} {{member.referer_lastname}}</h5>
                    <h5 class="mb-3 business"> <v-clamp autoresize :max-lines="1" ellipsis="...">{{member.profession}} chez {{member.name}} ({{member.sector}})</v-clamp></h5>
                    <p class="mb-1"><font-awesome-icon :icon="['fad', 'mail-bulk']" class="mr-3"/> {{member.mail}}</p>
                    <p class="mb-1"><font-awesome-icon :icon="['fad', 'mobile']" class="mr-3"/> {{member.phone}}</p>
                    <p class="mb-0 blue"><font-awesome-icon :icon="['fad', 'loveseat']" class="mr-3"/> <b>{{member.espace}}</b></p>
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
            <b-pagination v-if="totalRows > 8" :total-rows="totalRows" v-model="currentPage" :per-page="perPage" align="right"/>
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
import VClamp from 'vue-clamp'

export default {
  name: 'annuaire',
  components: {
    NavBar,
    Profile,
    Menu,
    Footer,
    VClamp
  },
  data() {
    return {
      members : [
        { img:'https://www.cerise-et-potiron.fr/images/logo/LogoCerisePotiron.png', name:'Cerise & Potiron', referer_firstname:'Hugo', referer_lastname: 'Arias', mail:'ceriseetpotirons@cerises.com', phone:'+ 33 0 00 00 00 00', sector:'Commerce', espace:'Cercle OL', profession:'PDG' },
        { img:'https://www.bledina.com/app/themes/bledina/assets/images/v6/logo-bledina-dsk.svg', name:'Blédina', referer_firstname:'Florent', referer_lastname: 'Chapelier', mail:'bledina@bledina.com', phone:'+ 33 0 00 00 00 00', sector:'Santé humaine et action sociale', espace:'President Box', profession:'Stagiaire' },
        { img:'https://www.groupeseb.com/themes/custom/periscope/logo.svg', name:'SEB', referer_firstname:'Loïc', referer_lastname: 'Rollat', mail:'seb@seb.com', phone:'+ 33 0 00 00 00 00', sector:'Industries extractives', espace:'Cercle OL', profession:'PDG' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/loco-capsa.jpg', name:'CAPSA', referer_firstname:'Michel', referer_lastname: 'Gonzague', mail:'container@capsa.com', phone:'+ 33 0 00 00 00 00', sector:'Hébergement et restauration', espace:'Club des Cents', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-ccld.jpg', name:'CCLD', referer_firstname:'Florent', referer_lastname: 'Masson', mail:'florent@ccld.com', phone:'+ 33 0 00 00 00 00', sector:'Autres activités de services', espace:'Tribune Officielle', profession:'PDG' },
        { img:'https://www.diatex.com/wp-content/themes/diatex_2018/assets/img/common/logo/logo.png', name:'DIATEX', referer_firstname:'Loïc', referer_lastname: 'Petitjean', mail:'loic@diatex.com', phone:'+ 33 0 00 00 00 00', sector:'Administration publique', espace:'Cercle OL', profession:'PDG' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2017/10/logo-easyskill.jpg', name:'Easy Skill', referer_firstname:'Hugo', referer_lastname: 'Benamou', mail:'benamou@easy-skill.com', phone:'+ 33 0 00 00 00 00', sector:'Agriculture, sylviculture et pêche', espace:'Tribune Est', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/ExperBuy.png', name:'ExperBuy', referer_firstname:'Florent', referer_lastname: 'Fernandez', mail:'fernandez@experbuy.com', phone:'+ 33 0 00 00 00 00', sector:'Automobile', espace:'Cercle OL', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-inevo.jpg', name:'INEVO', referer_firstname:'Fanny', referer_lastname: 'Pallard', mail:'fanny@inevo.com', phone:'+ 33 0 00 00 00 00', sector:'Emploi et recrutement', espace:'Salon des Lumières', profession:'PDG' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2018/01/LOGO_Le-Livre-Scolaire_FLAT_2016_300dpi_CMJN.jpg', name:'Lelivrescolaire.fr', referer_firstname:'Hugo', referer_lastname: 'Arias', mail:'hugo@lelivrescolaire.com', phone:'+ 33 0 00 00 00 00', sector:'Imprimerie et routage', espace:'Cercle OL', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/logo-lumaps.jpg', name:'Lumapps', referer_firstname:'Florent', referer_lastname: 'Chapelier', mail:'lumapps@lumapps.com', phone:'+ 33 0 00 00 00 00', sector:'Information et communication', espace:'Tribune Officielle', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/11/Roamler.png', name:'Roamler', referer_firstname:'Carlos', referer_lastname: 'Tevez', mail:'roamler@roamler.com', phone:'+ 33 0 00 00 00 00', sector:'Transports et entreposage', espace:'Tribune Est', profession:'PDG' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/sesaly.png', name:'Sesaly', referer_firstname:'Romain', referer_lastname: 'Genot', mail:'sesaly@sesaly.com', phone:'+ 33 0 00 00 00 00', sector:'Construction', espace:'Club des Cents', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/Soladis-logo-2017_GROUP.jpg', name:'Soladis', referer_firstname:'Mark', referer_lastname: 'Zuckernberg', mail:'soladis@soladis.com', phone:'+ 33 0 00 00 00 00', sector:'Autres activités de services', espace:'eLounge', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2018/01/logo-sunaero-HD-COMPRESSE.jpg', name:'Sunaero', referer_firstname:'Brian', referer_lastname: 'Leduc', mail:'sunaero@sunaero.com', phone:'+ 33 0 00 00 00 00', sector:'Santé humaine et action sociale', espace:'H Experience', profession:'PDG' },

        { img:'http://www.programme-pepites.fr/wp-content/uploads/2017/10/logo-techteam.jpg', name:'Tech F1team', referer_firstname:'Thomas', referer_lastname: 'Walbert', mail:'techteam@techteam.com', phone:'+ 33 0 00 00 00 00', sector:'Arts, spectacles et activités récréatives', espace:'H Experience', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2016/09/tertradis.jpg', name:'Tertradis', referer_firstname:'Florient', referer_lastname: 'Boulet', mail:'tertradis@tertradis.com', phone:'+ 33 0 00 00 00 00', sector:'Activités immobilières', espace:'Cercle OL', profession:'PDG' },
        { img:'http://www.programme-pepites.fr/wp-content/uploads/2019/09/Vélogik-logo-2019-modifié.png', name:'Velogik', referer_firstname:'Dorah', referer_lastname: 'Talbi', mail:'velogik@velogik.com', phone:'+ 33 0 00 00 00 00', sector:'Activités financières et d\'assurance', espace:'Salon des Lumières', profession:'PDG' }
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
      selected_espace: '',
      options_espaces: [
        { value: '', text: 'Tous les espaces' },
        { value: 'Cercle OL', text: 'Cercle OL' },
        { value: 'Club des Cents', text: 'Club des Cents' },
        { value: 'eLounge', text: 'eLounge' },
        { value: 'H Experience', text: 'H Experience' },
        { value: 'Loge', text: 'Loge' },
        { value: 'President Box', text: 'President Box' },
        { value: 'Salon des Lumières', text: 'Salon des Lumières' },
        { value: 'Tribune Est', text: 'Tribune Est' },
        { value: 'Tribune Officielle', text: 'Tribune Officielle' }
      ],
      selected_sector: '',
      options_sectors: [
        {"text": "Tous les secteurs","value": ""},
        {"text": "Activités de services administratifs et de soutien","value": "Activités de services administratifs et de soutien"},
        {"text": "Activités financières et d'assurance","value": "Activités financières et d'assurance"},
        {"text": "Activités immobilières","value": "Activités immobilières"},
        {"text": "Activités juridiques et comptables","value": "Activités juridiques et comptables"},
        {"text": "Activités spécialisées, scientifiques et techniques","value": "Activités spécialisées, scientifiques et techniques"},
        {"text": "Administration publique","value": "Administration publique"},
        {"text": "Agriculture, sylviculture et pêche","value": "Agriculture, sylviculture et pêche"},
        {"text": "Arts, spectacles et activités récréatives","value": "Arts, spectacles et activités récréatives"},
        {"text": "Automobile","value": "Automobile"},
        {"text": "AUTRE","value": "AUTRE"},
        {"text": "Autres activités de services","value": "Autres activités de services"},
        {"text": "Commerce","value": "Commerce"},
        {"text": "Commerces et Réparation automobiles","value": "Commerces et Réparation automobiles"},
        {"text": "Construction","value": "Construction"},
        {"text": "Emploi et recrutement","value": "Emploi et recrutement"},
        {"text": "Enseignement","value": "Enseignement"},
        {"text": "Hébergement et restauration","value": "Hébergement et restauration"},
        {"text": "Imprimerie et routage","value": "Imprimerie et routage"},
        {"text": "Industrie manufacturière","value": "Industrie manufacturière"},
        {"text": "Industries extractives","value": "Industries extractives"},
        {"text": "Information et communication","value": "Information et communication"},
        {"text": "Production et distribution d'eau assainissement, gestion des déchets et dépollution","value": "Production et distribution d'eau assainissement, gestion des déchets et dépollution"},
        {"text": "Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné", "value": "Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné"},
        {"text": "Réparation automobile", "value": "Réparation automobile"},
        {"text": "Santé humaine et action sociale", "value": "Santé humaine et action sociale"},
        {"text": "Transports et entreposage", "value": "Transports et entreposage"}
      ],
      currentPage: 1,
      perPage: 8,
      search: null,
      totalRows: 0
    }
  },
  methods: {

  },
  computed: {
    list () {
      var self = this;
      var search = self.search
      var selected_espace = self.selected_espace
      var selected_sector = self.selected_sector

      var items = []

      if (search){

        items = this.members

        var space = ' ';

        var items_display = items.filter(member => {

          var firstname = member.referer_firstname.toLowerCase();
          var lastname = member.referer_lastname.toLowerCase();
          var complete_name = firstname.concat(space, lastname);

          if (member.name.toLowerCase().includes(search.toLowerCase())){
              return member
          }
          if (complete_name.includes(search.toLowerCase())){
              return member
          }
        })

        var items_result = items_display.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        } else {

          items_display = this.members;

          items_result = items_display.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

        }


        if (items_result && selected_espace && !selected_sector) {

          var items_ordered = items_result.filter(member => {
            if (member.espace.toLowerCase().includes(selected_espace.toLowerCase())){
                return member
            }
          })

          self.totalRows = items_ordered.length
          return items_ordered.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage
          )

        } else if (items_result && selected_sector && !selected_espace){

          items_ordered = items_result.filter(member => {
            if (member.sector.toLowerCase().includes(selected_sector.toLowerCase())){
                return member
            }
          })

          self.totalRows = items_ordered.length
          return items_ordered.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage
          )

        } else if (items_result && selected_sector && selected_espace){

          items_ordered = items_result.filter(member => {
            if (member.sector.toLowerCase().includes(selected_sector.toLowerCase()) && member.espace.toLowerCase().includes(selected_espace.toLowerCase())){
                return member
            }
          })

          self.totalRows = items_ordered.length
          return items_ordered.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage
          )

        } else {
          self.totalRows = items_result.length
          return items_result.slice(
            (this.currentPage - 1) * this.perPage,
            this.currentPage * this.perPage
          )
        }


    }
  }
}
</script>
