
import { songIndex } from 'src/scripts/songs';
<template>
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
</template>

<script setup>
const props = defineProps(['songs'])
</script>
