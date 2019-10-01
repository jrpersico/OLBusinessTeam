<template>
  <div class="home">
    <NavBar></NavBar>
    <b-container>
      <Profile></Profile>
      <Menu></Menu>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Profile from '@/components/Profile'
import Menu from '@/components/Menu'

export default {
  name: 'home',
  components: {
    NavBar,
    Profile,
    Menu
  }
}
</script>
