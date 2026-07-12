"use client";

import { Volume2, Square } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

interface Props {
  text: string;
  onSpeakingChange?: (
    speaking: boolean
  ) => void;
}

export function SpeakButton({
  text,
  onSpeakingChange,
}: Props) {
  const [speaking, setSpeaking] =
    useState(false);

  const speak = () => {
    speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 1;

    utterance.onstart = () => {
      setSpeaking(true);
      onSpeakingChange?.(true);
    };

    utterance.onend = () => {
      setSpeaking(false);
      onSpeakingChange?.(false);
    };

    speechSynthesis.speak(
      utterance
    );
  };

  useEffect(() => {
    speak();

    return () => {
      speechSynthesis.cancel();
    };
  }, [text]);

  return (
    <button
      onClick={() => {
        if (speaking) {
          speechSynthesis.cancel();
          setSpeaking(false);
          onSpeakingChange?.(false);
        } else {
          speak();
        }
      }}
      className={`flex items-center gap-2 rounded-lg px-5 py-3 text-white transition ${
        speaking
          ? "bg-red-600 hover:bg-red-700"
          : "bg-indigo-900 hover:bg-indigo-950"
      }`}
    >
      {speaking ? (
        <>
          <Square size={18} />
          Stop
        </>
      ) : (
        <>
          <Volume2 size={18} />
          Listen Again
        </>
      )}
    </button>
  );
}