import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>; 

export default function Section({ children, className }: Props) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className ?? ""}`}>{children}</div>
  );
}