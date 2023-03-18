import React, { useState, useEffect } from 'react';
import styles from './styles/TypewriterAnimation.module.scss';

function Typewriter({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  let router = useRouter();

  useEffect(() => {
    let timeoutId;

    const animateText = () => {
      if (displayedText.length < texts[currentIndex].length) {
        setDisplayedText(texts[currentIndex].slice(0, displayedText.length + 1));
        timeoutId = setTimeout(animateText, 100);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % texts.length);
          setDisplayedText('');
          animateText();
        }, 3000);
      }
    };

    animateText();

    return () => clearTimeout(timeoutId);
  }, [currentIndex, displayedText.length, texts]);

  return (
    <div className={styles.typewriter_container}>
        <span className={styles.typewriter}>{displayedText}</span>
    </div>
  );
}

export default Typewriter;
