import { useEffect, useState } from "react";
import Canvas1 from "./Canvas1";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(1);
  const [info, setInfo] = useState({});
  const [showImage, setShowImage] = useState(false);

  // Function to create emoji rain effect
  function createEmojiRain() {
    const emojiArray = ["😂", "🤣", "😜", "🎉", "🤪"];
    const emoji = document.createElement("div");
    emoji.textContent =
      emojiArray[Math.floor(Math.random() * emojiArray.length)];
    emoji.classList.add("emoji");
    emoji.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(emoji);

    // Remove the emoji after the animation completes
    setTimeout(() => {
      emoji.remove();
    }, 2000);
  }

  function fetchComic() {
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setInfo(r);
        setShowImage(true);
      });
  }

  function handleClick() {
    setNumber(number + 1);
    createEmojiRain(); // Trigger emoji rain when button is clicked
  }

  useEffect(fetchComic, [number]);

  return (
    <div className="App">
      <h1 className="drunk-text">Welcome to the Joke Generator</h1>
      <p>because trying to be original clearly isn’t working for you.</p>

      {showImage && (
        <img
          src="https://i.scdn.co/image/ab67616d0000b273500dba89ff1ac3e84c91fc0b"
          width="300"
        />
      )}

      <Canvas1 info={info} />

      {/* Button that triggers both joke and emoji rain */}
      <button onClick={handleClick}> don't click me</button>

      <p1>
        Sure, this site isn’t winning any awards, but compared to your sense of
        humor? Yeah, we’re doing just fine.
      </p1>
    </div>
  );
}
