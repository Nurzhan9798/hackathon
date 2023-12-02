import { LatLngExpression } from "leaflet";

export interface Place {
  id: number;
  name: string;
  categoryId: number;
  image: string;
  locationCoordinate: LatLngExpression;
  rating: number;
  description: string;
  tourList?: any[];
}

export const getPlaceById = (id: number): Place => {
  const place = placesArray.find((p) => p.id === id);
  return place || placesArray[0];
};

export const getEventById = (id: number): Place => {
  const place = eventsArray.find((p) => p.id === id);
  return place || eventsArray[0];
};

export const placesArray: Place[] = [
  {
    id: 1,
    name: "Place 1",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/1.jpg",
    locationCoordinate: [12.345, 67.89],
    rating: 4.8,
    description: "Beautiful place for adventure seekers.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 2,
    name: "Place 2",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/2.jpg",
    locationCoordinate: [23.456, 45.678],
    rating: 4.2,
    description: "Explore the rich cultural heritage.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 3,
    name: "Place 3",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/3.jpg",
    locationCoordinate: [34.567, 56.789],
    rating: 4.5,
    description: "Connect with nature in this serene location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 4,
    name: "Place 4",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/4.jpg",
    locationCoordinate: [45.678, 78.901],
    rating: 4.0,
    description: "Exciting sports activities await you.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 5,
    name: "Place 5",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/5.jpg",
    locationCoordinate: [56.789, 89.012],
    rating: 4.7,
    description: "Learn about the fascinating history.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 6,
    name: "Place 6",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/6.jpg",
    locationCoordinate: [67.89, 90.123],
    rating: 3.8,
    description: "Indulge in delicious local food.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 7,
    name: "Place 7",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/7.jpg",
    locationCoordinate: [78.901, 12.345],
    rating: 4.9,
    description: "Shop till you drop in this vibrant location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 8,
    name: "Place 8",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/8.jpg",
    locationCoordinate: [89.012, 23.456],
    rating: 4.3,
    description: "Enjoy live music performances.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 9,
    name: "Place 9",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/9.jpg",
    locationCoordinate: [90.123, 34.567],
    rating: 3.5,
    description: "Discover the wonders of science.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 10,
    name: "Place 10",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/10.jpg",
    locationCoordinate: [12.345, 45.678],
    rating: 4.6,
    description: "A perfect blend of nature and adventure.",
    categoryId: 1,
    tourList: [],
  },
];
export const eventsArray: Place[] = [
  {
    id: 1,
    name: "Event 1",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/1.jpg",
    locationCoordinate: [12.345, 67.89],
    rating: 4.8,
    description: "Beautiful place for adventure seekers.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 2,
    name: "Event 2",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/2.jpg",
    locationCoordinate: [23.456, 45.678],
    rating: 4.2,
    description: "Explore the rich cultural heritage.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 3,
    name: "Event 3",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/3.jpg",
    locationCoordinate: [34.567, 56.789],
    rating: 4.5,
    description: "Connect with nature in this serene location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 4,
    name: "Event 4",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/4.jpg",
    locationCoordinate: [45.678, 78.901],
    rating: 4.0,
    description: "Exciting sports activities await you.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 5,
    name: "Event 5",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/5.jpg",
    locationCoordinate: [56.789, 89.012],
    rating: 4.7,
    description: "Learn about the fascinating history.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 6,
    name: "Event 6",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/6.jpg",
    locationCoordinate: [67.89, 90.123],
    rating: 3.8,
    description: "Indulge in delicious local food.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 7,
    name: "Event 7",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/7.jpg",
    locationCoordinate: [78.901, 12.345],
    rating: 4.9,
    description: "Shop till you drop in this vibrant location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 8,
    name: "Event 8",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/8.jpg",
    locationCoordinate: [89.012, 23.456],
    rating: 4.3,
    description: "Enjoy live music performances.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 9,
    name: "Event 9",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/9.jpg",
    locationCoordinate: [90.123, 34.567],
    rating: 3.5,
    description: "Discover the wonders of science.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 10,
    name: "Event 10",
    image: "http://d622-95-56-1-0.ngrok-free.app/media/places/10.jpg",
    locationCoordinate: [12.345, 45.678],
    rating: 4.6,
    description: "A perfect blend of nature and adventure.",
    categoryId: 1,
    tourList: [],
  },
];
