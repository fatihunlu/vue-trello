<template>
  <v-toolbar height="40" dense color="#026aa7">
    <v-app-bar-nav-icon
      class="white--text toolbar-nav-icon icon"
      @click="$router.push({ name: 'Home' })"
    >
      <v-icon dark size="20px">
        mdi-apps
      </v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon
      class="white--text ma-1 toolbar-nav-icon icon"
      @click="$router.push({ name: 'Home' })"
    >
      <v-icon size="20px" dark>
        mdi-home
      </v-icon>
    </v-app-bar-nav-icon>
    <v-btn
      color="#4e97c2"
      style="margin-right:4px;"
      class="white--text toolbar-nav-icon"
    >
      <v-icon left dark size="20px">
        mdi-subtitles
      </v-icon>
      Panolar
    </v-btn>
    <v-text-field
      flat
      solo-inverted
      append-icon="mdi-magnify"
      style="max-width: 12%; padding-top: 1.5%;"
      height="32px"
      color="white"
      dark
      dense
    >
    </v-text-field>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <span class="white--text Header-text">
      Vue-Trello
    </span>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-menu
      class="toolbar-menu-item"
      offset-y
      origin="center center"
      :nudge-bottom="10"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon class="white--text ma-1 toolbar-nav-icon icon">
          <v-icon size="20px" dark v-bind="attrs" v-on="on">
            mdi-plus
          </v-icon>
        </v-app-bar-nav-icon>
      </template>
      <v-list dense> 
        <v-subheader>Create</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>

    <v-app-bar-nav-icon class="white--text toolbar-nav-icon icon">
      <v-icon size="20px" dark>
        mdi-home
      </v-icon>
    </v-app-bar-nav-icon>
    <v-btn depressed height="38" class="ma-1" fab small color="#ff9a1f">
      U
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Create Board", icon: "mdi-subtitles" },
        { text: "Start wih a template", icon: "mdi-table" },
        { text: "Create team", icon: "mdi-subtitles" },
        { text: "Create business team", icon: "mdi-table" }
      ]
    };
  }
};
</script>

<style>
</style>