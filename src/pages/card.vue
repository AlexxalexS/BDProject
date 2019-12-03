<template>
    <q-page class="q-py-lg q-px-md">
      <div class="container q-py-lg">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <q-card class="my-card bg-grey-3 q-pa-md" style="min-height: 557px ">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                  <div class="q-pa-md ">
                    <q-carousel
                      class="bg-grey-3"
                      swipeable
                      animated
                      v-model="slide"
                      thumbnails
                      infinite
                    >
                      <q-carousel-slide :name="1" img-src="../statics/img/image1.png" style="height: 80%; width: auto"/>
                      <q-carousel-slide :name="2" img-src="../statics/img/image2.png" style="height: 80%; width: auto"/>
                      <q-carousel-slide :name="3" img-src="../statics/img/image3.png" style="height: 80%; width: auto"/>
                    </q-carousel>
                  </div>
                  <div class="q-pa-md flex justify-center ">
                    <div class="q-gutter-y-md column">
                      <q-rating
                        v-model="ratingModel"
                        size="2.2em"
                        color="red-8"
                        icon="star_border"
                        icon-selected="star"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12 column justify-around   ">
                  <q-card-section  >
                    <div class="text-h5 q-pb-xl">Электронный испаритель Logic Compact (350 mAh)</div>
                  </q-card-section>
                  <q-card-section class="">
                    <div class="text-h6">Артикул: 93624 <br>
                      Тип затяжки: Сигаретная<br>
                      Емкость аккумулятора: 350 мАч<br>
                      Объем бака атомайзера:<br>
                      1.6 мл<br>
                    </div>
                  </q-card-section>
                      <q-card-section class="  ">
                        <div class="text-h5 flex text-red-8">4490  &#8381;</div>
                      </q-card-section>
                      <q-card-section class="">
                        <q-btn outline color="accent" label="В корзину"/>
                      </q-card-section>
                </div>
              </div>
            </q-card>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </q-page>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      slide: 1,
      ratingModel: 5
    }
  }
}
</script>

<style scoped>

</style>
