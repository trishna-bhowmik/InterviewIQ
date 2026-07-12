"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, Square } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export function AnswerBox({
  value,
  onChange,
}: Props) {
  const [recording, setRecording] =
    useState(false);

  const recognitionRef =
    useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition =
      new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let transcript = "";

      for (
        let i = 0;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0].transcript + " ";
      }

      onChange(transcript.trim());
    };

    recognition.onend = () => {
      setRecording(false);
    };

    recognitionRef.current = recognition;
  }, [onChange]);

  const startRecording = () => {
    if (!recognitionRef.current) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    recognitionRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="space-y-4">

      <textarea
        rows={8}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Type or speak your answer..."
        className="w-full rounded-xl border p-5"
      />

      <div className="flex gap-3">

        {!recording ? (
          <button
            onClick={startRecording}
            className="flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2 text-white"
          >
            <Mic size={18} />
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            <Square size={18} />
            Stop Recording
          </button>
        )}

      </div>

    </div>
  );
}