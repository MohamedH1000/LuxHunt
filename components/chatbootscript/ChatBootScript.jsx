"use client";
import { useEffect } from "react";

const ChatbotScript = () => {
  useEffect(() => {
    window.embeddedChatbotConfig = {
      chatbotId: "BHTnh3SnB12kGdoFBjRc3",
      domain: "www.chatbase.co",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatbotScript;
