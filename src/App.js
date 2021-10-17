import React,{useState} from "react";
import '../src/styles/App.css';
import PostFilter from "./components/PostFilter";
import Postform from "./components/Postform";
import Postlist from "./components/Postlist";
import Mybutton from "./components/UI/button/Mybutton";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";



function App() {
  const [posts,setPosts]= useState([
    {id:1, title:'Python', body:'django'},
    {id:2, title:'JavaScript 2', body:'react'},
    {id:3, title:'C++', body:'Description'},
  ]);
  const [filter,setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);


const createPost = (newPost) => {
  setPosts([...posts,newPost]);
  setModal(false);
}

const removePost = (post) => {
  console.log(post);
  setPosts(posts.filter(p => p.id !== post.id));
}

  return (
    <div className="App">
      <Mybutton style={{marginTop:30}} onClick={() => setModal(true)}>
        Создать пользователья
      </Mybutton>
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
