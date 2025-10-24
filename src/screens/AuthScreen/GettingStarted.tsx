import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { navigate } from "../../navigation/RootNavigation";
import { IMAGES, SCREENS } from "../../constants";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slices/AuthSlice";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    image1:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/07/image-2025-07-29T005428.323.png",
    image2:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/07/image-2025-07-29T005503.455.png",
    title: "Let’s be fashionable with HP Clothing & Apparel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tem",
  },
  {
    id: 2,
    image1:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/06/XvTKn4MijvuHaivQmqv7IhE6ZsksAE468vqJL5ao-226x300.jpg",
    image2:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/07/image-2025-07-29T005448.959.png",
    title: "Trendy collections at your fingertips",
    description:
      "Shop the latest styles with ease and discover fashion that defines you.",
  },
  {
    id: 3,
    image1:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/04/d0101h97797-600x600.jpg",
    image2:
      "https://highestpeakclothingandapparel.com/wp-content/uploads/2025/04/d0101h9x3ta-600x600.jpg",
    title: "Accessories to complete your look",
    description:
      "From bags to watches, find everything to complement your outfit.",
  },
];

const GettingStarted = () => {
  const dispatch = useDispatch();

  const handleNavigateToHome = () => {
    // Set user as logged in with dummy data
    dispatch(LoginUser({
      id: "guest",
      name: "Guest User",
      email: "guest@example.com",
      access_token: "guest_token"
    }));
    // Navigate to home screen
    navigate(SCREENS.HOME_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showsButtons={true}
        buttonWrapperStyle={styles.buttonWrapper}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        nextButton={<Text style={styles.buttonText}>›</Text>}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={slide.id}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: slide.image1 }} resizeMode="contain" style={styles.imageSmall} />
              <Image source={{ uri: slide.image2 }} style={styles.imageLarge} />
            </View>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>

            <TouchableOpacity
                style={styles.circularButton}
                onPress={handleNavigateToHome}
              >
                <Image
                  source={IMAGES.icplay} // logo.png
                  style={styles.playIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  imageSmall: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 12,
    marginBottom: -40,
    resizeMode: "contain",
  },
  imageLarge: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 12,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  dot: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#5a3e2b",
    width: 16,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  buttonWrapper: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    top: null,
    left: 0,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 0,
  },
  buttonText: {
    fontSize: 35,
    color: "#333",
    fontWeight: "bold",
  },
  circularButton: {
    position: "absolute",
    bottom: 40,
    right: 40,
    backgroundColor: "#5a3e2b",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  playIcon: {
    resizeMode:"contain",
    width:12
  },
});

export default GettingStarted;
