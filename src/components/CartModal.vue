<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        class="d-inline-block align-text-top mr-1"
        viewBox="0 0 902.86 902.86"
        role="img"
      >
        <path
          fill="#ffffff"
          d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
            M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
        />
        <path
          fill="#ffffff"
          d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
            c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
            c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
            C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
            c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
            M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
            S619.162,694.432,619.162,716.897z"
        />
      </svg>
      CART
    </button>
    <div
      class="dropdown-menu dropdown-menu-right shadow cart"
      aria-labelledby="dropdownMenuButton"
    >
      <CartItems
        v-for="item in getCart"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :img="item.img"
        :price="item.price"
        :qty="item.qty"
        :total="item.total"
      />

      <div class="cart-total-price">
        <p>
          <strong> Total: $ {{ cartTotal }} </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItems from "./CartItems.vue";
export default {
  components: { CartItems },
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
    cartTotal() {
      return this.$store.getters.getTotal;
    },
  },
};
</script>

<style scoped>
.cart {
  width: 420px;
  padding: 1rem;
}
</style>