import React, { useState, useEffect } from "react";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useFocus } from "../hooks/useFocus";
import { hover } from "framer-motion";

function Focus() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const {
    isFocusMode,
    isStarted,
    isFull,
    isNotFull,
    focusTime,
    breakTime,
    paused,
    reset,
    longBreakTime,
    modeSelect,
    handleIsFocusMode,
    handleIsModeSelect,
    handleIsStarted,
    handleReset,
    handlePaused,
    handleResumed,
    handleisFull,
    handleisNotFull,
  } = useFocus();

  useEffect(() => {
    if (!isStarted || paused) {
      return;
    }

    const timerId = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isStarted, paused]);

  useEffect(() => {
    if (reset) {
      setElapsedSeconds(0);
    }
  }, [reset]);

  const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, "0");
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");

  return (
    <div className="text-center mt-10 bg-white p-10 ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-8 rounded-xl border-black border-4 p-4">
          <span className="button-primary">Focus Time</span>
          <span className="button-primary">Break</span>
          <span className="button-primary">Long Break</span>
        </div>
        {!isFull && (
          <span className="fixed inset-0 flex justify-center items-center font-sans font-extrabold text-black text-center select-none tracking-[-0.04em] leading-[0.9] text-[clamp(10rem,24vw,16rem)] transition-all duration-500 ease-in-out z-40 pointer-events-none opacity-100">
            {minutes}:{seconds}
          </span>
        )}
        {isFull && (
          <span className="fixed inset-0 flex justify-center items-center font-sans font-bold text-black text-center select-none tracking-[-0.04em] leading-[0.9] text-[clamp(10rem,24vw,30rem)] transition-all duration-500 ease-in-out z-40 pointer-events-none scale-100 opacity-100">
            {minutes}:{seconds}
          </span>
        )}

        <div
          className={`fixed bottom-0 left-0 right-0 flex gap-4 justify-center items-center p-25 z-50 pointer-events-auto transition-all duration-5wa 00 ease-in-out ${isFull ? "opacity-0 translate-y-8 hover:translate-y-0 hover:opacity-100 rounded border-black border-4" : "opacity-100 translate-y-10 rounded border-black border-4"}`}
        >
          {!isStarted && (
            <button
              onClick={handleIsStarted}
              className="button-primary button-primary:active"
            >
              Start
            </button>
          )}
          {isStarted && (
            <div className="flex gap-4">
              {paused ? (
                <button className="button-primary" onClick={handleResumed}>
                  Resume
                </button>
              ) : (
                <button className="button-primary" onClick={handlePaused}>
                  Pause
                </button>
              )}
              <button className="button-primary" onClick={handleIsStarted}>
                Stop
              </button>
              <button className="button-primary" onClick={handleReset}>
                Reset
              </button>
            </div>
          )}
          <button
            className="button-primary button-primary:active inline-flex items-center gap-2"
            onClick={handleIsModeSelect}
          >
            <IoMdSettings />
            <span>Settings</span>
          </button>
          <div className="flex justify-center items-center">
            {isNotFull && (
              <button
                className="button-primary button-primary:active inline-flex items-center gap-2"
                onClick={handleisFull}
              >
                <MdOpenInFull />
              </button>
            )}
            {isFull && (
              <button
                className="button-primary button-primary:active"
                onClick={handleisNotFull}
              >
                <MdOutlineCloseFullscreen />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Focus;
