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
      :src="require('@/assets/logo_t.png')"
      style="cursor: pointer;"
      @click="goHome()"
    />
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
