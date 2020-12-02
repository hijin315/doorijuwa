import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function SelectArea({navigation}) {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 250, width: 350 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="강북구-송중동" value="java" />
        <Picker.Item label="JavaScript8" value="js" />
        <Picker.Item label="JavaScript2" value="js" />
        <Picker.Item label="JavaScript3" value="js" />
        <Picker.Item label="JavaScript4" value="js" />
        <Picker.Item label="JavaScript5" value="js" />
        <Picker.Item label="JavaScript6" value="js" />
        <Picker.Item label="JavaScript7" value="js" />
        <Picker.Item label="JavaScript8" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
