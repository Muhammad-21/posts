import React,{useState,useEffect} from "react";
import '../src/styles/App.css';
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import Postform from "./components/Postform";
import Postlist from "./components/Postlist";
import Mybutton from "./components/UI/button/Mybutton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";



function App() {
  const [posts,setPosts]= useState([]);
  const [filter,setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
  const [isPostLoading,setIsPostLoading] = useState(false);

  async function fetchPosts() {
    setIsPostLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostLoading(false);
    },1000) 
  }

  useEffect(() => {
    fetchPosts();
  }, [])
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
      {
        isPostLoading
          ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader /></div> 
          : <Postlist remove={removePost} posts={sortedAndSearchPosts} title="Посты про Js"/>
      }

    </div>
  );
}

export default App;
