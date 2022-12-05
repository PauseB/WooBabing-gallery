import React, {useState} from "react";
import posts from "../LoadPosts";
import PostCard from "../components/PostCard";
import PostModal from "../components/PostModal"
import {Post} from "../typedef"

function TimelinePage(){
  let [selectedPost, selectPost] = useState<Post|null>(null)
  
  const closeModal = () => selectPost(null)
  
  type time2PostMap = {
    [key: string]: Post[]
  }
  const timePostMap: time2PostMap = {}
  posts.forEach(p => {
    const timeNum = p.time.year * 100 + p.time.month
    if (timePostMap[timeNum] == null){
      timePostMap[timeNum] = []
    }
    timePostMap[timeNum].push(p)
  })
  
  return (
    <>
      {
        Object.keys(timePostMap).map(timeStr => (
          <div className="mx-2 md:mx-[10vw] mt-6 mb-16 px-6" key={timeStr}>
            <div>
              <b className="text-3xl">{Math.floor(parseInt(timeStr)/100)}년 {parseInt(timeStr)%100}월</b>
              <hr className="my-4 border-lg border-black"/>
            </div>
            <div className="mx-auto grid gap-4 grid-cols-auto-fit">
              {
                timePostMap[timeStr].map((post, index) => (
                  <div onClick={() => selectPost(post)} key={index}>
                    <PostCard post={post}/>
                  </div>
                ))}
            </div>
          </div>
        ))
      }


      {
        selectedPost != null &&
        <PostModal post={selectedPost} onClose={closeModal}/>
      }
    </>
  )
}

export default TimelinePage