<template>
  <div>
    <Carousel />

    <Welcome />
    <component is="style">
      .magic{ background: url({{ image }}) center center/cover no-repeat fixed
      transparent; }
    </component>
    <section id="conocenos" class="magic">
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
          <v-btn color="success" class="custom-btn mr-4" to="/catalog" nuxt>
            Ver Catalogo<span></span>
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
            <v-btn color="success" class="custom-btn mr-4" to="/contact" nuxt>
              Contactanos<span></span>
            </v-btn>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script>
import panImg from "~/static/pan1.jpg";
import Carousel from "../components/Carousel";
import Welcome from "../components/Welcome";

export default {
  components: {
    Carousel,
    Welcome,
  },
  computed: {
    getImageStyle() {
      return {
        background: `url(${panImg}) center center/cover no-repeat fixed transparent;`,
      };
    },
  },
  data: () => {
    return {
      image: panImg,
      imageStyle: {
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
@media (max-width: 576px) {
  #conocenos {
    text-align: center;
    padding: 60px 0;
  }
  #conocenos .container {
    /* padding: 0; */
  }
  #conocenos .row {
    margin: 0;
  }
  #conocenos p {
    width: 100%;
  }
  #dudas {
    text-align: center;
    padding: 40px 0;
  }
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

.v-btn.custom-btn {
  background-color: rgb(32, 71, 122) !important;
}

/* **********animations********** */
@-webkit-keyframes animateNext {
  25% {
    right: -1.2em;
  }
  50% {
    right: -0.7em;
  }
  75% {
    right: -1em;
  }
  100% {
    right: -0.7em;
  }
}

@keyframes animateNext {
  25% {
    right: -1.2em;
  }
  50% {
    right: -0.7em;
  }
  75% {
    right: -1em;
  }
  100% {
    right: -0.7em;
  }
}

.v-btn span {
  width: 30px;
}

.v-btn span::after {
  content: "";
  width: 1.2em;
  height: 0.7em;
  display: inline-block;
  background-size: 1.15em;
  background-position: right;
  position: relative;
  background-repeat: no-repeat;
  top: 1px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3e%3cg fill='none' fill-rule='evenodd' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3e%3cpath d='M1.7797 8.0199h20.9252l-6.2016 6.2016'/%3e%3cpath d='M16.806 1.308l5.8236 6.5842-2.9118 3.0499'/%3e%3c/g%3e%3c/svg%3e");
  right: -0.7em;
}

.v-btn:hover span::after {
  -webkit-animation: animateNext 1s 1;
  animation: animateNext 1s 1;
}
</style>