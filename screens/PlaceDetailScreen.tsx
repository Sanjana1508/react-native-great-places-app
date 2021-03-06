import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";

import MapPreview from "../components/MapPreview";
import { RootState } from "../App";
import Place from "../models/place";
import Colors from "../constants/Colors";

const PlaceDetailScreen = (props: Object) => {
  const placeId = props.route.params.placeId;
  const selectedPlace = useSelector((state: RootState) =>
    state.places.places.find((place: Place) => place.id === placeId)
  );

  const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng };

  const showMapHandler = () => {
    props.navigation.navigate("Map", {
      readOnly: true,
      initialLocation: selectedLocation,
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={{ uri: selectedPlace.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{selectedPlace.address}</Text>
        </View>
        <MapPreview
          location={selectedLocation}
          style={styles.mapPreview}
          onPress={showMapHandler}
        />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData: Object) => {
  return {
    headerTitle: navData.route.params.placeTitle,
  };
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  locationContainer: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default PlaceDetailScreen;
