<template>
  <v-app id="inspire" >
  <v-card
      color="grey lighten-4"
      flat
      height="100%"
      tile
    >
      <toolbar />
      <router-view />
    </v-card>
  </v-app>
</template>

<script>

import Toolbar from './components/core/Toolbar';

export default {
  components: {
    Toolbar
  },
  data() {
    return {

    }
  }
}
</script>


<style>
.toolbar-nav-icon {
  background-color:#4e97c2 !important; 
  border-radius:5% !important; 
  height:80% !important;
}

.toolbar-nav-icon.icon{
    width: 38px !important;
  }

.Header-text {
  font-style: italic;
}

 .v-text-field .v-input__control .v-input__slot {
    min-height: auto !important;
    display: flex !important;
    align-items: center !important;
  }


  html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
