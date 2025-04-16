import { Image, ScrollView, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}>
        <Image source={icons.logo} className="w-10 mx-auto mt-20 h-9" />

        <View className="flex-1 mt-5">
          <SearchBar
            placeholder="Search for movies..."
            onPress={() => router.push("/search")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
