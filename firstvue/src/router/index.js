import HelloWorld from '@/components/HelloWorld'
import overall from '@/components/Overall'
import newlorry from '@/components/NewLorry'
import searchresult from '@/components/SearchResult'

const routes = [

  {
    path: '/overall',
    component: overall
  },
  {
    path: '/newlorry',
    component: newlorry
  },
  {
    path: '/helloword',
    component: HelloWorld
  },
  {
    path: 'searchResult',
    component: searchresult
  }
]
export default routes
