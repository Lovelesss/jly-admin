<template>
  <div class="article-add">
    <div class="add-header">
      <a-input v-model="content.title" type="text" class="title" placeholder="输入文章标题" />
      <a-select v-model="select" class="select" placeholder="文章分类">
        <a-option
          v-for="(category, index) in categoryList"
          :key="index"
          :value="category.category_name"
        >
          {{ category.category_name }}
        </a-option>
      </a-select>
      <Button type="primary" @click="onPublish">发布文章</Button>
    </div>
    <a-input v-model="content.article_desc" class="desc" placeholder="文章概述" />
    <mavon-editor v-model="content.md_str" class="editor" @change="onChange" />
  </div>
</template>

<script>
import { getCategory, publish, getArticle } from '@/api/article'

export default {
  name: 'ArticleAdd',
  data () {
    return {
      categoryList: [], // 分类列表
      select: '',
      content: {},
      lastTitle: ''
    }
  },
  created () {
    this.getCategory()
    if (this.$route.params.title) {
      this.lastTitle = this.$route.params.title
      this.getArticle(this.$route.params.title)
    }
  },
  methods: {
    // 获取文章
    getArticle (title) {
      const params = {
        title
      }
      getArticle(params).then(res => {
        const data = res.data
        if (data.status === 0) {
          this.content = data.result[0]
          this.content.md_str = unescape(this.content.md_str)
        }
      })
    },
    // 获取分类
    getCategory () {
      getCategory().then(res => {
        this.categoryList = res.data.result
      })
    },
    // 点击发布
    onPublish () {
      const params = {
        title: this.content.title,
        mdStr: this.content.md_str,
        htmlStr: this.content.html_str,
        desc: this.content.article_desc,
        categoryName: this.select,
        lastTitle: this.lastTitle
      }
      if (this.$route.params.title) {
        params.flag = 'update'
      }
      publish(params).then(res => {
        console.log(res)
        this.$router.push('/article-list')
      })
    },
    // 编辑器内容改变, value: 编辑器内原始值(String), render：经markdown解析后的html
    onChange (value, render) {
      this.content.md_str = value
      this.content.html_str = render
    }
  }
}
</script>

<style scoped lang="less">
    .article-add {
        padding: 15px;

        .add-header {
            display: flex;
            align-items: center;
            justify-content: center;

            .title {
                flex: 1;
            }
            .select {
                position: relative;
                z-index: 10000;
                margin: 0 20px;
                width: 100px;
            }
        }
        .desc {
            margin: 10px 0;
        }

        .editor {
            margin-top: 5px;
            height: calc(100vh - 210px)
        }
    }
</style>
