import React from "react";

type Props = React.PropsWithChildren<{ className?: string }>; 

export default function Card({ children, className }: Props) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white ${className ?? ""}`}>{children}</div>
  );
}