<template>
  <div class="items-in-cart">
    <div class="image-and-name">
      <img :src="`${img}`" width="69" />
      <h3 class="title">{{ name }}</h3>
    </div>

    <div class="qty">
      <section>
        <button
          @click="decrement()"
          type="button"
          class="btn btn-primary btn-sm"
        >
          -
        </button>
        <span> {{ qty }} </span>
        <button
          @click="increment()"
          type="button"
          class="btn btn-primary btn-sm"
        >
          +
        </button>
      </section>
      <p class="price">${{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "img", "name", "price", "qty", "total"],
  methods: {
    decrement() {
      this.$store.dispatch("decrementProduct", this.id);
    },
    increment() {
      this.$store.dispatch("incrementProduct", this.id);
    },
  },
};
</script>

<style scoped>
section {
  transform: translateX(3.3rem);
}
.qty {
  display: flex;
  justify-content: space-evenly;
  transform: translateY(-1.8rem);
  margin-left: 12px;
}
.image-and-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  margin-right: 1.4rem;
}
.title {
  margin-right: 12px;
  transform: translateY(-0.5rem);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
button {
  font-size: 16px;
  background-color: rgba(201, 201, 201, 0.164);
  color: rgb(29, 28, 28);
  border: none;
}
.price {
  font-size: 18px;
}
p {
  padding-left: 10rem;
  font-size: 14px;
  font-weight: bold;
}
</style>