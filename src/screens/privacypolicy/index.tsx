import React from "react";
import { StyleSheet, Text } from "react-native";
import { MotiScrollView } from "moti";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { Spacer } from "@/components/Spacer";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { TitleBulletPointItems } from "@/components/TitleBulletPointItems";

export const PrivacyPolicy = () => {
  const typeOfInfo = [
    "Personal Information: Such as your name, phone number, email address, and profile details when you create an account.",
    "Usage Data: Information about how you interact with our app, including generated images, favorites, and interactions.",
    "Device Information: Device type, operating system, and unique device identifiers.",
    "Location Data: Optional geolocation data for personalized experiences.",
    "Cookies and Tracking Technologies: To enhance functionality and user experience.",
  ];
  const useOfInfo = [
    "Provide and maintain our services.",
    "Personalize user experience and offer recommendations.",
  ];
  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <MotiScrollView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 600 }}
        contentContainerStyle={[globalstyles.mainView, { padding: 30 }]}
      >
        <Text style={styles.screenTitle}>Privacy Policy for Pixura</Text>

        <Text style={styles.screenSubtitle}>Last Updated:[Insert Date]</Text>

        <Spacer marginTop={15} />
        <Text style={styles.title}>Introduction</Text>
        <Text style={styles.title}>
          Welcome to Pixura. We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines how
          we collect, use, and safeguard your data when you use our mobile
          application and related services. By accessing or using Pixura, you
          agree to the terms outlined in this policy. If you do not agree,
          please refrain from using our services. Information We Collect
        </Text>

        <TitleBulletPointItems
          title="We collect various types of information to provide and improve our
          services, including:"
          data={typeOfInfo}
        />
        <Text style={styles.title}>How We Use Your Information</Text>
        <TitleBulletPointItems
          title="We use your information to:"
          data={useOfInfo}
        />
      </MotiScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(18),
    lineHeight: RFValue(19),
    color: "#242424",
  },
  screenSubtitle: {
    fontSize: RFValue(16),
    lineHeight: RFValue(16),
    color: "#242424",
    fontFamily: fonts.primary.medium,
  },
  title: {
    fontSize: RFValue(16),
    color: "#242424",
    fontFamily: fonts.primary.medium,
  },
  subtitle: {
    fontSize: RFValue(16),
    color: "#242424",
    fontFamily: fonts.primary.regular,
  },
});
