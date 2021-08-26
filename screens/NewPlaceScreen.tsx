import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/placesActions";
import ImgPicker from "../components/ImgPicker";
import LocationPicker from "../components/LocationPicker";
import MapPreview from "../components/MapPreview";

const NewPlaceScreen = (props: Object) => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const titleChangeHandler = (text: string) => {
    setTitle(text);
  };
  const dispatch = useDispatch();

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(title, selectedImage));
    props.navigation.goBack();
  };
  const imageTakenHandler = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={title}
        />
        <ImgPicker onImageTaken={imageTakenHandler} />
        <LocationPicker />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

export const screenOptions = (navData: Object) => {
  return {
    headerTitle: "Add Place",
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
