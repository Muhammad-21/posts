import React,{useState} from 'react'
import Mybutton from "../components/UI/button/Mybutton";
import Myinput from "../components/UI/input/Myinput";

export default function Postform({create}) {
    const [post,setPost] = useState({title:'', body:''});
  
    const addNewPost = (evt) => {
        evt.preventDefault();
        const newPost ={
            ...post,id:Date.now(),
        }
        create(newPost);
        setPost({id:'',tittle:'', body:''});
    }

    return (
        <form onSubmit={addNewPost}>
        <Myinput 
          value={post.title||''}
          onChange = {evt=>setPost({...post, title:evt.target.value})}
          type="text"  
          placeholder="название поста"
        />
        <Myinput
          value={post.body||''}
          onChange = {evt=>setPost({ ...post, body:evt.target.value})} 
          type="text" 
          placeholder="описание поста"
        />
        <Mybutton>создать пост</Mybutton>
      </form> 
    )
}
