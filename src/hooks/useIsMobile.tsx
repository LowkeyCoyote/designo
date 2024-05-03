import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    updateIsMobile();

    return () => {
    };
  }, []); 

  return isMobile;
};

export default useIsMobile;