import { TagText } from "@/components/TagText";
import { HeaderRoundedBack } from "@/components/ui/HeaderRoundedBack";
import { HeaderTitle } from "@/components/ui/HeaderTitle";
import { Stack } from "expo-router";
import { SafeAreaView, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitleShadowVisible: false,
      }}
    >
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="edit-pic" options={{ headerShown: false }} />

      <Stack.Screen name="edit-profile" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          title: "",

          headerTitle: () => (
            <TagText
              rotate="-5deg"
              title="settings"
              tagBgColor="#FBE7C6"
              tagTextColor="#3B302A"
            />
          ),
        }}
      />

      <Stack.Screen
        name="payment-methods"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTransparent: true,
          contentStyle: {
            paddingTop: 50,
            overflow: "hidden",
            backgroundColor: "transparent",
          },
          headerTitle: () => <HeaderTitle title="payment methods" />,
        }}
      />
    </Stack>
  );
}
