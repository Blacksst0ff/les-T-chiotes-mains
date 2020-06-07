<template>
  <v-app>
    <Header />
    <v-content>
      <div class="col-md-12 col-sm-12 col-xs-12 px-10">
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
          Boutique
        </h2>

        <v-divider />

        <div class="row text-center">
          <CardProduct
            v-for="pro in catalogue.products"
            :key="pro.id"
            :product="pro"
          />
        </div>
      </div>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/front/Header.vue'
import Footer from '@/components/front/Footer.vue'
import CardProduct from '@/components/shop/CardProduct.vue'

export default {
  name: "Shop",
  components: { Header, Footer, CardProduct },
  computed: {
    ...mapState(['catalogue']),
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
