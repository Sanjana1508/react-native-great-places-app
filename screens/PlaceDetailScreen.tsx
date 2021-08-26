import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props: Object) => {
  return (
    <View>
      <Text>Place Detail Screen</Text>
    </View>
  );
};

export const screenOptions = (navData: Object) => {
  return {
    headerTitle: navData.route.params.placeTitle,
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
