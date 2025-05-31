<template>
  <CarouselPage v-if="!showSearch && songIndex !== null" />
  <div
    v-else
    class="full-width"
    style="height: 100%;"
  >
    <div style="position: sticky; top:0; backdrop-filter: blur(10px); z-index: 99;">
      <q-input
        autofocus
        @update:model-value="searchFilter"
        placeholder="Search song"
        type="text"
        class="q-px-md"
      >
        <template v-slot:prepend>
          <q-icon
            size="sm"
            name="search"
          />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click="() => {
              searchFilter('');
              showSearch = false;
              if (songIndex == null) {
                songIndex = 0;
              }
            }"
          />
        </template>
      </q-input>
    </div>
    <template
      v-for="(item, index) in filteredSongs"
      :key="index"
    >
      <q-item
        clickable
        @click="() => {
          songIndex = `${item.number ?? item.item.number}` - 1;
          showSearch = false;

        }"
      >
        <q-item-section side>
          {{ item.number ?? item?.item?.number }}
        </q-item-section>
        <q-item-section>
          {{ item.title ?? item?.item?.title }}
        </q-item-section>
      </q-item>
    </template>
  </div>
</template>
<script setup>
import CarouselPage from 'src/components/CarouselPage.vue';
import { searchFilter } from 'src/scripts/filter';
import { showSearch } from 'src/scripts/layout';
import { filteredSongs, songIndex } from 'src/scripts/songs';
</script>
