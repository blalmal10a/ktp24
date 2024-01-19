<template>
  <q-page
    padding
    class="row justify-center"
  >
    <div style="max-width: 100%; margin-top: 2vh; ">
      <h5 class="q-my-none">{{
        songIndex == null ? '' : songIndex + 1
      }}.
        {{
          songs[songIndex]?.title
        }}</h5>
      <pre style="max-width: 100%;
      overflow: hidden; text-overflow: clip; hyphens: auto; text-wrap: wrap;
      ">{{ songs[songIndex]?.lyrics }}
  </pre>
      <!-- <pre>
        <h6>SONG INDEX {{ songIndex }}</h6>
    {{ filteredSongs }}
    </pre> -->
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { filteredSongs, songIndex, songs } from 'src/scripts/songs'

</script>
