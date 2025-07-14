import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  // constantes de configuracion
    // const focus = 1500
  const focus = 2
  // const rest = 300
  const rest = 3
  const longRest = 1200



  const [FocusCount, setFocusCount] = useState(1);
  const [time, setTime] = useState(focus);
  const [PrevFocus, setPrevFocus] = useState(focus);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime - 1 >= 0) {
            return prevTime - 1
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (PrevFocus == focus) {
              setFocusCount(prevValue => prevValue + 1)
              setPrevFocus(rest)
              if (FocusCount == 4) {
               return longRest 
              } else {
                return rest
              }
            } else {
              setPrevFocus(focus)
              return focus
            }
          }
        }); // Update every 1second
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true)
  };
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(focus);
  };

  // Format the remaining time for display
  const formatTime = (timeInSeconds:number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };



  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.timer}> {formatTime(time)} </Text>

      {/* <Button onPress={() => setSeconds(20)} title="start" /> */}
      {isRunning ? null : <Button onPress={handleStart} title="start" />}

      {/* <Button onPress={handlePause} title="pause" /> */}
      {/* <Button onPress={handleReset} title="reset" /> */}


    </View>
  );
}




const styles = StyleSheet.create({
  timer: {
    fontSize: 50
  },
});
