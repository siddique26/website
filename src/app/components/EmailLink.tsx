'use client';

import { useState, useEffect } from 'react';

export default function EmailLink() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText('siddijafr@gmail.com');
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000); // Reset after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <a className="list-item link" href="#" onClick={copyEmail}>
      Contact me <span className="copy-text">
        {copied ? (
          <>[Copied]</>
        ) : (
          '[Copy email]'
        )}
      </span>
    </a>
  );
} 