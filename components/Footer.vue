<template>
  <div class="footer">
    <v-container>
      <v-row class="ma-0">
        <v-col cols="7" lg="6">
          <p class="title">Datos de contacto</p>

          <p>
            <v-icon color="white">mdi-map-marker</v-icon> Calz. Castellón 2031,
            Hidalgo, 21389 Hidalgo, B.C.
          </p>
          <p><v-icon color="white">mdi-phone</v-icon> 686 561-6416</p>
        </v-col>
        <v-col cols="5" lg="6">
          <h1>Mapa del sitio</h1>
          <ul>
            <li v-for="url of urls" :key="url.id">
              <nuxt-link :to="url.path">{{ url.name }}</nuxt-link>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      urls: [
        {
          path: "/",
          name: "Inicio",
        },
        {
          path: "/about-us",
          name: "Nosotros",
        },
        {
          path: "/catalog",
          name: "Catalogo",
        },
        {
          path: "/contact",
          name: "Contacto",
        },
      ],
    };
  },
};
</script>
<style scoped>
p.title {
  /* text-decoration: underline; */
  padding-bottom: 5px;
  border-bottom: 2px solid white;
  width: 30%;
}

ul {
  list-style: none;
  padding-left: 0 !important;
}
li a {
  text-decoration: none;
  /* color: rgb(32, 71, 122); */
  color: white;
}
li a:hover {
  /* text-decoration: none; */
  color: white;
  border-bottom: 1px solid white;
}
.footer {
  background-color: #2c3e50;
}
.footer {
  color: white;
}
@media (max-width: 576px) {
  p.title {
    width: 100%;
    font-size: 1rem !important;
    font-weight: bold;
  }
  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 1rem !important;
  }
}
</style>