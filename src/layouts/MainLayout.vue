<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
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
          map-options
          emit-value
          clearable
          class="full-width"
          :options="filteredSongs"
          v-model="songIndex"
          :option-label="val => `${val.number ?? val?.item?.number}. ${val.title ?? val.item?.title}`"
          v-if="showSearch"
          :option-value="val => (val.number ?? val.item?.number) - 1"
          @focus="$event.target.select()"
          @update:model-value="showSearch = false"
          @filter="onFilterSongs"
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
import { useQuasar } from 'quasar';
import { onFilterSongs } from 'src/scripts/filter';
import { filteredSongs, songIndex, songs } from 'src/scripts/songs';
import { onMounted, ref } from 'vue';

const q = useQuasar();
const showSearch = ref(false);
const leftDrawerOpen = ref(false);
const loadingInstall = ref(false)


window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully');
  // Perform any post-installation actions you might need here.
});

</script>
