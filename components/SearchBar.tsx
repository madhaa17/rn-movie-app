import { View, Text, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import { icons } from "@/constants/icons";

interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View className="flex-row items-center px-5 py-4 rounded-full bg-dark-100">
      <Image
        source={icons.search}
        className="size-5"
        resizeMethod="scale"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        onChangeText={() => {}}
        value=""
        placeholder={placeholder}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
