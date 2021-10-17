import React from 'react'
import { TransitionGroup,CSSTransition } from 'react-transition-group'
import Postitem from './Postitem'


export default function Postlist({posts, title, remove}) {
    if(!posts.length){
        return (
            <h1 style={{textAlign:"center"}}>Посты не найдены!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >                    
                        <Postitem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
