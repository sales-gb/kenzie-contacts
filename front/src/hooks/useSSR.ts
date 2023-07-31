import { useEffect, useState } from "react";

const useSsr = () => {
  const [isMounted, setIsMounted] = useState(false);

  const isDOM =
    typeof window !== "undefined" &&
    window.document &&
    window.document.documentElement;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return {
    isBrowser: isDOM && isMounted,
    isServer: !isDOM || !isMounted,
  };
};

export { useSsr };
