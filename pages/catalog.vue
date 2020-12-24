

<template>
  <v-container class="text-center">
    <h1 class="mb-5">Catalogo</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="item of catalogue"
        :key="item.id"
      >
        <nuxt-image
          :src="item.img"
          :lazy="true"
          placeholder="https://via.placeholder.com/150/6A6C6E/?Text="
        />
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
          img: "/barandal_vidrio_templado.jpg",
          description: "Barandal en vidrio templado",
        },

        {
          id: 98,
          img: "/puerta_vidrio_doble.jpg",
          description: "Ventanas y puerta en vidrio doble y aluminio negro",
        },
        {
          id: 99,
          img: "/persianas_duo_line.jpg",
          description:
            "Ventanas y puerta en vidrio doble y aluminio blanco **Persianas DUO-LINE",
        },
        {
          id: 100,
          img: "/espejo_closet.jpg",
          description: "Puertas de espejo para closet con marco de aluminio",
        },
        {
          id: 101,
          img: "/puertas_abatibles.jpg",
          description: "Puertas abatibles en aluminio negro y vidrio doble",
        },
        {
          id: 2,
          img: "/canceleria_locales.jpg",
          description:
            "Canceleria y vidrio con filmina de seguridad , puertas doble abatimiento con vidrio templado.",
        },
        {
          id: 3,
          img: "/persianas_casa.jpg",
          description: "Persianas Casa",
        },
        {
          id: 4,
          img: "/puerta_vidrio_templado.jpg",
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

@media (max-width: 576px) {
  .container {
    text-align: center;
  }
}
</style>