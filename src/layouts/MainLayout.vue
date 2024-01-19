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
          ref="searchBox"
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
          @focus="() => {
            try {
              $event.target.select()
            } catch (error) {

            }
          }"
          @input-value="() => {
            try {
              searchBox?.showPopup()
            } catch (error) {

            }
          }"
          @update:model-value="showSearch = false"
          @filter="onFilterSongs"
        ></q-select>

        <q-btn
          flat
          dense
          round
          icon="search"
          aria-label="Menu"
          @click="() => {
            showSearch = true
          }"
        />
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item style="position: sticky; top: 0; background-color: white; z-index: 2; ">
          <q-item-section side>
            <q-img
              style="height: 50px; width: 50px;"
              src="~/assets/ktp-logo.png"
            ></q-img>
          </q-item-section>
          <q-item-section style="font-size: 17px;">
            KTP Gen. Conference Hla&nbsp;Bu, 2024
          </q-item-section>
        </q-item>
        <template
          v-for="(item, index) in songs"
          :key="index"
        >
          <q-item
            clickable
            @click="songIndex = index"
          >
            <q-item-section side>
              {{ item.number }}
            </q-item-section>
            <q-item-section>
              {{ item.title }}
            </q-item-section>
          </q-item>


        </template>
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
const searchBox = ref(null)
const showSearch = ref(false);
const leftDrawerOpen = ref(false);
const loadingInstall = ref(false)


window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed successfully');
  // Perform any post-installation actions you might need here.
});

</script>
