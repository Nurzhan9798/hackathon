import * as React from "react";
import { ReactComponent as CafeIcon } from "../assets/Group 579.svg";
import { ReactComponent as PlaceIcon } from "../assets/Vector-2.svg";
import { ReactComponent as HotelIcon } from "../assets/Vector.svg";
import { ReactComponent as Icon1 } from "../assets/Vector-4.svg";
import { ReactComponent as Icon2 } from "../assets/Vector-5.svg";
import { ReactComponent as Icon3 } from "../assets/Vector-3.svg";

export interface Category {
  id: number;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  name: string;
}

export const categoriesArray: Category[] = [
  {
    id: 1,
    icon: HotelIcon,
    name: "Гостиница",
  },
  {
    id: 2,
    icon: CafeIcon,
    name: "Кафе",
  },
  {
    id: 3,
    icon: PlaceIcon,
    name: "Достопримечательности",
  },
  {
    id: 4,
    icon: PlaceIcon,
    name: "Болница",
  },
  {
    id: 5,
    icon: HotelIcon,
    name: "Аэропорт",
  },
  {
    id: 6,
    icon: CafeIcon,
    name: "Поездь",
  },
  {
    id: 7,
    icon: PlaceIcon,
    name: "Театр",
  },
  {
    id: 8,
    icon: PlaceIcon,
    name: "Обменять деньги",
  },
];
export const homeCategoriesArray: Category[] = [
  {
    id: 1,
    icon: Icon1,
    name: "Самый посещаемый",
  },
  {
    id: 2,
    icon: Icon2,
    name: "TOP",
  },
  {
    id: 3,
    icon: Icon3,
    name: "Самые популярные",
  },
];
