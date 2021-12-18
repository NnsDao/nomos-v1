import Index from './view/Index';
import Login from './components/Login';
import Main from './view/main/MainIndex';
import Product from './view/product/Index';
import Story from './view/story/Story';
export default [
    {path:"/login", name:'Login', component:Login, },
    {path:"/story", name:'Story', component:Story, },
    {path:"/product", name:'Product', component:Product, },
    {path:"/main", name:'Main', component:Main, auth: true },
    {path:"/home", name:'Index', component:Index, },
    {path:"/", name:'Index', component:Index, },
]