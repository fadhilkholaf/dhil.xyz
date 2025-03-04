"use client";

import { ReactNode, useEffect, useRef } from "react";

import { LenisRef, ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion";

const LenisWrapper = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    console.log(`
        ___         ___     
       /  /\\       /__/|    
      /  /:/_     |  |:|    
     /  /:/ /\\    |  |:|    
    /  /:/ /:/  __|  |:|    
   /__/:/ /:/  /__/\\_|:|____
   \\  \\:\\/:/   \\  \\:\\/:::::/
    \\  \\::/     \\  \\::/~~~~ 
     \\  \\:\\      \\  \\:\\     
      \\  \\:\\      \\  \\:\\    
       \\__\\/       \\__\\/    
   `);

    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
