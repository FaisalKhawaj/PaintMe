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

          headerTitle: () => <HeaderTitle title="payment methods" />,
        }}
      />

      <Stack.Screen
        name="add-payment-method"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => <HeaderTitle title="payment methods" />,
        }}
      />

      <Stack.Screen
        name="connected-accounts"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => <HeaderTitle title="connected accounts" />,
        }}
      />

      <Stack.Screen
        name="alert"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => (
            <TagText rotate="-10deg" title="alert" tagBgColor="#C8B6FF" />
          ),
        }}
      />

      <Stack.Screen
        name="account"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => <HeaderTitle title="account" />,
        }}
      />

      <Stack.Screen
        name="privacy-policy"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => <HeaderTitle title="privacy policy" />,
        }}
      />
      <Stack.Screen
        name="image-select"
        options={{
          headerShown: false,
          // headerLeft: () => <HeaderRoundedBack />,
          // headerShadowVisible: false,
          // title: "",
          // headerTitle: () => <HeaderTitle title="image-select" />,
        }}
      />

      <Stack.Screen
        name="license"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerTitle: () => <HeaderTitle title="license" />,
        }}
      />

      <Stack.Screen
        name="my-profile"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerTitle: () => (
            <TagText rotate="-10deg" title="my profile" tagBgColor="#C8B6FF" />
          ),
        }}
      />
      <Stack.Screen
        name="retouch-image"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",

          headerShown: false,
          headerTitle: () => <HeaderTitle title="retouch-image" />,
        }}
      />
      <Stack.Screen
        name="create-similar"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",

          headerShown: false,
          headerTitle: () => <HeaderTitle title="create-similar" />,
        }}
      />
      <Stack.Screen
        name="create-image"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",

          headerShown: false,
          headerTitle: () => <HeaderTitle title="create-image" />,
        }}
      />
      <Stack.Screen
        name="choose-style"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",

          headerShown: false,
          headerTitle: () => <HeaderTitle title="choose-style" />,
        }}
      />
      <Stack.Screen
        name="generated-image-selected"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown: false,
          headerTitle: () => <HeaderTitle title="Generated Image Selected" />,
        }}
      />
      <Stack.Screen
        name="collection-name"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown: false,
          headerTitle: () => <HeaderTitle title="Collection Name" />,
        }}
      />
      <Stack.Screen
        name="color-picker"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown: false,
          headerTitle: () => <HeaderTitle title="Color picker" />,
        }}
      />
    </Stack>
  );
}
