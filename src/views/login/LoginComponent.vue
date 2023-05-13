<template>
  <div class="height100 login">
    <div class="login-content">
      <div class="box1">
        <div class="box1-content">
          <img
            class="box1-icon"
            src="https://api.iconify.design/logos:adobe-photoshop.svg?color=%2315994e"
            alt=""
          />
        </div>
      </div>
      <div class="box2">
        <div class="box2-content">
          <img
            class="box2-icon"
            src="https://api.iconify.design/logos:ganache-icon.svg?color=%2315994e"
            alt=""
          />
        </div>
      </div>
      <div class="box3">
        <div class="box3-content">
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
        </div>
        <div class="box3-title">音乐</div>
      </div>
      <div class="box4">
        <div class="box4-content">
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
          <n-avatar
            size="44"
            src="https://img.icons8.com/?size=1x&id=UrgbzHxXKotn&format=png"
            color="transparent"
          ></n-avatar>
        </div>
        <div class="box3-title">音乐</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="login"></script>

<style lang="scss" scoped>
.login {
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80);
  height: 100%;
  transition: filter 250ms, transform 250ms;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &-content {
    height: 100%;
    padding: 50px;
  }
}
.box1 {
  display: inline-block;
  &-content {
    padding: 10px;
    background-color: rgba(#fff, 0.65);
    border-radius: 8px;
    backdrop-filter: blur(5px);
  }
  &-icon {
    display: block;
    width: 36px;
  }
}
.box2 {
  display: inline-block;
  margin-left: 20px;
  &-content {
    padding: 10px;
    background-color: rgba(#000, 0.45);
    border-radius: 8px;
    backdrop-filter: blur(5px);
  }
  &-icon {
    display: block;
    width: 36px;
  }
}
.box3 {
  display: inline-block;
  margin-left: 20px;
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 5px;
    background: rgba(#fff, 0.7);
    width: 214px;
    border-radius: 8px;
    backdrop-filter: blur(8px);
  }
  &-title {
    display: block;
    text-align: center;
    color: #fff;
    margin-top: 5px;
    font-size: 12px;
  }
}
.box4 {
  display: inline-block;
  margin-left: 20px;
  &-content {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 5px;
    background: #fff;
    width: 214px;
    border-radius: 8px;
  }
  &-title {
    display: block;
    text-align: center;
    color: #fff;
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>
