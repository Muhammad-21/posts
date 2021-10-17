import React,{useState,useEffect} from "react";
import '../src/styles/App.css';
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import Postform from "./components/Postform";
import Postlist from "./components/Postlist";
import Mybutton from "./components/UI/button/Mybutton";
import Loader from "./components/UI/Loader/Loader";
import MyModal from "./components/UI/MyModal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import { getPagesArray, getPagesCount } from "./utils/pages";



function App() {
  const [posts,setPosts]= useState([]);
  const [filter,setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
  const [totalPages,setTotalPages] = useState(0);

  const [fetchPosts, isPostLoading,postError] = useFetching(async () => { 
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount,limit));
  });

  let pagesArray = getPagesArray(totalPages)


  useEffect(() => {
    fetchPosts();
  }, [page])

const createPost = (newPost) => {
  setPosts([...posts,newPost]);
  setModal(false);
}

const removePost = (post) => {
  console.log(post);
  setPosts(posts.filter(p => p.id !== post.id));
}

const changePage = (page) => {
  setPage(page)
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
      postError && 
        <h1>Произошла ошибка ${postError}</h1>
      }
      {
        isPostLoading
          ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader /></div> 
          : <Postlist remove={removePost} posts={sortedAndSearchPosts} title="Посты про Js"/>
      }
      <div className="page__wrapper">
        {pagesArray.map(p => 
          <span
            onClick={() => changePage(p)} 
            key={p}  
            className={page === p ? 'page page__current':'page'}
          >
            {p}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
