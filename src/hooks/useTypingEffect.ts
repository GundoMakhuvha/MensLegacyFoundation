import { useState, useEffect } from "react";

const phrases = [
  "Welcome",
  "To: ",
  
  
];

const useTypingEffect = (texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const currentPhrase = texts[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentPhrase.length) {
          if (phraseIndex === texts.length - 1) {
            setIsComplete(true);
            return;
          }
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex <= 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, texts, typingSpeed, deletingSpeed, pauseDuration, isComplete]);

  return { displayText, isComplete, phraseIndex };
};

export { useTypingEffect, phrases };
