import { Redirect } from "expo-router";
import { useAuth } from "@/src/context/AuthProvider";

export default function Index() {
  const { isLoggedin }: any = useAuth();
  // Redirect based on auth state
  if (isLoggedin) {
    return <Redirect href="/(main)/tabs" />;
  }

  return <Redirect href="/(auth)/splash" />;
}
