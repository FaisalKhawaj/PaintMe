import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export const fontAssets = [
  {
    bold: require("../assets/fonts/GeneralSans-Bold.otf"),
  },
  {
    boldItalic: require("../assets/fonts/GeneralSans-BoldItalic.otf"),
  },
  {
    extraLight: require("../assets/fonts/GeneralSans-Extralight.otf"),
  },
  {
    extraLightItalic: require("../assets/fonts/GeneralSans-ExtralightItalic.otf"),
  },

  {
    italic: require("../assets/fonts/GeneralSans-Italic.otf"),
  },
  {
    light: require("../assets/fonts/GeneralSans-Light.otf"),
  },
  {
    lightItalic: require("../assets/fonts/GeneralSans-LightItalic.otf"),
  },
  {
    medium: require("../assets/fonts/GeneralSans-Medium.otf"),
  },
  {
    mediumItalic: require("../assets/fonts/GeneralSans-MediumItalic.otf"),
  },
  {
    regular: require("../assets/fonts/GeneralSans-Regular.otf"),
  },
  {
    semiBold: require("../assets/fonts/GeneralSans-Semibold.otf"),
  },
  {
    semiBoldItalic: require("../assets/fonts/GeneralSans-SemiboldItalic.otf"),
  },
].map((x: any) => Font.loadAsync(x));

export const fonts = {
  primary: {
    boldItalic: "boldItalic",
    bold: "bold",
    extraLight: "extraLight",
    extraLightItalic: "extraLightItalic",
    italic: "italic",
    light: "light",
    lightItalic: "lightItalic",
    medium: "medium",
    mediumItalic: "mediumItalic",
    regular: "regular",
    semibold: "semiBold",
    semiboldItalic: "semiBoldItalic",
  },
};

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHideAsync();
      // Load fonts

      // await Font.loadAsync(fontAssets);
      await Promise.all([...fontAssets]);
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      //  setTimeout(SplashScreen.hideAsync, 10000);
      SplashScreen.hideAsync();
    }
  }
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, setLoadingComplete };
}
