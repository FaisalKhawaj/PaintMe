import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HomeIcon } from "@/assets/svg/HomeIcon";
import { AddIcon } from "@/assets/svg/AddIcon";
import { ProfileIcon } from "@/assets/svg/ProfileIcon";
import { CollectionIcon } from "@/assets/svg/CollectionsIcon";
import { useImageContext } from "@/src/context/ImageContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { showFullImage } = useImageContext();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => null,
        tabBarStyle: showFullImage
          ? { display: "none" }
          : [
              styles.tabBar,
              Platform.select({
                ios: { position: "absolute", bottom: 20, borderTopWidth: 0 },
                android: { borderTopWidth: 0 },
              }),
            ],
        tabBarItemStyle: styles.tabBarItem,
        tabBarShowLabel: false, // Hide label to match screenshot
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <HomeIcon color={focused ? "black" : "#999"} />
            </TabIconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <AddIcon color={focused ? "black" : "#999"} />
            </TabIconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <CollectionIcon color={focused ? "black" : "#999"} />
            </TabIconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabIconWrapper focused={focused}>
              <ProfileIcon color={focused ? "black" : "#999"} />
            </TabIconWrapper>
          ),
        }}
      />
    </Tabs>
  );
}

function TabIconWrapper({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) {
  return (
    <View style={[styles.iconWrapper, focused && styles.iconWrapperActive]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginHorizontal: 16,
    marginBottom: Platform.select({ ios: 2, android: 16 }),
    borderRadius: 30,
    height: 70,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS == "ios" ? "40%" : "50%",
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapperActive: {
    backgroundColor: "#efeff0",
  },
});
