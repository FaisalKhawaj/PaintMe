import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="splash"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="camera-access"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="enter-number"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="enter-otp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome-final"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
