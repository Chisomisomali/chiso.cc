'use client';

import { useRef, useEffect, useState } from 'react';
import { processCommand, type CommandOutput } from '@/lib/terminal-commands';

export function TerminalEmulator() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const result = processCommand(currentInput);
      setHistory([...history, result]);

      // Handle exit command
      if (result.command.trim().toLowerCase() === 'exit') {
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      }

      // Handle clear command
      if (result.command.trim().toLowerCase() === 'clear') {
        setHistory([]);
      }

      setCurrentInput('');
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      {/* Glassmorphism Terminal Container */}
      <div className="w-full max-w-4xl h-full max-h-[90vh] rounded-2xl backdrop-blur-xl bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40 border border-purple-500/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="px-6 py-4 border-b border-purple-500/20 flex items-center justify-between bg-gradient-to-r from-purple-500/10 to-black/20">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70 backdrop-blur"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70 backdrop-blur"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70 backdrop-blur"></div>
            </div>
            <span className="text-green-400 font-mono text-sm ml-2 drop-shadow-lg">
              chisomo@geek-mode ~ 
            </span>
          </div>
          <span className="text-purple-400/70 font-mono text-xs drop-shadow-lg">Garuda Konsole Emulator</span>
        </div>

        {/* Terminal Output Area */}
        <div
          ref={outputRef}
          className="flex-1 overflow-y-auto px-6 py-4 font-mono text-sm space-y-2 scrollbar-hide"
        >
          {/* Welcome Message */}
          {history.length === 0 && (
            <div className="space-y-2">
              <div className="text-green-400/80 drop-shadow-lg">
                <p>╭─ Chisomo Misomali Portfolio Terminal ─────────────────────────╮</p>
                <p>│                                                             │</p>
                <p>│  Welcome to Geek Mode! Type 'help' for available commands. │</p>
                <p>│  Explore the portfolio using Linux-like commands.         │</p>
                <p>│                                                             │</p>
                <p>╰───────────────────────────────────────────────────────────╯</p>
              </div>
            </div>
          )}

          {/* Command History */}
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {/* Command Line */}
              <div className="flex items-center gap-2">
                <span className="text-purple-400 drop-shadow-lg">➜</span>
                <span className="text-green-400 drop-shadow-lg">portfolio</span>
                <span className="text-green-400/60 drop-shadow-lg">$</span>
                <span className="text-green-300 drop-shadow-lg">{item.command}</span>
              </div>

              {/* Command Output */}
              {item.output && (
                <div
                  className={`ml-4 whitespace-pre-wrap break-words ${
                    item.type === 'error'
                      ? 'text-red-400/90'
                      : item.type === 'info'
                        ? 'text-purple-400/80'
                        : 'text-green-300/80'
                  } drop-shadow-lg`}
                >
                  {item.output}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal Input Area */}
        <div className="border-t border-purple-500/20 px-6 py-3 bg-gradient-to-r from-purple-500/5 to-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-purple-400 drop-shadow-lg">➜</span>
            <span className="text-green-400 drop-shadow-lg">portfolio</span>
            <span className="text-green-400/60 drop-shadow-lg">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleCommand}
              onBlur={() => inputRef.current?.focus()}
              className="flex-1 bg-transparent text-green-300 outline-none drop-shadow-lg font-mono placeholder-green-400/30"
              placeholder="type command..."
              spellCheck="false"
              autoComplete="off"
            />
            <span className={`text-green-400 drop-shadow-lg transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              ▊
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
