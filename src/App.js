import React,{useState,useMemo} from "react";
import '../src/styles/App.css';
import PostFilter from "./components/PostFilter";
import Postform from "./components/Postform";
import Postlist from "./components/Postlist";
import MyModal from "./components/UI/MyModal/MyModal";



function App() {
  const [posts,setPosts]= useState([
    {id:1, title:'Python', body:'django'},
    {id:2, title:'JavaScript 2', body:'react'},
    {id:3, title:'C++', body:'Description'},
  ]);


const [filter,setFilter] = useState({sort:'', query:''})
const [modal,setModal] = useState('false');

const sortedPosts = useMemo( () => {
  console.log('Ф/Я getSortedPosts')
  if(filter.sort){
    return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
  }
  return posts;
},[filter.sort, posts])

const sortedAndSearchPosts = useMemo(() => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
},[filter.query, sortedPosts])

const createPost = (newPost) => {
  setPosts([...posts,newPost]);
}

const removePost = (post) => {
  console.log(post);
  setPosts(posts.filter(p => p.id !== post.id));
}

  return (
    <div className="App"> 
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost}/>
      </MyModal>
      <hr style={{margin:"15px 0"}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      <Postlist remove={removePost} posts={sortedAndSearchPosts} title="Посты про Js"/>

    </div>
  );
}

export default App;
