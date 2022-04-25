
<template>
  <div class="product-list">
    <main>
      <div class="album py-5 bg-light">
        <div class="container">
          <div
            class="products-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
          >
            <SingleProduct
              v-for="item in getProducts"
              :key="item.id"
              :id="item.id"
              :name="item.name"
              :img="item.image_link"
              :price="item.price"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SingleProduct from "@/components/SingleProduct.vue";
export default {
  components: { SingleProduct },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
