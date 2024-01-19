<template>
  <q-page
    padding
    class="row justify-center"
  >
    <div
      style="max-width: 100%; margin-top: 2vh; "
      v-if="songIndex >= 0"
    >
      <h5 class="q-my-none">{{ songIndex == null ? '' : songIndex + 1 }}.
        {{ songs[songIndex]?.title }}
      </h5>
      <pre style="max-width: 100%;
        overflow: hidden; text-overflow: clip;
        hyphens: auto; text-wrap: wrap;
        ">{{ songs[songIndex]?.lyrics }}
      </pre>
    </div>
    <!-- v-if="!songIndex" -->
    <div
      v-if="false"
      class="full-width"
    >
      <div style="position: sticky; top:0;">
        <q-input
          autofocus
          @update:model-value="searchFilter"
          type="text"
          label="Search song"
        />
      </div>
      <template
        v-for="(item, index) in filteredSongs"
        :key="index"
      >
        <q-item
          clickable
          @click="songIndex = index"
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
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { filteredSongs, songIndex, songs } from 'src/scripts/songs'
import { searchFilter } from 'src/scripts/filter';
</script>
