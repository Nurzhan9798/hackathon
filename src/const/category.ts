import * as React from "react";
import { ReactComponent as CafeIcon } from "../assets/Group 579.svg";
import { ReactComponent as PlaceIcon } from "../assets/Vector-2.svg";
import { ReactComponent as HotelIcon } from "../assets/Vector.svg";

export interface Category {
  id: number;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  name: string;
}

export const categories: Category[] = [
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
    name: "Аэропорт",
  },
];
