import "./App.css"
import { IoTrashOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import PfpOne from "./assets/images/profile-pic-1.jpg";

function App() {
  

  return (
    <>
     <main className="grid place-items-center h-screen">
        <div id="chat-container" className="min-w-[800px] max-w-[1000px] max-h-[800px] w-full h-[95vh] bg-white rounded-xl">
          <div id="search-container" className="shadow-md z-10 bg-blue-primary rounded-tl-xl px-5 grid place-items-center">
            <input id="search-box" type="text" placeholder="Search" className="text-black outline-0 bg-white font-bold rounded-xs h-8 border-0 pl-12 pr-5 text-sm"/>
          </div>
          <div id="conversation-list" className="bg-blue-primary">
            <div id="conversation" className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer">
              <img src={PfpOne} alt="profile-1" className="h-10 rounded-full row-span-2 w-10"/>
              <div id="title-text" className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis">
                Hannah River asdfasfsdafsadfsdf
              </div>
              <div id="created-date" className="text-[#ddd] whitespace-nowrap text-xs">
                Apr 16
              </div>
              <div id="conversation-message" className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis">
                  This is a message jdasflöfjk sdafdasfsdaf
              </div>
            </div>
          </div>
          <div id="new-message-container" className="bg-blue-primary border border-t rounded-bl-xl px-4 grid grid-cols-[40px] grid-rows-[40px] content-center">
            <a href="#" className="bg-[#eee] rounded-full text-blue-primary no-underline text-4xl grid place-items-center">+</a>
          </div>
          <div id="chat-title" className="grid grid-cols-[1fr_36px] grid-rows-[36px] content-center items-center bg-[#eee] text-blue-primary font-bold text-xl rounded-tr-xl shadow-sm px-5">
            <span>John Doe</span>
            <IoTrashOutline className=" cursor-pointer w-full h-full"/>
          </div>
          <div id="chat-message-list">
            This is the chat message list
          </div>
          <div id="chat-form" className="grid grid-cols-[32px_1fr] grid-rows-[51px] bg-[#eee] pl-11 pr-6 content-center items-center gap-4">
            <GrAttachment className="w-full h-full text-blue-primary" />
            <input type="text" placeholder="type a message" className="outline-0 p-3 border border-[#330] rounded-md text-md bg-white"/>
          </div>
        </div>
     </main>
    </>
  )
}

export default App
