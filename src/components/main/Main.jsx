import {useRef , useEffect} from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../context/Context";
import { useContext } from "react";

function Main() {
  const {
   
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
  } = useContext(Context);

  
  const inputRef = useRef(null); 
  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  return (
    <div className="main">
      <div className="nav">
        <p>
          Gemini Clone
          <img src={assets.gemini_icon} alt="" />
        </p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Mister</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  In web development,  can be used to create
                  unique URL slugs, don't ask to generate code, bcz i can't.
                </p>
                <img src={assets.code_icon} />
              </div>
              <div className="card">
                <p>
                  Travel is essentially the act of moving from one place to
                  another, often over a considerable distance, This month.
                </p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>
                  An idea or suggestion, concept. It's a mental representation
                  of some thing, whether u it's a solution and solution.
                </p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>
                  The author's message is the heart of their work, the meaning
                  that they wish to share with their audience and literary .
                </p>
                <img src={assets.message_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <p>{recentPrompt}</p>
              <img src={assets.user_icon} alt="" />
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
          
            <input
              type="text"
              ref={inputRef}
              onChange={(e) => setinput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim() !== "") {
                  onSent(); // Call the function to send the prompt
                }
              }}
            />
            <div>
              <img src={assets.gallery_icon} />
              <img src={assets.mic_icon} />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini is a family of multimodal AI models developed by Google
            DeepMind,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
