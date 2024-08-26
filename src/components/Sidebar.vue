<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    mode="vertical"
    unique-opened
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item
      v-for="route in routes"
      :key="route.name"
      :route="route"
    />
  </el-menu>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import SidebarItem from './SidebarItem.vue';

// 获取当前路由
const route = useRoute();
// 获取 Vue Router 实例
const router = useRouter();

// 获取所有路由信息
const routes = router.getRoutes().filter(route => {
  return route.meta && route.meta.title;
});
</script>