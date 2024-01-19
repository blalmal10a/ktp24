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
          class="text-center"
          style="padding: 0 4px"
        >
          <q-scroll-area class="fit">
            <h5
              class="q-my-none"
              style="padding-top: 2vh;"
            >
              {{ item.title }}
              <div class="justify-center row">
                <q-separator style="width: 150px;"></q-separator>
              </div>
            </h5>

            <div
              class="row justify-center"
              style="overflow: hidden; width: calc(100vw - 8px);"
            >
              <pre style="
        overflow: hidden; text-overflow: clip;
        hyphens: auto; text-wrap: wrap;
        ">{{ item.lyrics }}
            </pre>
            </div>
          </q-scroll-area>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { songIndex, songs } from 'src/scripts/songs';


</script>
