<template>
  <div class="all-boards">
    <div class="boards-menu">
      <ul>
        <li>
          <a class="std-links std-links-active"> <v-icon style="padding-right:5px;"> mdi-subtitles </v-icon> Boards </a>
        </li>
        <li>
          <a class="std-links"> <v-icon style="padding-right:5px;"> mdi-table </v-icon> Templates </a>
        </li>
        <li>
          <a class="std-links"> <v-icon style="padding-right:5px;"> mdi-home </v-icon> Home </a>
        </li>
        <li class="add-new-board-link">
          <a class="std-links"> <v-icon style="padding-right:5px; " size="30"> mdi-plus </v-icon> Create team </a>
        </li>
      </ul>
    </div>
    <div class="boards">
      <div class="section-header">
        <v-icon color="blue">mdi-star</v-icon>
        <div class="section-header-title"> Personal Boards </div>
      </div>
      <ul style="display:flex; flex-wrap: wrap;">
        <li v-for="(item, index) in boards" :key="`board-${index}`" class="board-li">
          <v-card @click="goToBoard(item)">
            <v-img
              class="white--text align-end"
              height="150px"
              :src="item.cardImg"
            >
            <v-card-title style="font-size:14px; font-weight:800;">{{ item.name }}</v-card-title>
            </v-img>
          </v-card>
        </li>
    </ul>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      boards: [
        {
          id: 1,
          name: 'Ideas',
          cardImg: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        {
          id: 2,
          name: 'School',
          cardImg: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
        },
        {
          id: 3,
          name: 'Life',
          cardImg: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
        }
      ]
    }
  },

  methods: {
    goToBoard(item) {
      this.$router.push({ name: 'Board', params: { id: item.id } });
    }
  },
}
</script>

<style>

.all-boards {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}

.boards {
  margin: 40px 16px 0;
  width: 100%;
  max-width: 825px;
  min-width: 288px;
}

.boards-menu {
  top: 0px;
  margin: 40px 0 0;
  padding: 0 16px;
  width: 240px;
}

ul {
list-style: none;
    margin: 0;
    padding: 0;
}

.board-li {
  width: 28%;
  padding: 0;
  margin: 0 2% 2% 0;
  transform: translate(0);
}

.section-header {
  margin: 0 0 0 40px;
  padding: 0 0 11px;
  position: relative;
  display: flex;
}

.section-header-title {
  font-size: 15px;
  padding: 0 9px 0;
  position: relative;
  display: inline-block;
  line-height: 24px;
  margin: 4px 0 0;
  font-size: 16px;
  font-weight: 700;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.std-links {
  font-size: 14px;
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: none;
  display: flex;
  font-weight: 700;
  margin: 0;
  min-height: 20px;
  overflow: hidden;
  padding: 6px 8px 6px 0;
  text-decoration: none;
  color: black !important;
  font-weight: 700;
}

.std-links:hover {
  background-color: rgba(9,30,66,.08);
}

.std-links-active {
    background-color: #e4f0f6;
    color: #0079bf !important;
}

.add-new-board-link {
    margin-top:20px; 
    /* background-color: rgba(9,30,66,.08);  */
    border-radius:5px;
}

</style>