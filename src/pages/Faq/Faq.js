import React, { useState } from "react";
import { HiHome, HiChatAlt2, HiLightningBolt, HiPencilAlt } from 'react-icons/hi';

function Faq() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expandedcontent, setExpandedContent] = useState(false);
  const [expandedcontent2, setExpandedContent2] = useState(false);
  const [expandedcontent3, setExpandedContent3] = useState(false);
  const [expandedcontent4, setExpandedContent4] = useState(false);
  const [expandedcontent5, setExpandedContent5] = useState(false);
  const [learnmore, setLearnmore] = useState(false);
  const [learnmore2, setLearnmore2] = useState(false);
  const [learnmore3, setLearnmore3] = useState(false);
  const [learnmore4, setLearnmore4] = useState(false);
  const [learnmore5, setLearnmore5] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpand3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpand4 = () => {
    setExpanded4(!expanded4);
  };

  const handleExpandedContent = () => {
    setExpandedContent(!expandedcontent);
  };

  const handleExpandedContent2 = () => {
    setExpandedContent2(!expandedcontent2);
  };

  const handleExpandedContent3 = () => {
    setExpandedContent3(!expandedcontent3);
  };

  const handleExpandedContent4 = () => {
    setExpandedContent4(!expandedcontent4);
  };

  const handleExpandedContent5 = () => {
    setExpandedContent5(!expandedcontent5);
  };

  const handleLearnmore = () => {
    setLearnmore(!learnmore);
  };

  const handleLearnmore2 = () => {
    setLearnmore2(!learnmore2);
  };

  const handleLearnmore3 = () => {
    setLearnmore3(!learnmore3);
  };

  const handleLearnmore4 = () => {
    setLearnmore4(!learnmore4);
  };

  const handleLearnmore5 = () => {
    setLearnmore5(!learnmore5);
  };

  return (
    <div>
      <div className="container mt-[128px] mx-auto p-4">
        <div className="text-neutral-4 font-bold text-sm mb-[12px]">
          <p>LEARN HOW TO GET STARTED</p>
        </div>
        <div className="text-neutral-2 font-bold text-[48px] mb-[20px]">
          <p>Frequently asked questions</p>
        </div>
        <div className="flex items-center text-neutral-2 text-[16px]">
          <p>Your question isn’t there?</p>
          <a href="/support" className="ml-1.5 text-primary-1 font-bold text-[16px]">Try to contact the support</a>
        </div>
        <div className="mt-8 flex mt-[80px]">
          <div className="w-1/3">
            <ul className="space-y-[32px]">
              <li>
                <button className={expanded ? "text-neutral-2" : "text-neutral-4"} onClick={handleExpand}>
                  <div className="flex items-center">
                    {expanded ? <HiHome className="mr-2" /> : <HiHome className="mr-2" />}
                    <p className={expanded ? "text-neutral-2 font-bold text-[14px]" : "text-neutral-4 font-bold text-[14px]"}>
                      General
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button className={expanded2 ? "text-neutral-2" : "text-neutral-4"} onClick={handleExpand2}>
                  <div className="flex items-center">
                    {expanded2 ? <HiChatAlt2 className="mr-2" /> : <HiChatAlt2 className="mr-2" />}
                    <p className={expanded2 ? "text-neutral-2 font-bold text-[14px]" : "text-neutral-4 font-bold text-[14px]"}>
                      Support
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button className={expanded3 ? "text-neutral-2" : "text-neutral-4"} onClick={handleExpand3}>
                  <div className="flex items-center">
                    {expanded3 ? <HiLightningBolt className="mr-2" /> : <HiLightningBolt className="mr-2" />}
                    <p className={expanded3 ? "text-neutral-2 font-bold text-[14px]" : "text-neutral-4 font-bold text-[14px]"}>
                      Hosting
                    </p>
                  </div>
                </button>
              </li>
              <li>
                <button className={expanded4 ? "text-neutral-2" : "text-neutral-4"} onClick={handleExpand4}>
                  <div className="flex items-center">
                    {expanded4 ? <HiPencilAlt className="mr-2" /> : <HiPencilAlt className="mr-2" />}
                    <p className={expanded4 ? "text-neutral-2 font-bold text-[14px]" : "text-neutral-4 font-bold text-[14px]"}>
                      Product
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-2/3">
            <hr className="border-neutral-6 mb-[38px]" />
            <p className="text-neutral-2 font-bold text-[16px]">
              <div className="flex items-center justify-between">
                <p>How does it work</p>
                <button className="text-neutral-4 text-[16px] font-bold" onClick={handleExpandedContent}>
                  {expandedcontent ? "v" : "^"}
                </button>
              </div>
            </p>
            {expandedcontent && (
              <div className="mt-[38px]">
                <p className="text-neutral-4 text-[16px] mb-[24px]">The concept of Aizy is really simple. You just have to click on a bot after being connected and you can simply watch him trade!</p>
                <button className={learnmore ? null : "rounded-full border-[2px] border-neutral-6 bg-neutral-8 w-[140px] h-[40px] flex items-center justify-center mt-4 hover-animation"} onClick={handleLearnmore}>
                    <p className={learnmore ? null : "text-neutral-2 text-[16px] font-bold"}>
                      {learnmore ? null : "Learn more"}
                    </p>
                    {learnmore ? <p className="text-neutral-4 text-[16px] mb-[24px] text-left">Here's how the Aizy website works in more detail:<br></br><br></br>1. Rental of Existing Bots: Users can browse the selection of automated trading bots available on the Aizy platform. Each bot is designed to execute specific trading strategies, and users can rent the one that best suits their needs.<br></br>2. Bot Configuration: Once a user has chosen a bot to rent, they can configure it according to their preferences and risk tolerance. Bot settings may include profit-taking thresholds, stop-loss levels, technical indicators, etc.<br></br>3. Bot Launch: Once configured, the user can launch the trading bot. The bot will then start executing pre-defined trading strategies based on market conditions.<br></br>4. Performance Monitoring: Users can monitor their bot's performance in real-time through dashboards and statistical reports provided by the platform. These reports typically show profits, losses, and other trading-related metrics.<br></br>5. Custom Bot Creation: Aizy also offers developers the option to create their own custom trading bots. Once created, they can rent out their bots on the platform and receive monthly income from other users who rent them.<br></br>6. Payment and Billing: Users who rent bots are usually billed periodically, according to the rental terms (monthly, quarterly, etc.). Developers who rent out their bots can also receive regular payments based on the number of users renting their bots.<br></br>7. Assistance and Support: Aizy generally provides customer support to help users resolve technical issues or answer questions related to the use of bots and the platform.</p> : null}
                </button>
              </div>
            )}
            <hr className="border-neutral-6 mt-[38px] mb-[38px]" />
            <p className="text-neutral-2 font-bold text-[16px]">
              <div className="flex items-center justify-between">
                <p>How to start with Aizy</p>
                <button className="text-neutral-4 text-[16px] font-bold" onClick={handleExpandedContent2}>
                  {expandedcontent2 ? "v" : "^"}
                </button>
              </div>
            </p>
            {expandedcontent2 && (
              <div className="mt-[38px]">
                <p className="text-neutral-4 text-[16px] mb-[24px]">Additional content goes here...</p>
                <div className="rounded-full border-[2px] border-neutral-6 bg-neutral-8 w-[140px] h-[40px] flex items-center justify-center mt-4 hover-animation">
                  <button className="text-neutral-2 text-[16px] font-bold">Learn more</button>
                </div>
              </div>
            )}
            <hr className="border-neutral-6 mt-[38px] mb-[38px]" />
            <p className="text-neutral-2 font-bold text-[16px]">
              <div className="flex items-center justify-between">
                <p>How to create an account on Aizy</p>
                <button className="text-neutral-4 text-[16px] font-bold" onClick={handleExpandedContent3}>
                  {expandedcontent3 ? "v" : "^"}
                </button>
              </div>
            </p>
            {expandedcontent3 && (
              <div className="mt-[38px]">
                <p className="text-neutral-4 text-[16px] mb-[24px]">To create an account on Aizy, follow these steps:<br></br></p>
                <button className={learnmore3 ? null : "rounded-full border-[2px] border-neutral-6 bg-neutral-8 w-[140px] h-[40px] flex items-center justify-center mt-4 hover-animation"} onClick={handleLearnmore3}>
                    <p className={learnmore3 ? null : "text-neutral-2 text-[16px] font-bold"}>
                      {learnmore3 ? null : "Learn more"}
                    </p>
                    {learnmore3 ? <p className="text-neutral-4 text-[16px] mb-[24px] text-left">1. Go to the <a href="/sign-up" className="text-primary-1 font-bold">sign-up page</a> on the Aizy website.<br></br>2. Fill in the required fields for your username, email address, and password.<br></br>3. Click on the "Create my page" button to create your account.<br></br><br></br>Once these steps are completed, your Aizy account will be created, and you can start using the website's features..</p> : null}
                </button>
              </div>
            )}
            <hr className="border-neutral-6 mt-[38px] mb-[38px]" />
            <p className="text-neutral-2 font-bold text-[16px]">
              <div className="flex items-center justify-between">
                <p>How to upload a bot</p>
                <button className="text-neutral-4 text-[16px] font-bold" onClick={handleExpandedContent4}>
                  {expandedcontent4 ? "v" : "^"}
                </button>
              </div>
            </p>
            {expandedcontent4 && (
              <div className="mt-[38px]">
                <p className="text-neutral-4 text-[16px] mb-[24px]">To upload a bot on the Aizy website, you first need to obtain the developer status. Once you have the developer status, follow these steps:<br></br></p>
                <button className={learnmore4 ? null : "rounded-full border-[2px] border-neutral-6 bg-neutral-8 w-[140px] h-[40px] flex items-center justify-center mt-4 hover-animation"} onClick={handleLearnmore4}>
                    <p className={learnmore4 ? null : "text-neutral-2 text-[16px] font-bold"}>
                      {learnmore4 ? null : "Learn more"}
                    </p>
                    {learnmore4 ? <p className="text-neutral-4 text-[16px] mb-[24px] text-left">1. Go to the <a href="/upload" className="text-primary-1 font-bold">upload page</a> on the Aizy website.<br></br>2. Select the file containing your bot from your computer.<br></br>3. Answer the questions asking for the name you want to give to your bot, the price you have set, and the currency you have chosen.<br></br>4. Click the "Upload" button to upload your bot to Aizy.<br></br><br></br>Once the upload process is complete, your bot will be available on Aizy for use by the website users.</p> : null}
                </button>
              </div>
            )}
            <hr className="border-neutral-6 mt-[38px] mb-[38px]" />
            <p className="text-neutral-2 font-bold text-[16px]">
              <div className="flex items-center justify-between">
                <p>How to be a developer on Aizy</p>
                <button className="text-neutral-4 text-[16px] font-bold" onClick={handleExpandedContent5}>
                  {expandedcontent5 ? "v" : "^"}
                </button>
              </div>
            </p>
            {expandedcontent5 && (
              <div className="mt-[38px]">
                <p className="text-neutral-4 text-[16px] mb-[24px]">To become a developer on Aizy, follow these steps:<br></br></p>
                <button className={learnmore5 ? null : "rounded-full border-[2px] border-neutral-6 bg-neutral-8 w-[140px] h-[40px] flex items-center justify-center mt-4 hover-animation"} onClick={handleLearnmore5}>
                    <p className={learnmore5 ? null : "text-neutral-2 text-[16px] font-bold"}>
                      {learnmore5 ? null : "Learn more"}
                    </p>
                    {learnmore5 ? <p className="text-neutral-4 text-[16px] mb-[24px] text-left">1. Create an account on the Aizy website if you don't have one already.<br></br>2. Go to the <a href="/profile" className="text-primary-1 font-bold">profile page</a> on the Aizy website.<br></br>3. Click on the "Developer mode" option to enable developer mode for your profile.<br></br>4. Upload a valid identification document as requested.<br></br>5. Your profile will be verified by the Aizy team, and once approved, you will be granted developer status.<br></br><br></br>Please note that the Aizy team will review your profile and documentation to ensure eligibility for the developer status.</p> : null}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
