import React from "react";
import {Post} from "../typedef";

function PostCard(props: { post :Post }) {
  const { title, description, contents, time } = props.post
  return (
    <div className="h-60 rounded-xl bg-blue-50 border-2 border-slate-200 shadow-xl relative">
      <img className="absolute top-0 left-0 rounded-xl m-auto w-full h-full object-cover" alt="카드 이미지" src={contents[0].data}/>
      <div className="absolute w-full h-full rounded-xl bg-slate-900 opacity-25">
      
      </div>
      <div className="absolute flex items-end justify-end w-full h-full p-4 text-white text-xl font-bold">
        <span className="bottom-0 right-0 max-w-[100%] text-ellipsis overflow-hidden whitespace-nowrap">{ title }</span>
      </div>
    </div>
  )
}

export default PostCard