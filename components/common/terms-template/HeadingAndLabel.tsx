import React from "react";
export const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-base md:text-md text-muted leading-7 font-normal">{children}</p>
  );
  
  export const TertiaryHeading = ({ children }: { children: React.ReactNode }) => (
    <div className="text-2xl font-semibold text-loud">{children}</div>
  );
  
  export const getAlphabetLabel = (index: number) => String.fromCharCode(97 + index);