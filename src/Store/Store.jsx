import drinkImg from "../assets/Imgs/drink.png";
import desertImg from "../assets/Imgs/desert.png";
import pastaImg from "../assets/Imgs/pasta.png";
import { create } from "zustand";

export const useCategories = create((set) => ({
  data: [
    { documentId: 1, name: "Cold Drinks", path: "drink", imgUrl: drinkImg },
    { documentId: 2, name: "desert", path: "desert", imgUrl: desertImg },
    { documentId: 3, name: "Pasta", path: "pasta", imgUrl: pastaImg },
    { documentId: 4, name: "pasta", path: "pasta", imgUrl: pastaImg },
    { documentId: 5, name: "Deserts", path: "desert", imgUrl: desertImg },
    { documentId: 6, name: "Cold Drink", path: "drink", imgUrl: drinkImg },
  ],

  active_cat_id: 0,
  setActiveId: (activeTab) => set(() => ({ active_cat_id: activeTab })),
  resetActiveId: () => set(() => ({ active_cat_id: 0 })),
}));
