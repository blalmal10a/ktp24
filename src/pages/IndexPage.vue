<template>
  <q-page
    padding
    class="row justify-center"
  >
    <div style="max-width: 100%; margin-top: 2vh; ">
      <h5 class="q-my-none">{{ songIndex + 1 }}. {{ songs[songIndex]?.title }}</h5>
      <pre style="max-width: 100%;
      overflow: hidden; text-overflow: clip; hyphens: auto; text-wrap: wrap;
      ">{{ songs[songIndex]?.lyrics }}
  </pre>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { songIndex, songs } from 'src/scripts/songs'
</script>
