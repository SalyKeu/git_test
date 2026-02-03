import {
  createContext,
  useState,
  useContext,
  useEffect,
  useTransition,
} from "react";
import NavBar from "../components/NavBar";

const FocusContext = createContext();

export function FocusProvider({ children }) {
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [isFocusMode, setIsFocusMode] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [paused, setPaused] = useState(false);
  const [resumed, setResumed] = useState(false);
  const [reset, setReset] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [isNotFull, setIsNotFull] = useState(true);
  const [modeSelect, setModeSelect] = useState(false);

  const handleFocusTime = () => {
    setFocusTime(focusTime + 1);
  };

  const handleBreakTime = () => {
    setBreakTime(breakTime + 1);
  };
  const handleLongBreakTime = () => {
    setLongBreakTime(longBreakTime + 1);
  };

  const handleIsFocusMode = () => {
    setIsFocusMode(!isFocusMode);
  };

  const handleIsStarted = () => {
    setIsStarted(!isStarted);
  };

  const handleIsStopped = () => {
    setIsStopped(!isStopped);
  };

  const handlePaused = () => {
    setPaused(true);
    setResumed(false);
  };

  const handleResumed = () => {
    setPaused(false);
    setResumed(true);
  };
  const handleReset = () => {
    setIsStarted(false);
    setPaused(false);
    setResumed(false);
    setIsStopped(true);
    setReset((prev) => !prev);
  };
  const handleisFull = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFull(true);
      setIsNotFull(false);
    }
  };
  const handleisNotFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});

      setIsFull(false);
      setIsNotFull(true);
    }
  };
  const handleIsModeSelect = () => {
    setModeSelect(!modeSelect);
  };

  useEffect(() => {
    const updateFullscreenState = () => {
      const isFullscreen = Boolean(document.fullscreenElement);
      setIsFull(isFullscreen);
      setIsNotFull(!isFullscreen);
    };

    updateFullscreenState();
    document.addEventListener("fullscreenchange", updateFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", updateFullscreenState);
    };
  }, []);

  return (
    <FocusContext.Provider
      value={{
        focusTime,
        breakTime,
        longBreakTime,
        isFocusMode,
        isStarted,
        isStopped,
        paused,
        resumed,
        reset,
        isFull,
        isNotFull,
        modeSelect,
        handleisFull,
        handleisNotFull,
        handleIsFocusMode,
        handleIsStarted,
        handleIsStopped,
        handlePaused,
        handleResumed,
        handleFocusTime,
        handleBreakTime,
        handleLongBreakTime,
        handleReset,
        handleIsModeSelect,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}
export function useFocus() {
  const context = useContext(FocusContext);
  if (!context) {
    throw new Error("useFocus must be used within a FocusProvider");
  }
  return context;
}
