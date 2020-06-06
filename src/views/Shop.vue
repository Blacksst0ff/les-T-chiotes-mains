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
          <div
            v-for="pro in products"
            :key="pro.id"
            class="col-md-3 col-sm-6 col-xs-12"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
              >
                <v-img
                  class="white--text align-end"
                  :aspect-ratio="16/9"
                  height="200px"
                  :src="pro.src"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <v-btn
                        v-if="hover"
                        href="/product"
                        class=""
                        outlined
                      >
                        Voir
                      </v-btn>
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="text--primary">
                  <div>
                    <a
                      href="/product"
                      style="text-decoration: none;color: #2d3753;text-transform: uppercase;"
                    >{{ pro.name }}</a>
                  </div>
                  <div><strong>{{ pro.price }} €</strong></div>
                </v-card-text>
              </v-card>
            </v-hover>
          </div>
        </div>
      </div>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import Header from '@/components/front/Header.vue'
import Footer from '@/components/front/Footer.vue'
// import CartProduct from '@/components/shop/CartProduct.vue'

export default {
  name: "Shop",
  components: { Header, Footer },
  data: () => ({
    products: [
      {
        id: 1,
        name: 'Rangement de bureau',
        type: 'Rangement',
        price: '5.00',
        src: require('@/assets/images/products/1.jpg')
      },
      {
        id: 2,
        name: 'La maison des Schtroumfs',
        type: 'Déco',
        price: '6.50',
        src: require('@/assets/images/products/2.jpg')
      },
      {
        id: 3,
        name: 'Dans l\'intérieur d\'un livre',
        type: 'Déco',
        price: '5.50',
        src: require('@/assets/images/products/3.jpg')
      },
      {
        id: 4,
        name: 'Petite décoration florale',
        type: 'Déco',
        price: '10.00',
        src: require('@/assets/images/products/4.jpg')
      },
      {
        id: 5,
        name: 'Poupée',
        type: 'Déco',
        price: '5.50',
        src: require('@/assets/images/products/5.jpg')
      },
      {
        id: 6,
        name: 'La maison des Elphes',
        type: 'Déco',
        price: '6.00',
        src: require('@/assets/images/products/6.jpg')
      },
      {
        id: 7,
        name: 'Tableau peinture et papillons',
        type: 'Déco',
        price: '5.00',
        src: require('@/assets/images/products/7.jpg')
      },
      {
        id: 8,
        name: 'Tableau la cage aux oiseaux',
        type: 'Déco',
        price: '6.00',
        src: require('@/assets/images/products/8.jpg')
      }, {
        id: 9,
        name: 'Le carrousel des lutins',
        type: 'Déco',
        price: '7.00',
        src: require('@/assets/images/products/9.jpg')
      },
      {
        id: 10,
        name: 'Attrapes rêves',
        type: 'Déco',
        price: '5.00',
        src: require('@/assets/images/products/10.jpg')
      },
      {
        id: 11,
        name: 'Carte décoré',
        type: 'Déco',
        price: '5.00',
        src: require('@/assets/images/products/11.jpg')
      },
    ]
  }),
  computed: {
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
