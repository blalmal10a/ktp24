<template>
  <CarouselPage v-if="songIndex !== null" />
  <div
    v-else
    class="full-width"
  >
    <div style="position: sticky; top:0;">
      <q-input
        autofocus
        @update:model-value="searchFilter"
        placeholder="Search song"
        type="text"
        label="Search song"
        class="q-px-md"
      />
    </div>
    <template
      v-for="(item, index) in filteredSongs"
      :key="index"
    >
      <q-item
        clickable
        @click="songIndex = `${item.number ?? item.item.number}` - 1"
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
import { filteredSongs, songIndex } from 'src/scripts/songs';
</script>
