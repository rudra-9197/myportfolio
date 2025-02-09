// src/components/ui/input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}
