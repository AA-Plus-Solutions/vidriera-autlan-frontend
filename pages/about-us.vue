<template>
  <v-container>
    <v-row v-scrollanimation>
      <v-col cols="12" lg="7">
        <h1>Mision</h1>
        <p>
          En Vidriera Autlan, estamos comprometidos con el cliente a brindarle
          un servicio de valor agregado y ofrecerle una amplia gama de productos
          de alta calidad y con ello superar sus expectativas. Esto está
          consolidado por nuestros valores.
        </p>
        <h1>Visión</h1>
        <p>
          Ser una empresa líder y de constante crecimiento en la venta de
          aluminio y vidrio, así como en la instalación, haciendo presencia en
          la región.
        </p>
        <h1>Valores</h1>
        <p>
          Servicio al cliente: Brindar a nuestros clientes servicios atención
          personalizada con disponibilidad y eficiencia, orientando y cubriendo
          satisfactoriamente sus necesidades.
        </p>
      </v-col>
      <v-col cols="12" lg="4" offset-lg="1">
        <nuxt-image src="/vidriera_autlan_foto.jpg" />
      </v-col>
    </v-row>

    <v-row v-scrollanimation>
      <v-col cols="12" sm="6" lg="3" v-for="value of values" :key="value.id">
        <v-row>
          <v-col cols="2">
            <v-icon large>mdi-checkbox-marked-circle</v-icon>
          </v-col>
          <v-col cols="10">
            <h1>{{ value.title }}</h1>
            <p>
              {{ value.content }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
h1 {
  padding-bottom: 20px;
}
p {
  padding-bottom: 20px;
}
v-icon {
  color: green;
}
.before-enter {
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.enter {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>
<script>
export default {
  data: () => {
    return {
      values: [
        {
          id: 0,
          title: "Calidad",
          content:
            "Superar las expectativas de nuestros clientes con el desarrollo de un excelente trabajo.",
        },
        {
          id: 1,
          title: "Honestidad",
          content:
            "Transmitir transparencia en el desarrollo integro de nuestro trabajo y logrando con ello confianza en nuestra empresa.",
        },
        {
          id: 2,
          title: "Compromiso",
          content:
            "Cumplir nuestra misión a través de la unión de nuestras capacidades y esfuerzo.",
        },
        {
          id: 3,
          title: "Respeto",
          content:
            "Fomentar un agradable clima de laboral con el mejor de los tratos hacia nuestros compañeros de trabajo, así como a nuestros clientes.",
        },
      ],
    };
  },
};
</script>