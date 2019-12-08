<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 q-my-lg flex justify-center ">
    <q-card class="my-card flex justify-center items-center" style="width: 250px; min-width: 200px; min-height: 300px ">
      <img class="q-mt-sm" :src="fuf()" style="max-height: 290px; width: auto">
      <q-card-section>
        <div class="text-h6">{{item.title}}</div>
      </q-card-section>
      <q-card-section>
        <div class="row flex items-center justify-center ">
          <div class="col-12 text-h5 text-center  text-red-8">{{item.price}} руб./шт</div>
          <div class="col-12 flex q-pt-lg justify-center items-center"><q-btn outline color="accent" label="В корзину"/></div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'item_catalog',
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    fuf () {
      return '../statics/img/' + this.item.id + '.png'
    }
  }
}
</script>

<style lang="sass">
  .article
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 3
    -webkit-box-orient: vertical
</style>
