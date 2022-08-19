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
        v-model="userInfo.name"
        name="用户名"
        show-error
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userInfo.password"
        maxlength="15"
        type="password"
        show-error
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="confirmPassword"
        maxlength="15"
        type="password"
        show-error
        name="密码"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="[
          { validator: comfirm, required: true, message: '请输入相同的密码' },
        ]"
      />
    </template>
  </User>
</template>
<script setup lang="ts">
import User from "@/components/User/index.vue";
const userInfo = reactive({
  phone: "",
  password: "",
  name: "",
});
const validator = (val: string) => /1\d{10}/.test(val);
const confirmPassword = ref("");
const comfirm = (val: string) => userInfo.password == confirmPassword.value;
</script>

<style lang="less" scoped></style>
