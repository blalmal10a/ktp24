<template>
  <q-page>
    <q-carousel
      v-model="songIndex"
      swipeable
      animated
      arrows
      height="calc(100svh - 50px)"
      class="non-selectable"
    >

      <template
        v-for="(item, index) in songs"
        :key="index"
      >
        <q-carousel-slide
          :name="index"
          class="text-center q-pa-none"
        >
          <q-scroll-area class="fit">
            <h5
              class="q-my-none"
              style="padding-top: 2vh;"
            >
              {{ item.title }}
            </h5>
            <pre style="max-width: 100%;
        overflow: hidden; text-overflow: clip;
        hyphens: auto; text-wrap: wrap;
        ">{{ item.lyrics }}
            </pre>
          </q-scroll-area>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { songIndex, songs } from 'src/scripts/songs';


</script>
