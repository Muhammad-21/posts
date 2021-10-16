import React from 'react'
import Mybutton from './UI/button/Mybutton'

export default function Postitem(props) {
  
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.number} {props.post.title}</strong>
            <div> 
              {props.post.body}
            </div>
        </div>
        <div className="post_btns">
          <Mybutton onClick={() => props.remove(props.post)}>
            удалить
          </Mybutton>
        </div>
      </div>
    )
}
