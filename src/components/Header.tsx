import React from "react";

function Header() {
  
  return (
    <div className="w-screen h-16 bg-slate-800 text-white flex items-center justify-between px-6 shadow-xl">
      <span className="text-xl font-bold">맹수 우애깅 갤러리</span>
      <div>
        <a href="https://www.instagram.com/woo_babing/" target="_blank">
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}


export default Header