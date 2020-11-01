import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/view/Book'
import BookDetail from '@/view/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book
    },
    {
      path: '/book_detail/:id',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
