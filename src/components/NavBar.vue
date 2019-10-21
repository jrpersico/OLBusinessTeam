<template>
  <b-navbar type="light" class="mb-4">
    <b-navbar-brand href="#">
       <img src="../assets/olbt.png" height="45px" alt="OLBT" class="ml-3 mr-3">
       <span class="d-none d-sm-inline-block">Espace <span class="gold">Abonné</span></span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item class="ml-3"><font-awesome-icon :icon="['fad', 'bell']"/></b-nav-item>
          <b-nav-item to="/calendrier" class="ml-3"><font-awesome-icon :icon="['fad', 'calendar-alt']"/></b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <font-awesome-icon :icon="['fad', 'user-circle']" class="ml-3 mr-3"/>
          </template>
          <b-dropdown-item to="/compte">Profil</b-dropdown-item>
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
.navbar-collapse svg {
  color: #19356c !important;
}
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
</style>
