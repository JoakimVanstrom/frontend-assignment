<template>
  <header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>My webshop.com</strong>
        </a>
        <CartModal />
      </div>
    </div>
  </header>
</template>

<script>
import CartModal from '../CartModal.vue';
export default {
  components: {
    CartModal
  }
}
</script>

<style>

</style>