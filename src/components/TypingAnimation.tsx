import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
  singleLine?: boolean;
  resetOnComplete?: boolean;
}

const TypingAnimation = ({ 
  texts, 
  className = '',
  speed = 50,
  pauseDuration = 2000,
  singleLine = false,
  resetOnComplete = false
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const type = () => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause after typing
        setTimeout(() => {
          if (resetOnComplete) {
            // Disappear and restart
            setIsVisible(false);
            setTimeout(() => {
              setIsVisible(true);
              setDisplayedText('');
              setCharIndex(0);
              setCurrentIndex((currentIndex + 1) % texts.length);
            }, 500);
          } else {
            // Backspace effect (default behavior)
            setIsDeleting(true);
          }
        }, pauseDuration);
        return;
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        // Move to next text
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? (speed * 0.8) / 2 : speed * 0.8);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, texts, currentIndex, speed, pauseDuration, resetOnComplete]);

  // Format text with line breaks if not single line
  const formattedText = singleLine ? displayedText : displayedText.replace(/\n/g, '<br />');

  if (!isVisible) {
    return <span className={className}></span>;
  }

  return (
    <span className={`${className} typing-text`} style={singleLine ? { whiteSpace: 'nowrap' } : {}}>
      {singleLine ? (
        <>
          {formattedText}
          <span className="border-r-2 border-current animate-pulse"></span>
        </>
      ) : (
        <>
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
          <span className="border-r-2 border-current animate-pulse"></span>
        </>
      )}
    </span>
  );
};

export default TypingAnimation;