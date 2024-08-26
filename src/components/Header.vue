<template>
  <div class="header">
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="6">
        <el-link href="/" type="primary">Logo</el-link>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
      </el-col>
      <el-col :span="6" class="right-section">
        <el-link @click="toggleLang">{{ lang }}</el-link>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            User Info<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Profile</el-dropdown-item>
              <el-dropdown-item>Settings</el-dropdown-item>
              <el-dropdown-item divided @click="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchInput = ref('');
const lang = ref('EN');
const toggleLang = () => {
  lang.value = lang.value === 'EN' ? 'CN' : 'EN';
};

const logout = () => {
  console.log('User logged out');
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 10px;
}
.right-section {
  display: flex;
  justify-content: flex-end;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
</style>