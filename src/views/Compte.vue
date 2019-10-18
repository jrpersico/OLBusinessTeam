<template>
  <div class="compte">
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
          <b-col cols="12" sm="12" md="7" lg="7">
            <div class="card-content-page optin-card">
              <h5 class="mb-3">Mes informations</h5>
              <b-form>
                <b-row>
                  <b-col cols="6">
                    <b-form-group label="Entreprise :" label-for="company">
                      <b-form-input id="company" v-model="form.company" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Secteur d'activité :" label-for="sector">
                      <b-form-select id="sector" v-model="form.sector" :options="sectors" required></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Nom :" label-for="name">
                      <b-form-input id="name" v-model="form.name" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Prénom :" label-for="firstname">
                      <b-form-input id="firstname" v-model="form.firstname" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Adresse :" label-for="address">
                      <b-form-input id="address" v-model="form.address" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Code postal :" label-for="zip">
                      <b-form-input id="zip" v-model="form.zip" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Ville :" label-for="city">
                      <b-form-input id="city" v-model="form.city" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Pays :" label-for="country">
                      <b-form-input id="country" v-model="form.country" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Email :" label-for="email">
                      <b-form-input id="email" v-model="form.email" type="email" required></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="6">
                    <b-form-group label="Téléphone :" label-for="phone">
                      <b-form-input id="phone" v-model="form.phone" type="text" required></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-button type="submit" variant="primary">Mettre à jour</b-button>
              </b-form>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="5" lg="5">
            <div class="card-content-page optin-card">
              <h5>Changer mon mot de passe</h5>
              <b-form>
                <b-form-group label="Téléphone :" label-for="phone">
                  <b-form-input id="phone" v-model="form.phone" type="text" required></b-form-input>
                </b-form-group>
                <b-form-group label="Téléphone :" label-for="phone">
                  <b-form-input id="phone" v-model="form.phone" type="text" required></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Mettre à jour</b-button>
              </b-form>
            </div>
            <div class="card-content-page optin-card">
              <h5>Mes alertes</h5>
              <b-form>
                <b-form-checkbox id="checkbox-offre" v-model="offre" name="checkbox-offre">
                  Les offres commerciales de l'Olympique Lyonnais
                </b-form-checkbox>
                <b-form-checkbox id="checkbox-partners" v-model="partners" name="checkbox-partners">
                  Les offres partenaires de l'Olympique Lyonnais
                </b-form-checkbox>

                <b-button type="submit" variant="primary">Mettre à jour</b-button>
              </b-form>
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

export default {
  name: 'compte',
  components: {
    NavBar,
    Profile,
    Menu,
    Footer
  },
  data() {
    return {
      form: {
        company: 'Olympique Lyonnais',
        email: 'harias@ol.fr',
        sector: 'Sport',
        name: 'Arias',
        firstname: 'Hugo',
        address: '10 Avenue Simone Veil',
        zip: '69004',
        city: 'Lyon',
        country: 'France',
        phone: '0688778977',
        offre: true,
        partners: true
      },
      sectors: [{ text: 'Selectionner', value: null }, 'Sport', 'Association', 'Assurance']
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>
