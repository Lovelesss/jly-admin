<template>
  <div class="article-list">
    <Button type="primary" @click="onAddArticle">添加文章</Button>
    <ListTable :article-list="articleList" />
    <Modal @onRemove="onRemove" />
  </div>
</template>

<script>
// import Modal from '../../../components/base/Modal'
// import ListTable from '../../../components/article/list/ListTable'
import { getContentList } from '@/api/article.js'

export default {
  name: 'ArticleList',
  components: {
    // ListTable,
    // Modal
  },
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.getContentList()
  },
  methods: {
    onRemove () {
      this.getContentList()
    },
    getContentList () {
      getContentList().then(res => {
        const data = res.data
        if (data.status === 0) {
          this.articleList = data.result
        }
      })
    },
    onAddArticle () {
      this.$router.push('/article-add')
    }
  }
}
</script>

<style scoped lang="less">
    .article-list {
        padding: 20px;
    }
</style>
