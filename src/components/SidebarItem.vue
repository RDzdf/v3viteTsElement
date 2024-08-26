<template>
  <li v-if="!route.children || !route.children.length">
    <el-menu-item :index="route.path" :key="route.name">
      <i :class="route.meta.icon"></i>
      <span slot="title">{{ route.meta.title }}</span>
    </el-menu-item>
  </li>
  <li v-else>
    <el-sub-menu :index="route.path" :key="route.name">
      <template #title>
        <i :class="route.meta.icon"></i>
        <span>{{ route.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in route.children"
        :key="child.name"
        :route="child"
      />
    </el-sub-menu>
  </li>
</template>

<script setup>
defineProps({
  route: {
    type: Object,
    required: true
  }
});
</script>