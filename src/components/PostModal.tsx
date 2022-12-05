import React, {useState} from "react";
import {Media, MediaType, Post} from "../typedef";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle as regularCircle} from "@fortawesome/free-regular-svg-icons";
import {faCircle as solidCircle} from "@fortawesome/free-solid-svg-icons"
import {faAngleLeft, faAngleRight, faXmark} from "@fortawesome/free-solid-svg-icons";


function PostModalContent(props: {media: Media}){
  switch (props.media.type){
    case MediaType.Image:
      return <img className="h-full w-full object-contain" src={ props.media.data } alt="Post image"/>
    case MediaType.Video:
      return <video className="h-full w-full object-contain" src={ props.media.data }/>
    case MediaType.Text:
      return <div>{ props.media.data }</div>
    case MediaType.Audio:
      return <audio src={ props.media.data }/>
    case MediaType.None:
      return <div/>
    default:
      return <div/>
  }
}

function PostModal(props: {post: Post, onClose: ()=>void }) {
  const { title, description, contents, time } = props.post
  let [page, setPage] = useState(0)
  
  const mod = (a: number, m: number) => ((a % m) + m) % m
  
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#000000dd]" onClick={props.onClose}>
      <div className="w-[20rem] sm:w-[40rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] h-4/5 bg-slate-800 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" onClick={e => e.stopPropagation()}>
        <div className="h-5/6 relative">
          <div className="absolute top-3 right-3">
            <FontAwesomeIcon icon={faXmark} className="sm:hidden text-4xl text-white" onClick={props.onClose}/>
          </div>
          {
            contents.length === 0
              ? (
                <div>
                  내용 없음
                </div>
              )
              : <div className="flex justify-between items-center h-full">
                <button className="hidden sm:block flex-[0_0_50px] flex justify-center text-white text-4xl" onClick={() => setPage(mod(page-1, contents.length))}>
                  <FontAwesomeIcon icon={faAngleLeft}/>
                </button>
              <div className="h-full overflow-hidden flex justify-center items-center">
                <PostModalContent media={contents[page]}/>
              </div>
                <button className="hidden sm:block flex-[0_0_50px] flex justify-center text-white text-4xl" onClick={() => setPage(mod(page+1, contents.length))}>
                  <FontAwesomeIcon icon={faAngleRight}/>
                </button>
              </div>
          }
        </div>
        <div className="flex flex-col items-center h-1/6 bg-slate-900 rounded-2xl text-white">
          <div className="flex-1 flex justify-center items-center w-full h-full">
            <FontAwesomeIcon icon={faAngleLeft} className="sm:hidden flex-auto text-2xl" onClick={() => setPage(mod(page-1, contents.length))}/>
            {
              contents.map((media, index) => (
                index === page ?
                  <FontAwesomeIcon className="mx-1" icon={solidCircle} key={index}/>
                  :
                  <FontAwesomeIcon className="mx-1" icon={regularCircle} key={index} onClick={() => setPage(index)}/>
              ))}
            <FontAwesomeIcon icon={faAngleRight} className="sm:hidden flex-auto text-2xl" onClick={() => setPage(mod(page+1, contents.length))}/>
          </div>
          <div className="flex-auto max-w-[64rem]">
            <p className="text-md">
              { description }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostModal