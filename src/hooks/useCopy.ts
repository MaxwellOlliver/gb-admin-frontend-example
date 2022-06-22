import { useRef, useState } from "react";

export default function useCopy(options?: { reset: number }) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<any>();

  const copy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        timeout.current = setTimeout(
          () => setCopied(false),
          options?.reset || 5000
        );
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;

      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand("copy");

      document.body.removeChild(textArea);
      setCopied(true);
      timeout.current = setTimeout(
        () => setCopied(false),
        options?.reset || 5000
      );
    }
  };

  return { copied, copy };
}
