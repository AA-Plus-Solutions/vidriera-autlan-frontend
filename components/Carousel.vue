<template>
  <section id="welcome-carousel" style="position: relative">
    <v-carousel :interval="interval" @change="onSlideChange">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
        :src="item.src"
        eager
      >
        <v-overlay absolute>
          <v-row
            class="fill-height justify-center animated fadeInUp"
            align="center"
            justify="center"
          >
            <div class="display-3 mb-5" style="width: 100%; text-align: center">
              Puertas de aluminio y vidrio
            </div>
            <p style="width: 100%; text-align: center">
              Puertas y ventanas a la medida, consulta nuestro catálogo de
              productos…
            </p>
            <v-btn color="success" class="custom-btn mr-4" to="/catalog" nuxt>
              Ver catalogo<span class="arrow"></span>
            </v-btn>
          </v-row>
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
      interval: 3000,
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
  methods: {
    onSlideChange(slideNumber) {
      //   console.log(slideNumber);
    },
  },
};
</script>

<style>
.animated {
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

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
/* .fade-transition-enter,
.fade-transition-leave-to {
  opacity: 0.5 !important;
} */
/* .fade-transition-enter-active,
.fade-transition-leave-active {
  transition: 1s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
} */
/* .fade-transition-move {
  transition: transform 0.6s;
}
.fade-transition-enter,
.fade-transition-leave-to {
  opacity: 0 !important;
} */
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

.v-btn.custom-btn span.arrow {
  width: 30px;
}

.v-btn.custom-btn span.arrow::after {
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

.v-btn.custom-btn:hover span.arrow::after {
  -webkit-animation: animateNext 1s 1;
  animation: animateNext 1s 1;
}
</style>