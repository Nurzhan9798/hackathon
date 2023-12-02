import { LatLngExpression } from "leaflet";

export interface Place {
  id: number;
  name: string;
  categoryId: number;
  image: string;
  locationCoordinate: LatLngExpression;
  rating: number;
  description: string;
  // TourList;
}

export const placesArray: Place[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (number) => {
    const place: Place = {
      id: number,
      name: `Place Number ${number}`,
      categoryId: (number % 5) + 1,
      image:
        "https://tengrinews.kz/userdata/news/2020/news_422927/resize/photo_345247.png",
      locationCoordinate: [
        43.753695 - number * 10e-2,
        51.240834 + number * 10e-2,
      ],
      rating: Math.random() * 5,
      description: `Place description Number ${number}`,
    };
    return place;
  },
);
