<template>
    <v-toolbar height="40" dense color="#026aa7">
        <v-app-bar-nav-icon 
            class="white--text toolbar-nav-icon icon"> 
            <v-icon
            dark
            size="20px"
            >
            mdi-apps
            </v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon 
            class="white--text ma-1 toolbar-nav-icon icon"> 
            <v-icon
            size="20px"
            dark
            >
            mdi-home
            </v-icon>
        </v-app-bar-nav-icon>
        <v-btn
            color="#4e97c2"
            style="margin-right:4px;"
            class="white--text toolbar-nav-icon"
        >
            <v-icon
            left
            dark
            size="20px"
            >
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
        dense>
        </v-text-field>


        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <span class="white--text Header-text">
            Vue-Trello
        </span>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-app-bar-nav-icon 
            class="white--text ma-1 toolbar-nav-icon icon"> 
            <v-icon
            size="20px"
            dark
            >
            mdi-plus
            </v-icon>
        </v-app-bar-nav-icon>

        <v-app-bar-nav-icon 
            class="white--text toolbar-nav-icon icon"> 
            <v-icon
            size="20px"
            dark
            >
            mdi-home
            </v-icon>
        </v-app-bar-nav-icon>
        <v-btn
            depressed
            height="38"
            class="ma-1"
            fab
            small
            color="#ff9a1f"
        >
            U
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>