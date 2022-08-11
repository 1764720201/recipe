<template>
  <User :userInfo="userInfo">
    <template v-slot>
      <van-field
        maxlength="11"
        v-model="userInfo.phone"
        name="手机号"
        show-error
        label="手机号"
        placeholder="手机号"
        :rules="[{ validator, required: true, message: '请填写正确的手机号' }]"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </template>
  </User>
</template>
<script setup lang="ts">
import User from "@/components/User/index.vue";

const validator = (val: string) => /1\d{10}/.test(val);
const userInfo = reactive({
  phone: "",
  password: "",
  name: "",
});
</script>

<style lang="less" scoped></style>
