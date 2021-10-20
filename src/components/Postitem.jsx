import React from 'react'
import { useHistory } from 'react-router-dom'
import Mybutton from './UI/button/Mybutton'

export default function Postitem(props) {
  const router = useHistory();
  console.log(router);
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.post.id} {props.post.title}</strong>
            <div> 
              {props.post.body}
            </div>
        </div>
        <div className="post_btns">
          <Mybutton onClick={() => router.push(`/posts/${props.post.id}`)}>
            открыть 
          </Mybutton>
          <Mybutton onClick={() => props.remove(props.post)}>
            удалить
          </Mybutton>
        </div>
      </div>
    )
}
