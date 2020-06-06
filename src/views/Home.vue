<template>
  <v-app>
    <Header />
    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="require('@/assets/images/home1.jpg')"
          >
            <v-theme-provider light>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="black--text mx-auto pb-3"
                  justify="center"
                  style="background-color:rgba(236,239,241,0.5)"
                >
                  <v-col
                    class="black--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      Bienvenue chez
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      les T'chiotes mains
                    </span>
                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-us')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>
      <AboutUs />
      <Stats />
      <Contact />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Header from '@/components/front/Header.vue'
import Footer from '@/components/front/Footer.vue'
import AboutUs from '@/components/front/About.vue'
import Stats from '@/components/front/Stats.vue'
import Contact from '@/components/front/Contact.vue'

export default {
  name: "FrontHome",
  components: { Header, Footer, AboutUs, Stats, Contact },
  computed: {
  },
}
</script>

<style lang="css"></style>
