import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Main from './Components/Layout/Main';
import Friends from './Components/Friends/Friends';

import FriendsDetails from './Components/FriendsDetails/FriendsDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
      {path: '/', element: <Main></Main>, children:[
        {path: 'home', element: <Home></Home>},
        {path: 'about', element: <About></About>},
        {path: 'products', element: <Products></Products>},
        {path: 'friends',
        loader: async ()=>{
           return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element: <Friends></Friends>},
        {
          path:'/friend/:friendId',
          loader: async({params}) =>{
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:<FriendsDetails></FriendsDetails>
        
      },
      {
        path:'posts',
        loader: async() =>{
         return  fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Posts></Posts> 
      },
      {
       path:'/post/:postId',
       loader: async ({params}) =>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
       },
       element:<PostDetails></PostDetails>
      }

      ] },
      {path: '*', element:<div>This is not found 404</div>}
     
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
