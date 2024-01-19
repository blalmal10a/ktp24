<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title
          v-if="!showSearch"
          style="font-size: 14px;"
        >
          KTP Gen. Conf. Hla Bu 2024
        </q-toolbar-title>
        <q-select
          use-input
          autofocus
          hide-selected
          fill-input
          :options="songs"
          v-model="songIndex"
          map-options
          emit-value
          class="full-width"
          :option-label="val => `${val.number}. ${val.title}`"
          v-if="showSearch"
          :option-value="val => val.number - 1"
          @focus="$event.target.select()"
          @update:model-value="showSearch = false"
        ></q-select>
        <q-btn
          flat
          dense
          round
          icon="search"
          aria-label="Menu"
          @click="showSearch = true"
        />
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>

        <!--  -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { songIndex, songs } from 'src/scripts/songs';
import { ref } from 'vue';

const showSearch = ref(false);
const leftDrawerOpen = ref(false);
</script>
