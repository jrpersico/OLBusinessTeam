<template>
  <div class="home">
    <NavBar></NavBar>
    <b-container>
      <Profile></Profile>
    </b-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Profile from '@/components/Profile'

export default {
  name: 'home',
  components: {
    NavBar,
    Profile
  }
}
</script>
