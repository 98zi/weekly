<script setup>
import { watch, ref } from "vue";
import { useDocs } from "./useDocs.js";

const props = defineProps(["filter", "type"]);

const { categories, docData } = useDocs();
const totalData = ref([]);
let curPage = ref(1),
  totalPage = ref(1),
  inputPage = ref(null),
  filterData = ref([]);
watch(
  () => props.filter,
  (val) => {
    let data = [];
    if (props.type === "tag") {
      data = docData.filter((item) => !val || (item.tags && item.tags.includes(val)));
    } else {
      data = docData.filter(
        (item) => !val || (item.categories && item.categories.includes(val))
      );
    }
    totalPage.value = Math.ceil(data.length / 999);
    totalData.value = data;
    filterData.value = data.slice(0, 999);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div class="docs-list-wrap">
    <h1>Blog</h1>
    <div class="docs-list">
      <div v-for="item in filterData" :key="item.title" class="docs">
        <span class="docs-info">{{ item.date }}</span>
        <a class="docs-title" :href="item.link">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>
