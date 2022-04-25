<template>
  <div class="product-container col mb-4">
    <div class="card shadow-sm h-100">
      <img :src="`${img}`" class="mx-5 mx-sm-3 px-5 px-sm-0 img-fluid" />

      <div class="card-body d-flex flex-column">
        <h6 class="card-text mb-3">{{ name }}</h6>
        <div class="d-flex mt-auto justify-content-between align-items-center">
          <button
            @click="addToCart"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Buy
          </button>
          <p class="m-0">${{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "price", "img", "qty"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProduct", {
        id: this.id,
        name: this.name,
        img: this.img,
        price: this.price,
        qty: 1,
        total: 0,
      });
    },
  },
};
</script>