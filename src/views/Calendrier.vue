<template>
  <div class="calendrier">
    <NavBar></NavBar>
    <b-container class="profile-container">
      <Profile></Profile>
    </b-container>
    <b-container class="menu-container">
      <Menu></Menu>
    </b-container>
    <b-container class="content-page" fluid>
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="card-content-page calendar">
              <vue-cal style="height: 600px" default-view="month" today-button :events="events" :time-from="8 * 60" :time-to="23 * 60" :time-step="60"></vue-cal>
            </div>
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
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  name: 'calendrier',
  components: {
    NavBar,
    Profile,
    Menu,
    Footer,
    VueCal
  },
  data() {
    return {
      events: [
        {
          start: '2019-10-21 10:30',
          end: '2019-10-21 11:30',
          title: 'Need to go shopping',
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: 'leisure'
        },
        {
          start: '2019-10-21 09:30',
          end: '2019-10-21 10:30',
          title: 'Golf with John',
          content: '<i class="v-icon material-icons">golf_course</i>',
          class: 'sport'
        },
        {
          start: '2019-10-22 10:30',
          end: '2019-10-22 11:30',
          title: 'Dad\'s birthday!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
