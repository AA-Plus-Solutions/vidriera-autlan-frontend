<template>
  <header class="header">
    <v-container>
      <!-- <h1 class="text-title">Vidriera App</h1> -->
      <!-- <nuxt-image src="/vidriera_autlan_foto.jpg" /> -->
      <!-- <img class="logo-img" src="/logo_vidriera_autlan.jpg" /> -->
      <div class="d-flex justify-space-between">
        <div class="logo-container">
          <nuxt-link tag="img" src="/logo_vidriera_autlan2.jpeg" to="/">
          </nuxt-link>
        </div>

        <span @click="openNav()" class="d-sm-none">
          <v-icon color="black" large>mdi-menu</v-icon>
        </span>

        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()"
            >&times;</a
          >
          <NuxtLink to="/" keep-alive>Inicio</NuxtLink>
          <NuxtLink to="/about-us">Nosotros</NuxtLink>
          <NuxtLink to="/catalog">Catalogo</NuxtLink>
          <NuxtLink to="/contact">Contacto</NuxtLink>
          <!-- <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> -->
        </div>

        <div class="additional-routes d-flex align-center justify-end">
          <nav class="d-flex justify-end">
            <ul>
              <li>
                <NuxtLink to="/">Inicio</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/about-us">Nosotros</NuxtLink>
              </li>
              <li>
                <nuxt-link to="/catalog">Catalogo</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contacto</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </v-container>
  </header>
</template>
<style scoped>
.logo-container {
  width: 20%;
  cursor: pointer;
}
.additional-routes {
  width: 50%;
}
.logo-container img {
  width: 100%;
  max-height: 100px;
}
/* .header {
  color: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid #2ecc71;
} */
header {
  border-bottom: 1px solid #4b5267;
}
header .container {
  padding: 0 12px;
}
.header ul {
  display: flex;
  list-style: none;
}
.header a {
  color: #2d3436;
  font-size: 14px;
  /* background: #2d3436; */
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
}
.header a:hover,
.header a.nuxt-link-exact-active {
  /* background: #2c3e50; */
  border-bottom: 1px solid rgb(32, 71, 122);
  color: rgb(32, 71, 122);
  font-weight: bold;
}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 10; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  /* Black*/
  /* background-color: #111;  */
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 80px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
/* The navigation menu links */
.sidenav a {
  /* padding: 8px 8px 8px 32px; */
  padding: 14px 0px;
  text-decoration: none;
  font-size: 14px;
  color: #818181;
  display: block;
  transition: 0.3s;
  width: 80%;
  margin-right: 0;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  /* color: #f1f1f1; */
  color: rgb(32, 71, 122);
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 40px;
  font-size: 36px;
  /* margin-left: 0px; */
  padding: 0;
  width: 100%;
  text-align: right;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}
@media (max-width: 576px) {
  header {
    padding-top: 10px;
  }
  .v-application .additional-routes {
    display: none !important;
  }
  .logo-container {
    width: 40%;
  }
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
<script>
export default {
  methods: {
    openNav: () => {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav: () => {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>
