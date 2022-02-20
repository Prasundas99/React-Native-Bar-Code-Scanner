import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
export const Logic = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");
  
    const askForCameraPermission = () => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    };
  
    // Request Camera Permission
    useEffect(() => {
      askForCameraPermission();
    }, []);
  
    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setText(data);
      console.log("Type: " + type + "\nData: " + data);
    };
  
    // Check permissions and return the screens
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text>Requesting for camera permission</Text>
        </View>
      );
    }
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ margin: 10 }}>No access to camera</Text>
          <Button
            title={"Allow Camera"}
            onPress={() => askForCameraPermission()}
          />
        </View>
      );
    }


    return{
        handleBarCodeScanned,askForCameraPermission,text,scanned,hasPermission, setHasPermission,setScanned, setText
    }
}