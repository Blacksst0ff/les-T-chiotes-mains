<template>
  <v-app-bar
    app
    color="white"
    dense
  >
    <v-img
      link
      contain
      max-height="70%"
      width="200"
      :src="require('@/assets/logo_t.png')"
      style="cursor: pointer;"
      @click="goHome()"
    />

    <v-menu
      v-if="$vuetify.breakpoint.xsOnly"
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list v-if="this.$route.name == 'home'">
        <v-list-item :to="{ name: 'shop' }">
          <v-list-item-title>Boutique</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'login' }">
          <v-list-item-title>Connexion</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item :to="{ name: 'cart' }">
          <v-list-item-title>Panier</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ name: 'login' }">
          <v-list-item-title>Connexion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div v-else>
      <v-btn
        v-if="this.$route.name == 'home'"
        :to="{ name: 'shop' }"
        icon
        exact
      >
        <v-icon size="19">
          mdi-shopping
        </v-icon>
      </v-btn>
      <v-btn
        v-else
        :to="{ name: 'cart' }"
        icon
        exact
      >
        <v-icon size="19">
          mdi-cart
        </v-icon>
      </v-btn>
      <v-btn
        :to="{ name: 'login' }"
        icon
        exact
      >
        <v-icon size="19">
          mdi-account
        </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goHome () {
      if (this.$route.name != 'home') {
        return this.$router.push({ name: 'home' });
      }
    }
  }
}
</script>

<style>
</style>
