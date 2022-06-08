import React, {useState, useRef} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/button/input/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'React 2', body: 'Description'},
    {id: 3, title: 'React 3', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <PostForm create={createPost} />
      
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={posts} title='Список постов'/>
        : 
        <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
      
      
    </div>
  );
}

export default App;