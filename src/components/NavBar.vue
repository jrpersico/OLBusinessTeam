<template>
  <b-navbar type="light" class="mb-4">
    <b-navbar-brand href="#">
       <img src="../assets/olbt.png" height="45px" alt="OLBT" class="ml-3 mr-3">
       Espace <span class="gold">Abonné</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item href="#" class="ml-3 pt-2"><font-awesome-icon :icon="['far', 'bell']"/></b-nav-item>
          <b-nav-item href="#" class="ml-3 pt-2"><font-awesome-icon :icon="['fal', 'calendar-alt']"/></b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <b-img src="https://media.licdn.com/dms/image/C4D03AQEk423IZXAf1w/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=rdzfYl6aWTMTcbuJzl-uvy7uc7TeIcn8GsBqUSHAC-k" alt="Image 1" height="35px" class="ml-3 mr-3 menu-profile"></b-img>
          </template>
          <b-dropdown-item href="#">Profil</b-dropdown-item>
          <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
  .navbar-brand {
    text-transform: uppercase;
    font-weight: 400;
    color: #19356c !important;
    font-size: larger;
    .gold {
      color: #f2b64e;
      font-weight: 600;
    }
  }
  .menu-profile {
    box-shadow: 0 10px 30px 0 rgba(2, 13, 70, 0.1);
    border-radius: 0.25rem !important;
  }
</style>
