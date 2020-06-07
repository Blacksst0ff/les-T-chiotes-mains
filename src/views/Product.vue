<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <div class="row">
          <div class="col-md-5 col-sm-5 col-xs-12">
            <v-carousel
              v-if="product.src.length > 1"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="src in product.src"
                :key="src"
                :src="src"
              />
            </v-carousel>
            <v-carousel
              v-else
              :show-arrows="false"
              :hide-delimiters="true"
            >
              <v-carousel-item :src="product.src[0]" />
            </v-carousel>
          </div>
          <div class="col-md-7 col-sm-7 col-xs-12">
            <v-breadcrumbs
              class="pb-0"
              :items="breadcrums"
            />
            <div class="pl-6">
              <p class="display-1 mb-0">
                {{ product.name }}
              </p>
              <v-card-actions class="pa-0">
                <p
                  v-if="product.sold"
                  class="headline font-weight-light pt-3"
                >
                  {{ product.price_sold }} €
                  <del class="subtitle-1 font-weight-thin">
                    {{ product.price }} €
                  </del>
                </p>
                <p
                  v-else
                  class="headline font-weight-light pt-3"
                >
                  {{ product.price }} €
                </p>
                <v-spacer />
                <v-rating
                  v-model="rating"
                  class=""
                  background-color="warning lighten-3"
                  color="warning"
                  dense
                />
                <span class="body-2	font-weight-thin"> {{ item }} AVIS</span>
              </v-card-actions>
              <p class="subtitle-1 font-weight-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.
              </p>
              <div v-if="product.color.length">
                <p class="title">
                  COULEUR
                </p>
                <v-radio-group
                  v-model="params.color"
                  row
                >
                  <v-radio
                    v-for="color in product.color"
                    :key="color.value"
                    off-icon="mdi-radiobox-blank"
                    :label="color.label"
                    :color="color.value"
                    :value="color.value"
                  />
                </v-radio-group>
              </div>
              <p class="title">
                QUANTITE
              </p>

              <v-text-field
                outlined
                style="width:100px"
                :value="1"
                dense
              />
              <v-btn
                class="primary white--text"
                outlined
                tile
                dense
              >
                <v-icon>mdi-cart</v-icon> AJOUTER AU PANIER
              </v-btn>
              <v-btn
                :class="[$vuetify.breakpoint.smAndDown ? 'mt-4' : 'ml-4']"
                outlined
                tile
                dense
              >
                <v-icon>mdi-star</v-icon>
                AJOUTER A MES FAVORIS
              </v-btn>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-xs-12 col-md-12">
            <v-tabs>
              <v-tab>Description</v-tab>
              <v-tab>MATERIAUX</v-tab>
              <v-tab>AVIS</v-tab>
              <v-tab-item>
                <p class="pt-10 subtitle-1 font-weight-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                  massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                  scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                  Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                  commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
                </p>
              </v-tab-item>
              <v-tab-item>
                <p class="pt-10 subtitle-1 font-weight-thin">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ultricies mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae turpis
                  massa. Orci dapibus ultrices in iaculis nunc. At auctor urna nunc id cursus metus. Integer feugiat
                  scelerisque varius morbi enim nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
                  Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Malesuada nunc vel risus
                  commodo viverra maecenas. Neque volutpat ac tincidunt vitae semper quis.
                </p>
              </v-tab-item>
              <v-tab-item>
                <v-list
                  three-line
                  avatar="true"
                >
                  <v-list-item-group
                    v-model="item"
                    color="primary"
                  >
                    <v-list-item
                      v-for="(item, i) in items"
                      :key="i"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="item.title" />
                        <v-rating
                          v-model="rating"
                          class=""
                          background-color="warning lighten-3"
                          color="warning"
                          dense
                        />
                        <v-list-item-subtitle v-html="item.subtitle" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-tab-item>
            </v-tabs>
          </div>
        </div>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/front/Header.vue'
import Footer from '@/components/front/Footer.vue'

export default {
  name: "ShopProduct",
  components: { Header, Footer },
  data: () => ({
    product: {},
    params: {
      color: ""
    },
    breadcrums: "",
    rating: 4.5,
    item: 5,
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Lorem ipsum dolor?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Lorem ipsum dolor <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: ""
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Lorem ipsum dolor',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
    ],
  }),
  computed: {
    ...mapGetters(['getProduct']),
  },
  created () {
    this.product = this.$store.getters.getProduct(this.$route.params.id)
    this.breadcrums = [
      {
        text: "Les T'chiotes mains",
        disabled: false,
        href: '/',
      },
      {
        text: "Boutique",
        disabled: false,
        href: '/boutique',
      },
      {
        text: this.product.name,
        disabled: true,
        href: 'produit/' + this.product.id,
      },
    ]
  },
}
</script>

<style>
</style>
