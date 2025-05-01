import React from "react";
import { MotiScrollView } from "moti";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "@/hooks/useCacheResources";
import { globalstyles } from "@/src/styles/globalstyles";
import { TitleBulletPointItems } from "@/components/TitleBulletPointItems";
import { Spacer } from "@/components/Spacer";

export const License = () => {
  const allowed = [
    "Use any image generated with Pixura for personal or commercial projects—no limits. ",
    "Make as many copies as you need, whether for yourself or your clients.",
    "Share images wherever you like: websites, social media, eBooks, templates, and more.",
    "Edit images however you want—tweak, combine, or remix them to fit your vision.",
  ];

  const notAllowed = [
    "You cannot re-sell Pixura-generated images as standalone files.",
    "You cannot bundle our images to create your own stock image site or similar competing service.",
    "You cannot claim ownership of an image, even if edited. The original creator or algorithm retains the rights.",
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
        <Text style={styles.screenTitle}>Pixura License Agreement</Text>
        <Spacer marginTop={20} />
        <TitleBulletPointItems title="What’s Allowed" data={allowed} />
        <Spacer marginTop={20} />
        <TitleBulletPointItems title="What’s Not Allowed" data={notAllowed} />
        <Spacer marginTop={20} />
        <Text style={styles.title}>The Long and Short of It</Text>
        <Text style={styles.subtitle}>
          You don’t need permission or credit to use Pixura images, though we
          always appreciate a shoutout. You get a free, perpetual license to use
          Pixura-generated images however you like, except for creating a
          competing service or selling the images directly.
        </Text>
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
    fontFamily: fonts.primary.medium,
  },
});
