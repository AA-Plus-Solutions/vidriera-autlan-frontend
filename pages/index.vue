<template>
  <div>
    <Carousel />

    <section id="bienvenidos" v-scrollanimation>
      <v-container>
        <v-row>
          <v-col>
            <h2>Bienvenido</h2>
            <p>
              Te invitamos a conocer los productos de excelente calidad que
              tenemos para ti. Nuestra experiencia y nuestro excelente servicio
              nos respaldan.
            </p>
            <p>
              En Vidriera Autlan, estamos comprometidos con el cliente a
              brindarle un servicio de valor agregado y ofrecerle una amplia
              gama de productos de alta calidad y con ello superar sus
              expectativas.
            </p>
            <v-btn color="success" class="mr-4" to="/about-us" nuxt>
              Leer mas
            </v-btn>
          </v-col>
          <v-col> <nuxt-image src="/vidriera_autlan_foto.jpg" /> </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="conocenos" :style="imageStyle">
      <div class="overlay"></div>

      <v-container v-scrollanimation>
        <v-row class="d-flex justify-center"
          ><h2>Conócenos sin salir de casa</h2></v-row
        >
        <v-row class="d-flex justify-center"
          ><p>
            De seguro tienes un proyecto en mente para renovar tu hogar, déjanos
            ayudarte e ingresa a nuestro amplio catálogo en donde verás todas
            las opciones que de seguro te conquistarán. Que tu imaginación no
            tenga límite con nuestros productos, ven y comienza a conocernos.
          </p></v-row
        >
        <v-row class="d-flex justify-center">
          <v-btn color="success" class="mr-4" to="/catalog" nuxt>
            Ver Catalogo
          </v-btn>
        </v-row>
      </v-container>
    </section>

    <v-container>
      <section id="dudas" v-scrollanimation>
        <v-row>
          <v-col cols="12" lg="8">
            <h2>Tienes una duda</h2>
            <p>
              ¿Alguna pregunta, quieres un presupuesto o agendar una cita?
              Déjanos tu mensaje y rápidamente nos pondremos en contacto
              contigo, para resolver tus dudas, por que queremos ser parte de tu
              proyecto.
            </p>
          </v-col>
          <v-col cols="12" lg="4" class="d-flex align-center justify-center">
            <v-btn color="success" class="mr-4" to="/contact" nuxt>
              Contactanos
            </v-btn>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
import panImg from "~/assets/pan1.jpg";
import Carousel from "../components/Carousel";
export default {
  components: {
    Carousel,
  },
  data: () => {
    return {
      image: panImg,
      imageStyle: {
        // background: `transparent url(${panImg}) no-repeat fixed center;`,
        background: `url(${panImg}) center center/cover no-repeat fixed transparent;`,
      },
    };
  },
  head() {
    //aqui esta la metainfo
    return {
      title: "Vidriera Autlan | Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Website about Vidriera",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    };
  },
};
</script>
<style scoped>
#dudas {
  padding: 80px 0px;
}
#bienvenidos {
  padding: 80px 0px;
}
#conocenos {
  padding: 80px 0px;
  width: 100%;
  height: auto;
  position: relative;
  color: white;
}
#conocenos h2,
#conocenos p {
  margin-bottom: 20px;
}
#conocenos p {
  width: 60%;
}
#conocenos .row {
  position: relative;
}
#conocenos .overlay {
  height: 100%;
  width: 100%;
  opacity: 1;
  z-index: 0;
  mix-blend-mode: darken;
  background: #00000065 0% 0% no-repeat padding-box;
  position: absolute;
  top: 0;
  left: 0;
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