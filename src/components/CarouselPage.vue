<template>
  <q-page>
    <q-carousel
      v-model="songIndex"
      swipeable
      animated
      transition-next="slide-left"
      transition-prev="slide-right"
      transition-duration="500"
      arrows
      height="calc(100svh - 104px)"
      class="non-selectable"
    >
      <template
        v-for="(item, index) in songs"
        :key="index"
      >
        <q-carousel-slide
          :name="index"
          :class="{
            'text-center': isTextCenter,
          }"
          style="padding: 0 4px"
        >
          <q-scroll-area
            class="fit"
            :thumb-style="{
              background: 'grey',
              opacity: '0.1',
              width: '5px'

            }"
            :bar-style="{
              background: 'transparent'
            }"
          >
            <h5
              class="q-my-none row justify-center"
              style="padding-top: 2vh; "
            >

              <div class="">
                <div class="relative-position text-center">
                  {{ item.number }}.
                  {{ item.title }}
                </div>
                <div
                  class="justify-center row "
                  style="padding-left: 20px;"
                >
                  <q-separator style="width: 150px"></q-separator>
                </div>
              </div>
            </h5>

            <div class="q-mt-md row justify-center">
              <div :style="`white-space: pre-wrap; max-width: calc(100vw - 50px);font-size: ${fontSize}px; `">
                {{ item.lyrics }}
              </div>
            </div>
          </q-scroll-area>
        </q-carousel-slide>
      </template>
    </q-carousel>
  </q-page>
</template>

<script setup>
import { fontSize, songIndex, songs, isTextCenter } from "src/scripts/songs";

</script>
