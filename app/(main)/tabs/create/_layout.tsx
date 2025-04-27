import { Stack } from 'expo-router';
import { HeaderTitle } from '@/components/ui/HeaderTitle';
import { HeaderRoundedBack } from '@/components/ui/HeaderRoundedBack';

export default function CreateLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Create',
          headerShown: false 
        }} 
      />
      <Stack.Screen
        name="choose-orientation"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown:false,
          headerTitle: () => <HeaderTitle title="Choose Orientation" />,
        }}
      />
      <Stack.Screen
        name="image-progress"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown:false,
          headerTitle: () => <HeaderTitle title="Image Progress" />,
        }}
      />
      <Stack.Screen
        name="image-created"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown:false,
          headerTitle: () => <HeaderTitle title="Image Created" />,
        }}
      />
      <Stack.Screen
        name="generated-image-selected"
        options={{
          headerLeft: () => <HeaderRoundedBack />,
          headerShadowVisible: false,
          title: "",
          headerShown:false,
          headerTitle: () => <HeaderTitle title="Generated Image Selected" />,
        }}
      />
      {/* Add other create-related screens here */}
    </Stack>
  );
}