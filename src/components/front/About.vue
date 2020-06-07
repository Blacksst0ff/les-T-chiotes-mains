<template>
  <section id="about-us">
    <div class="py-12" />

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">
        QUI SOMMES NOUS ?
      </h2>

      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Un groupe d'amies ayant trouvé pour passion les activités manuelles.
        Nous nous sommes toutes rencontrées au gré du temps par une association réunissant des personnes atteintes du cancer.
        Nous sommes aujourd'hui décidées à ne pas faire de cette maladie une fatalité ... bien au contraire.
        Ensemble, nous faisons cohabiter nos nombreuses expériences pour concevoir divers projets et créations manuelles nous permettant de nous épanouir et fournir à ceux qui le veulent, des créations originales faites entièrement à la main.
      </v-responsive>
      <v-row
        justify="center"
        align="center"
      >
        <v-col
          cols="auto"
          class="ma-4 pa-2"
        >
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img :src="require('@/assets/images/aboutus/about1.jpg')" />
          </v-avatar>
        </v-col>
        <v-col
          cols="auto"
          class="ma-4 pa-2"
        >
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img :src="require('@/assets/images/aboutus/about2.jpg')" />
          </v-avatar>
        </v-col>
        <v-col
          cols="auto"
          class="ma-4 pa-2"
        >
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img :src="require('@/assets/images/aboutus/about3.jpg')" />
          </v-avatar>
        </v-col>
      </v-row>
      <div />

      <v-btn
        color="grey"
        :to="{ name: 'shop'}"
        outlined
        large
      >
        <span class="grey--text text--darken-1 font-weight-bold">
          Découvrir les créations
        </span>
      </v-btn>
    </v-container>

    <div class="py-12" />
  </section>
</template>

<script>
export default {
}
</script>

<style>
</style>



