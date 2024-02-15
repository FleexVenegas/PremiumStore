import { ChangeEventHandler } from "react";

export interface InputProps {
    className?: string;
    text?: string;
    name: string
    placeholder?: string;
    type?: string
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  }