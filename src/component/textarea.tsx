// src/components/ui/textarea.tsx
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}
