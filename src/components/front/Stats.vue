<template>
  <section id="stats">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 600 : 400"
      :src="require('@/assets/images/stats2.jpg')"
    >
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col
            v-for="[value, title] of stats"
            :key="title"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              />

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data () {
    return {
      stats: [
        ['24k', 'Visiteurs'],
        ['5', 'Univers'],
        ['20', 'Créations'],
        ['100+', 'Commandes'],
      ],
    }
  }
}
</script>

<style>
</style>



