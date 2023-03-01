import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/**CategoryCard */}
      <CategoryCard
        imgUrl="https://img.freepik.com/premium-photo/delicious-pizza-professional-photography_741265-42.jpg?w=1480"
        title="Pizza"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/thai-soup-006-2099012.jpg"
        title="Thai"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/sushi-11834925.jpg"
        title="Sushi"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/z/premium-quality-sushi-rolls-served-japanese-restaurant-asian-food-background-45337979.jpg"
        title="Asian"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/z/healthy-fast-food-vegan-rye-burger-fresh-vegetables-old-wooden-background-54827910.jpg"
        title="Burger"
      />
      <CategoryCard
        imgUrl="https://thumbs.dreamstime.com/b/adana-kebab-turkish-food-minced-meat-61568345.jpg"
        title="Kebap"
      />
    </ScrollView>
  );
};

export default Categories;
