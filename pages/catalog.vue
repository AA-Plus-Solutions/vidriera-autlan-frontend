

<template>
  <v-container>
    <h1>catalogo</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="item of catalogue"
        :key="item.id"
      >
        <nuxt-image :src="item.img" />
        <p>{{ item.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      catalogue: [
        {
          id: 0,
          img: "/vidriera_autlan_foto.jpg",
          description: "Ventanas de aluminio",
        },
        {
          id: 1,
          img: "/vidriera_autlan_foto.jpg",
          description: "Puertas de aluminio",
        },
        {
          id: 2,
          img: "/vidriera_autlan_foto.jpg",
          description: "Vidrio para ventanas",
        },
        {
          id: 3,
          img: "/vidriera_autlan_foto.jpg",
          description: "Vidrio para puertas",
        },
        {
          id: 4,
          img: "/vidriera_autlan_foto.jpg",
          description: "Puertas de bano con vidrio templado",
        },
      ],
    };
  },
};
</script>

<style scoped>
p {
  color: rgb(32, 71, 122);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
</style>