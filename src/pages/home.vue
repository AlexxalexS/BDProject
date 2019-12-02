<template>
    <q-page class="q-py-md">
        <div class="row">
            <card v-for="article in articles.slice(0,2)" :article="article" :key="article.id"></card>
        </div>
        <div class="row">
            <card size="small" v-for="article in articles.slice(2,5)" :article="article" :key="article.id"></card>
        </div>
        <div class="row">
            <card v-for="article in articles.slice(5,7)" :article="article" :key="article.id"></card>
        </div>
        <div class="row">
            <card size="small" v-for="article in articles.slice(7,10)" :article="article" :key="article.id"></card>
        </div>
    </q-page>
</template>

<script>
import card from '../components/Card'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    card
  },
  data () {
    return {
      articles: null
    }
  },
  computed: {
    ...mapGetters({
      artc: 'article/articles'
    })
  },
  mounted () {
    this.getArticles()
    this.articles = this.artc
  },
  methods: {
    ...mapActions({
      getArticles: 'article/getArticles'
    })
  }
}
</script>
