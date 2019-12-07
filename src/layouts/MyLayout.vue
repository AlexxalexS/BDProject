<template>
  <q-layout view="hhh lpR fff">
      <q-header reveal elevated class="text-white bg-black q-px-md q-py-sm">
      <q-toolbar v-if="width >= 992"  class="row">
        <q-toolbar-title class="header-logo flex items-center">
          <a href="/"> <img src="../assets/log.png" alt=""></a>
          <q-btn to="/" class="q-ml-xl text-h6">ГЛАВНАЯ</q-btn>
          <q-btn to="/catalog" class="q-ml-xl text-h6">КАТАЛОГ</q-btn>
        </q-toolbar-title>
        <q-list class=" text-h6 flex justify-between items-center">
            <q-item class="text-white q-mr-xl" clickable to="/">
              <q-item-section>
                  <q-item-label>ВХОД</q-item-label>
              </q-item-section>
            </q-item>
          <q-item class="text-white q-mr-xl" clickable to="/articles">
            <q-item-section>
              <img src="../assets/lk.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white" clickable to="/articles">
            <q-item-section>
              <a href="/"> <img src="../assets/bucket.png" alt=""></a>
              <q-badge floating color="red">{{this.$store.state.quant}}</q-badge>
            </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
      <q-toolbar v-else class="row q-px-none">
        <q-toolbar-title class="header-logo flex items-center q-px-none">
          <a href="/"> <img src="../assets/log.png" alt=""></a>
        </q-toolbar-title>
        <q-btn  flat class="q-pa-sm" icon="menu">
          <q-menu max-width="600" anchor="top right" self="bottom right">
            <div class="row">
              <div class="column">
                <q-item class="text-grey-8 text-center block" clickable to="/">
                <q-item-section>
                  <q-item-label>Главная</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="text-white text-center block" clickable to="/article">
                <q-item-section>
                  <q-item-label>Статьи</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="text-white text-center block" clickable to="/categories">
                <q-item-section>
                  <q-item-label>Категории</q-item-label>
                </q-item-section>
              </q-item>
              </div>

              <q-separator inset vertical />

              <div class="column justify-around items-center">
                <q-btn class="block q-ma-sm" icon="search"/>
                <q-btn class="block q-ma-sm" to="/login" color="primary" label="Вход" />
                <q-btn class="block q-ma-sm" to="/register" color="amber" label="Регистрация" />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer  elevated class="bg-black text-white">
      <q-list class="row justify-between items-center">
        <q-list class="row text-h6">
          <q-item>
            <q-item-label>+7925-567-24-00</q-item-label>
          </q-item>
          <q-item>
            <q-item-label>ТЕЛЕФОНЫ И АДРЕСА</q-item-label>
          </q-item>
        </q-list>
        <q-list class="flex justify-end items-center">
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/instagramm.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/google.png" alt="">
            </q-item-section>
          </q-item>
          <q-item class="text-white justify-end" clickable to="/articles">
            <q-item-section>
              <img src="../assets/vk.png" alt="">
            </q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-footer>

  </q-layout>
</template>
<script>
export default {
  name: 'he',
  data () {
    return {
      text: '',
      model: '',
      width: 0
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  methods: {
    handleResize () {
      this.width = window.innerWidth
    }
  }
}
</script>
<style lang="sass" scoped>
  .header
    &-logo
      img
        max-width: 221px
  .block
    min-width: 150px
</style>
