<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <p class="display-3 font-weight-light	text-center pa-4">
          MON PANIER
        </p>
        <v-row>
          <v-col
            :cols="12"
            md="9"
            sm="12"
          >
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">
                      PRODUIT
                    </th>
                    <th class="text-center">
                      PRIX
                    </th>
                    <th class="text-center">
                      QUANTITE
                    </th>
                    <th class="text-center">
                      TOTAL
                    </th>
                    <th class="text-center" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-list-item key="1">
                        <v-list-item-avatar>
                          <v-img :src="require('../assets/images/products/1.jpg')" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Item 1</v-list-item-title>
                          <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <td>$40.00</td>
                    <td>
                      <v-text-field
                        class="pt-10"
                        label="Outlined"
                        style="width: 80px;"
                        single-line
                        outlined
                        value="2"
                        type="number"
                      />
                    </td>
                    <td>$80.00</td>
                    <td><a>X</a></td>
                  </tr>
                  <tr>
                    <td>
                      <v-list-item key="1">
                        <v-list-item-avatar>
                          <v-img :src="require('../assets/images/products/2.jpg')" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Item 2</v-list-item-title>
                          <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </td>
                    <td>$40.00</td>
                    <td>
                      <v-text-field
                        class="pt-10"
                        label="Outlined"
                        style="width: 80px;"
                        single-line
                        outlined
                        value="2"
                        type="number"
                      />
                    </td>
                    <td>$80.00</td>
                    <td><a>X</a></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col
            :cols="12"
            md="3"
            sm="12"
            style="background-color: lightgray"
          >
            <p class="headline">
              Résumé de la commande
            </p>
            <p class="overline">
              LES FRAIS D'EXPÉDITION ET LES FRAIS SUPPLÉMENTAIRES SONT CALCULÉS EN FONCTION DES VALEURS QUE VOUS AVEZ INSCRITES.
            </p>
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>Commande sous-total</td>
                    <td
                      class="text-right"
                      style="width: 50px;"
                    >
                      160.00€
                    </td>
                  </tr>
                  <tr>
                    <td>Livraison</td>
                    <td
                      class="text-right"
                      style="width: 50px;"
                    >
                      10.00€
                    </td>
                  </tr>
                  <tr>
                    <td>TVA</td>
                    <td
                      class="text-right"
                      style="width: 50px;"
                    >
                      5.00€
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td
                      class="text-right"
                      style="width: 50px;"
                    >
                      <b>175.00€</b>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-btn
                class="secondary white--text mt-5"
                outlined
                block
                :to="{ name: 'shop' }"
              >
                Continuer mes Achats
              </v-btn>
              <v-btn
                class="primary white--text mt-1"
                outlined
                block
                large
              >
                Acheter
              </v-btn>
            </div>
          </v-col>
        </v-row>
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
  name: "ShopCart",
  components: { Header, Footer },
  data: () => ({
  }),
  computed: {
    ...mapGetters(['getCart']),
  },
  created () {
    window.scrollTo(0, 0);
  },
}
</script>

<style>
</style>
