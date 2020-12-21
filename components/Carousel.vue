<template>
  <section id="welcome-carousel" style="position: relative">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-overlay absolute>
          <transition name="fade" mode="out-in" appear>
            <v-row class="fill-height mb-5" align="center" justify="center">
              <div class="display-3">Puertas de aluminio y vidrio</div>
              <p>
                Puertas y ventanas a la medida, consulta nuestro catálogo de
                productos…
              </p>
            </v-row>
            <v-row class="justify-center">
              <v-btn color="success" class="mr-4" to="/catalog" nuxt>
                Ver catalogo
              </v-btn>
            </v-row>
          </transition>
        </v-overlay>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
import panImg2 from "static/pan1.jpg";
import panImg3 from "static/pan2.jpg";
import panImg4 from "static/pan3.jpg";

export default {
  data: () => {
    return {
      items: [
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        // },
        // {
        //   src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        // },
        { src: panImg2 },
        { src: panImg3 },
        { src: panImg4 },
      ],
    };
  },
};
</script>

<style>
</style>