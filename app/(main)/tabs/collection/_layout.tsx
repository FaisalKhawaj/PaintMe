import { Stack } from 'expo-router';
import { HeaderTitle } from '@/components/ui/HeaderTitle';
import { HeaderRoundedBack } from '@/components/ui/HeaderRoundedBack';

export default function CreateLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Collection',
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="all-collections" 
        options={{ 
          title: 'Collections',
          headerShown: false 
        }} 
      />
      {/* Add other create-related screens here */}
    </Stack>
  );
}