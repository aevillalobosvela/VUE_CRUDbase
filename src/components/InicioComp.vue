<template>
  <div>
    <h2>Suma de dos números</h2>
    <input type="number" v-model.number="num1" placeholder="Ingrese el primer número">
    <input type="number" v-model.number="num2" placeholder="Ingrese el segundo número">
    <p>Resultado: {{ suma }}</p>
    <button class="btn btn-primary" type="button" @click="resta(num1)">Text</button>
    <p>Resultado: {{ res }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 4,
      num2: 0,
      val2: 4,
      res: 0
    };
  },
  methods: {
    resta(val) {
      this.res = val + this.val2;
      this.val2 = this.val2 + 1;
    }
  },
  computed: {
    suma() {
      return this.num1 + this.num2;
    }
  }
};
</script>

<style scoped></style>
