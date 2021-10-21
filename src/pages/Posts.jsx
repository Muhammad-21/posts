import React,{useState,useEffect,useRef} from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import Postform from "../components/Postform";
import Postlist from "../components/Postlist";
import Mybutton from "../components/UI/button/Mybutton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";


import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import {getPagesCount} from "../utils/pages";



function Posts() {
  const [posts,setPosts]= useState([]);
  const [filter,setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts,filter.sort,filter.query);
  const [totalPages,setTotalPages] = useState(0);
  const lastElement = useRef();
  const observer = useRef();
  const [fetchPosts, isPostLoading,postError] = useFetching(async () => { 
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]) 
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount,limit));
  });

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page+1)
  })

  useEffect(() => {
    fetchPosts(limit,page);
  }, [page,limit])

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
      <MySelect
        value = {limit}
        onChange = {value  => setLimit(value)}
        defaultValue = "Кол-во элементов на странице"
        options = {[
          {value:5, name:'5',},
          {value:10, name:'10',},
          {value:'25', name:'25',},
          {value:'-1', name:'показать все',}
        ]}
      />
      {
      postError && 
        <h1>Произошла ошибка ${postError}</h1>
      }
      <Postlist remove={removePost} posts={sortedAndSearchPosts} title="Посты про Js"/>
      <div ref={lastElement} style={{height:20,background:'red'}}/>
      {
        isPostLoading && 
          <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader /></div> 
      }
      <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
    </div>
  );
}

export default Posts;
