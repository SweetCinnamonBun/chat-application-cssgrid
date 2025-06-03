import "./App.css";
import { IoTrashOutline } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import PfpOne from "./assets/images/profile-pic-1.jpg";
import PfpTwo from "./assets/images/profile-pic-2.jpg";
import PfpThree from "./assets/images/profile-pic-3.jpg";
import PfpFour from "./assets/images/profile-pic-4.jpg";
import PfpFive from "./assets/images/profile-pic-5.jpg";
import { IoSearchSharp } from "react-icons/io5";

function App() {
  return (
    <>
      <main className="grid place-items-center h-screen">
        <div
          id="chat-container"
          className="min-w-[800px] max-w-[1000px] max-h-[800px] w-full h-[95vh] bg-white rounded-xl"
        >
          <div
            id="search-container"
            className="shadow-md z-10 bg-blue-primary rounded-tl-xl px-5 py-2 grid place-items-center"
          >
            <div className="relative w-full max-w-md">
              <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                id="search-box"
                type="text"
                placeholder="Search"
                className="text-black outline-0 bg-white font-bold rounded h-8 border-0 pl-10 pr-5 text-sm w-full"
              />
            </div>
          </div>
          <div id="conversation-list" className="bg-blue-primary">
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpOne}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Hannah River
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Hello! Could you buy me some coffee?
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpTwo}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Edward Cullen
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Hello! How are you Today!
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpThree}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Aaron Smith
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                You forgot your keys...
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpFour}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Anna Cornbread
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                I need you to buy flour.
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpFive}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Taylor James
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                I'm writing this stuff just to test the overflow.
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpThree}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Aaron Double
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                We have the same profile picture.
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpTwo}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Some Otherguy
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                I need some food...
              </div>
            </div>
            <div
              id="conversation"
              className="grid grid-cols-[40px_1fr_max-content] gap-2.5 text-white text-sm border-b border-blue-darker  pt-5 pl-5 pb-5 pr-4 hover:bg-blue-darker cursor-pointer"
            >
              <img
                src={PfpOne}
                alt="profile-1"
                className="h-10 rounded-full row-span-2 w-10"
              />
              <div
                id="title-text"
                className="font-bold text-[#eee] pl-1 text-md whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                Bulk Boy
              </div>
              <div
                id="created-date"
                className="text-[#ddd] whitespace-nowrap text-xs"
              >
                Apr 16
              </div>
              <div
                id="conversation-message"
                className="col-span-2 pl-1 text-[13px] whitespace-nowrap overflow-x-hidden overflow-ellipsis"
              >
                I can't find my dumbbells
              </div>
            </div>
          </div>
          <div
            id="new-message-container"
            className="bg-blue-primary  border-t border-gray-900 rounded-bl-xl px-4 grid grid-cols-[40px] grid-rows-[40px] content-center"
          >
            <a
              href="#"
              className="bg-[#eee] rounded-full text-blue-primary no-underline text-4xl grid place-items-center"
            >
              +
            </a>
          </div>
          <div
            id="chat-title"
            className="grid grid-cols-[1fr_36px] grid-rows-[36px] content-center items-center bg-[#eee] text-blue-primary font-bold text-xl rounded-tr-xl shadow-sm px-5"
          >
            <span>Hannah River </span>
            <IoTrashOutline className=" cursor-pointer w-full h-full" />
          </div>
          <div
            id="chat-message-list"
            className="px-5 flex flex-col-reverse gap-4 overflow-y-scroll"
          >
            <div className="message-row you-message mb-5 grid grid-cols-[70%] justify-items-end justify-end">
              <div className="message-content">
                <div className="message-text px-4 py-2 mb-1">Ok then.</div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row other-message grid grid-cols-[70%] justify-items-start">
              <div className="message-content grid grid-cols-[48px_1fr] gap-x-4 gap-y-1">
                <img
                  src={PfpOne}
                  alt="profile-chat-1"
                  className="rounded-full w-12 h-12 row-span-2"
                />
                <div className="message-text py-2 px-4 mb-1">
                  Yea I think it's best we do that. Otherwise things won't
                  workout well at all. I'm adding more text just to see how to
                  size up properly the speech bubble
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row you-message mb-5 grid grid-cols-[70%] justify-items-end justify-end">
              <div className="message-content">
                <div className="message-text px-4 py-2 mb-1">
                  Yeah, for sure! What time were you thinking?
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row other-message grid grid-cols-[70%] justify-items-start">
              <div className="message-content grid grid-cols-[48px_1fr] gap-x-4 gap-y-1">
                <img
                  src={PfpOne}
                  alt="profile-chat-1"
                  className="rounded-full w-12 h-12 row-span-2"
                />
                <div className="message-text py-2 px-4 mb-1">
                  Yea I think it's best we do that. Otherwise things won't
                  workout well at all. I'm adding more text just to see how to
                  size up properly the speech bubble
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row you-message mb-5 grid grid-cols-[70%] justify-items-end justify-end">
              <div className="message-content">
                <div className="message-text px-4 py-2 mb-1">
                  Hey! Are we still meeting tomorrow for lunch?
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row other-message grid grid-cols-[70%] justify-items-start">
              <div className="message-content grid grid-cols-[48px_1fr] gap-x-4 gap-y-1">
                <img
                  src={PfpOne}
                  alt="profile-chat-1"
                  className="rounded-full w-12 h-12 row-span-2"
                />
                <div className="message-text py-2 px-4 mb-1">
                  Yea I think it's best we do that. Otherwise things won't
                  workout well at all. I'm adding more text just to see how to
                  size up properly the speech bubble
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
            <div className="message-row you-message mb-5 grid grid-cols-[70%] justify-items-end justify-end">
              <div className="message-content">
                <div className="message-text px-4 py-2 mb-1">
                  Yea I think it's best we do that. Otherwise things won't
                  workout well at all.
                </div>
                <div className="message-time text-[13px] text-[#777]">
                  Apr 16
                </div>
              </div>
            </div>
          </div>
          <div
            id="chat-form"
            className="grid grid-cols-[32px_1fr] grid-rows-[51px] bg-[#eee] pl-11 pr-6 content-center items-center gap-4"
          >
            <GrAttachment className="w-full h-full text-blue-primary" />
            <input
              type="text"
              placeholder="type a message"
              className="outline-0 p-3 border border-[#330] rounded-md text-md bg-white"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
