<template>
  <q-page class="flex row justify-center items-center q-gutter-md">
    <q-card class="col-8 justify-center items-center  ">
      <q-card-section class="text-h3 q-mb-lg text-center">Добро пожаловать!</q-card-section>
      <q-card-section class="text-h3 text-center">Вам есть 18 лет?</q-card-section>
      <q-card-section class="row justify-center items-center ">
        <q-btn unelevated class="col-2 flex justify-center items-center q-ma-lg " size="xl" rounded color="blue-9" label="Да" />
        <div class="col-1"></div>
        <q-btn unelevated class="col-2 flex justify-center items-center q-ma-lg" size="xl" rounded color="blue-6" label="Нет" />
      </q-card-section>
      <q-card-section class="row justify-center items-center">
        <p class="col-10 text-center text-h4 q-mt-xl">Продукция, представленная на сайте  предназначена только для лиц достигших 18 лет. Нажимая на кнопку «да» вы подтверждаете свое совершеннолетие.</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'input'
}
</script>

<style scoped>

</style>
