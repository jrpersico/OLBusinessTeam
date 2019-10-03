<template>
  <b-container class="footer" fluid>
    <b-container>
      <b-row class="foot-row py-5 mx-5">
        <b-col cols="12" sm="4" class="foot pt-4 py-4">
          <h5 class="mb-2">Liens utiles</h5>
          <a href="#"><p class="mb-1">OLEntreprises.fr</p></a>
          <a href="#"><p class="mb-1">OL.fr</p></a>
          <a href="#"><p class="mb-1">Groupama-Stadium.fr</p></a>
        </b-col>
        <b-col cols="12" sm="4" class="foot pt-4 py-4">
          <h5 class="mb-2">Réseaux sociaux</h5>
          <a href="#"><p class="mb-1"><font-awesome-icon :icon="['fab', 'linkedin']" class="mr-3"/>Linkedin</p></a>
          <a href="#"><p class="mb-1"><font-awesome-icon :icon="['fab', 'facebook-square']" class="mr-3"/>Facebook</p></a>
          <a href="#"><p class="mb-1"><font-awesome-icon :icon="['fab', 'twitter-square']" class="mr-3"/>Twitter</p></a>
        </b-col>
        <b-col cols="12" sm="4" class="foot pt-4 py-4">
          <h5 class="mb-2">Vie privée</h5>
          <a href="#"><p class="mb-1">Charte des données personnelles</p></a>
          <a href="#"><p class="mb-1">Mentions légales</p></a>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
name: 'Footer',
components: {
},
data() {
  return {

  }
},
methods: {
}
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #19356c;
  background-image: url('../assets/art-museum.svg'), url('../assets/surveillance.svg');
  background-repeat: no-repeat, no-repeat;
  background-size: 14%, 16%;
  color: #fff;
  background-position: 4% 94%, 97% 79%;
  @media screen and (max-width: 576px) {
    background-image: url('../assets/surveillance.svg');
    background-repeat: no-repeat, no-repeat;
    background-size: 57%;
    background-position: 95% 62%;
  }
  @media (min-width: 576px) and (max-width: 1200px) {
    background-image: url('../assets/surveillance.svg');
    background-repeat: no-repeat;
    background-size: 16%;
    background-position: 97% 79%;
  }
  .foot-row {
    @media screen and (max-width: 576px) {
      margin: 0 !important;
    }
    h5 {
      font-weight: bold;
      text-transform: uppercase;
      font-size: medium;
    }
    a {
      color: #fff !important;
      text-decoration: none !important;
    }
  }
}
</style>
