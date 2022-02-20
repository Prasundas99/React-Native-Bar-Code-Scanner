import React  from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles/index.js";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Logic } from "./components/logic.js";
export default function App() {
const {handleBarCodeScanned,text,scanned,setScanned} = Logic()

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}
    </View>
  );
}

