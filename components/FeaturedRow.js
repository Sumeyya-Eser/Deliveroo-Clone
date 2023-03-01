import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/**RestaurantCards */}
        <RestaurantCards
          genre="Japanese"
          title="Yo! Sushi"
          rating="4.5"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelMYI_TjpcE5ILvjs_lXmZKPzp75dD0vFTw&usqp=CAU"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
