<template>
  <div class="col-md-3 col-sm-6 col-xs-12">
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
          :src="product.src[0]"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              <v-btn
                v-if="hover"
                :to="{ name: 'product', params: { id: product.id } }"
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
              :to="{ name: 'product', params: { id: product.id } }"
              style="text-decoration: none;color: #2d3753;text-transform: uppercase;"
            >{{ product.name }}</a>
          </div>
          <div><strong>{{ product.price }} €</strong></div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>
</style>


