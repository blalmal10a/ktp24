<template>
  <q-page class="bg-blue">
    <q-card
      flat
      square
      style="height: calc(100dvh - 50px);"
    >
      <q-carousel
        v-model="songIndex"
        swipeable
        animated
        transition-next="slide-left"
        transition-prev="slide-right"
        transition-duration="500"
        arrows
        class="non-selectable full-height"
      >
        <!-- height="calc(100svh - 104px)" -->
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

                <div
                  class="relative-position text-center text-uppercase"
                  style="font-size: 20px;"
                >
                  <div> {{ item.number }}.
                    {{ item.title }}</div>
                  <div
                    class="title-bottom"
                    style="height:1.5px"
                  ></div>

                </div>


              </h5>
              <div class="row justify-center">
                <!-- font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; -->
                <div
                  style="width: min(300px, 90vw);
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                "
                  class="text-right text-italic"
                >
                  - {{ item.composer }}
                </div>
              </div>
              <div class="q-mt-md row justify-center q-pb-md">
                <div :style="`white-space: pre-wrap; max-width: calc(100vw - 50px);font-size: ${fontSize}px; `">
                  {{ item.lyrics }}
                </div>
              </div>
            </q-scroll-area>
          </q-carousel-slide>
        </template>
      </q-carousel>
    </q-card>
    <div
      style="position: fixed; z-index: 2; bottom: 50px; right: 0; "
      class="q-pa-sm"
    >
      <q-select
        v-if="showSearch"
        ref="searchBox"
        use-input
        autofocus
        hide-selected
        fill-input
        map-options
        emit-value
        clearable
        options-selected-class="text-white bg-primary"
        class="full-width"
        :options="filteredSongs"
        v-model="songIndex"
        :option-label="val => `${val.number ?? val?.item?.number}. ${val.title ?? val.item?.title}`"
        :option-value="val => (val.number ?? val.item?.number) - 1"
        @blur="showSearch = false;"
        @focus="() => {
          try {
            $event.target.select()
          } catch (error) {

          }
        }
        "
        @input-value="() => {
          try {
            searchBox?.showPopup()
          } catch (error) {

          }
        }
        "
        @update:model-value="showSearch = false"
        @filter="onFilterSongs"
      ></q-select>
      <q-btn
        v-if="!showSearch && songIndex !== null"
        flat
        dense
        round
        icon="search"
        aria-label="Menu"
        @click="onClickSearch"
      />
    </div>
  </q-page>
</template>

<script setup>
import { onFilterSongs } from "src/scripts/filter";
import {
  searchBox, showDownloadInstruction, showSearch, leftDrawerOpen, onClickSearch
} from "src/scripts/layout";
import { fontSize, songIndex, songs, isTextCenter, filteredSongs } from "src/scripts/songs";

</script>
<style>
.title-bottom {
  background: rgb(34, 193, 195);
  background: -moz-linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(122, 191, 135, 0.27758861940298507) 40%, rgba(253, 187, 45, 0) 100%);
  background: -webkit-linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(122, 191, 135, 0.27758861940298507) 40%, rgba(253, 187, 45, 0) 100%);
  background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(122, 191, 135, 0.27758861940298507) 40%, rgba(253, 187, 45, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3", endColorstr="#fdbb2d", GradientType=1);
}
</style>
