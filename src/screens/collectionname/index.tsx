import { ButtonVariation, LabelButton } from "@/components/LabelButton";
import { Spacer } from "@/components/Spacer";
import { globalstyles } from "@/src/styles/globalstyles";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { MotiView } from "moti";
import { useRouter } from "expo-router";
import { useValidations } from "@/src/validations/useValidations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/FormInput";

export const CollectionName = () => {
  const { collectionSchema } = useValidations();
  const {
    handleSubmit,
    control,

    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      collectionName: "",
    },
    resolver: zodResolver(collectionSchema),
    mode: "onChange",
  });
  const router = useRouter();
  const handleForm = () => {
    router.push(`/color-picker`);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalstyles.fullScreen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={globalstyles.mainWrap}>
          <MotiView
            style={globalstyles.innerWrap}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 200, duration: 500 }}
          >
            <MotiView
              style={{ flex: 1, justifyContent: "center" }}
              from={{ translateY: -50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 200, duration: 500 }}
            >
              <MotiView
                style={styles.tagAccessControl}
                from={{ scale: 0, rotate: "10deg" }}
                animate={{ scale: 1, rotate: "-10deg" }}
                transition={{ delay: 300, type: "spring" }}
              >
                <Text style={styles.tagAccessControlText}>my collection</Text>
              </MotiView>
              <Spacer marginTop={10} />
              <MotiView
                from={{ translateX: -50, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ delay: 400, duration: 500 }}
              >
                <Text style={globalstyles.headingText}>
                  Give your collection a name
                </Text>
              </MotiView>
              <Spacer marginTop={50} />
              {/* <View style={{ width:'100%',borderWidth:1,borderColor:'red' }}> */}

              <FormInput
                control={control}
                name="collectionName"
                placeholder="e.g The Aesthetic Arc"
                keyboardType="default"
              />
            </MotiView>
            <MotiView
              style={{ gap: 10 }}
              from={{ translateY: 50, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 600, duration: 500 }}
            >
              <LabelButton
                title="Continue"
                handleClick={handleSubmit(handleForm)}
                variation={
                  isValid ? ButtonVariation.default : ButtonVariation.disabled
                }
                disabled={!isValid}
              />
              {Platform.OS === "android" && <Spacer marginBottom={10} />}
            </MotiView>
          </MotiView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
