import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic2FuamFuYS0yMDAwIiwiYSI6ImNrc3NtMWl2MzB4Y3UzMm9kMXIwdnFxNDEifQ.EiS_sJK7NMrv52hc6CCDDA"
);

MapboxGL.setConnected(true);
const MapPreview = (props: Object) => {};

const styles = StyleSheet.create({
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapPreview;
