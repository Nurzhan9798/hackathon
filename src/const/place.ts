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

export interface Event {
  id: number;
  name: string;
  categoryId: number;
  image: string;
  locationCoordinate: LatLngExpression;
  rating: number;
  description: string;
  top: number;
  popular: number;
  visited: number;
}

export const getPlaceById = (id: number): Place => {
  const place = placesArray.find((p) => p.id === id);
  return place || placesArray[0];
};

export const getEventById = (id: number): Place => {
  const place = eventsArray.find((p) => p.id === id);
  return place || eventsArray[0];
};

export const getPlacesBySort = (sort: string): Place[] => {
  if (sort === "top") {
    return placesArray.sort((a, b) => a.rating - b.rating);
  }
  if (sort === "visit") {
    return placesArray.sort((a, b) => b.rating - a.rating);
  }
  if (sort === "popular") {
    return placesArray.sort((a, b) => a.rating - b.rating);
  }
  return [];
};

export const getEventsBySort = (sort: string): Event[] => {
  if (sort === "visit") {
    console.log("1 visited");
    return eventsArray.sort((a, b) => b.visited - a.visited);
  }
  if (sort === "top") {
    console.log("2 top");
    return eventsArray.sort((a, b) => a.top - b.top);
  }

  if (sort === "popular") {
    console.log("3 pop");
    return eventsArray.sort((a, b) => a.popular - b.popular);
  }
  return [];
};

export const placesArray: Place[] = [
  {
    id: 1,
    name: "Place 1",
    image: "",
    locationCoordinate: [12.345, 67.89],
    rating: 4.8,
    description: "Beautiful place for adventure seekers.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 2,
    name: "Place 2",
    image: "",
    locationCoordinate: [23.456, 45.678],
    rating: 4.2,
    description: "Explore the rich cultural heritage.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 3,
    name: "Place 3",
    image: "",
    locationCoordinate: [34.567, 56.789],
    rating: 4.5,
    description: "Connect with nature in this serene location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 4,
    name: "Place 4",
    image: "",
    locationCoordinate: [45.678, 78.901],
    rating: 4.0,
    description: "Exciting sports activities await you.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 5,
    name: "Place 5",
    image: "",
    locationCoordinate: [56.789, 89.012],
    rating: 4.7,
    description: "Learn about the fascinating history.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 6,
    name: "Place 6",
    image: "",
    locationCoordinate: [67.89, 90.123],
    rating: 3.8,
    description: "Indulge in delicious local food.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 7,
    name: "Place 7",
    image: "",
    locationCoordinate: [78.901, 12.345],
    rating: 4.9,
    description: "Shop till you drop in this vibrant location.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 8,
    name: "Place 8",
    image: "",
    locationCoordinate: [89.012, 23.456],
    rating: 4.3,
    description: "Enjoy live music performances.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 9,
    name: "Place 9",
    image: "",
    locationCoordinate: [90.123, 34.567],
    rating: 3.5,
    description: "Discover the wonders of science.",
    categoryId: 1,
    tourList: [],
  },
  {
    id: 10,
    name: "Place 10",
    image: "",
    locationCoordinate: [12.345, 45.678],
    rating: 4.6,
    description: "A perfect blend of nature and adventure.",
    categoryId: 1,
    tourList: [],
  },
];
export const eventsArray: Event[] = [
  // {
  //   id: 2,
  //   name: "Event 2",
  //   image: "",
  //   locationCoordinate: [23.456, 45.678],
  //   rating: 4.2,
  //   description: "Explore the rich cultural heritage.",
  //   categoryId: 1,
  //   tourList: [],
  // },
  {
    id: 1,
    name: "Sadraddin в Актау",
    image: "https://cdn.kino.kz/partners-events/SadraddinvAktau/p1192x597.webp",
    locationCoordinate: [12.345, 67.89],
    rating: 4.8,
    description:
      "Друзья, радостная новость для всех поклонников музыки и творчества! Приглашаем вас на незабываемое музыкальное событие - сольный концерт Sadraddin с оркестровым сопровождением, который состоится 12 ноября на зрелищной площадке Музея Первого Президента!\n" +
      "\n" +
      "Sadraddin - это уникальный исполнитель, чья музыка завораживает сердца и дарит волшебные эмоции. На этом концерте вы окунетесь в потрясающий мир звуков и слов, который будет поддержан прекрасными звучаниями оркестра.\n" +
      "\n" +
      "Оркестровое сопровождение придаст каждой композиции гармоничность и мощь, погрузив вас в музыкальное волшебство и создав уникальное звуковое путешествие.\n" +
      "\n" +
      "Подготовьтесь к захватывающему шоу, в котором примут участие талантливые музыканты и хореографы! Наша команда работает над каждой деталью, чтобы вечер стал незабываемым для каждого из вас.\n" +
      "\n" +
      "Не упустите возможность погрузиться в мир музыки и творчества Sadraddin! Приходите с семьей и друзьями, чтобы разделить радость и восторг от прекрасной музыки вместе.\n" +
      "\n" +
      "Билеты уже в продаже, и количество мест ограничено. Успейте забронировать лучшие места и присоединиться к этому уникальному событию!\n",
    categoryId: 1,
    popular: 10,
    top: 2,
    visited: 3,
  },
  {
    id: 3,
    name: "ALPHA in Aktau",
    image: "https://cdn.kino.kz/partners-events/ALPHAvAktau/p1192x597.webp",
    locationCoordinate: [34.567, 56.789],
    rating: 4.5,
    description: "Aktau, Mangystau-Arena, ​33rd microdistrict, 27",
    categoryId: 1,
    popular: 23,
    top: 43,
    visited: 1,
  },
  {
    id: 4,
    name: "QAZAQSHA ТЕРАПИЯ",
    image:
      "https://cdn.kino.kz/partners-events/QAZAQSHATERAPIIa/p1192x597.webp",
    locationCoordinate: [45.678, 78.901],
    rating: 4.0,
    description: "Алматы, «Алатау» дәстүрлі өнер театры, Нұркент ықш., 6",
    categoryId: 1,
    popular: 14,
    top: 21,
    visited: 45,
  },
  {
    id: 5,
    name: "Алматы қаласында Гурам Амарянның Стенд-ап концерті",
    image:
      "https://cdn.kino.kz/partners-events/StendapkontsertGuramaAmarianavAlmaty/p1192x597.webp",
    locationCoordinate: [56.789, 89.012],
    rating: 4.7,
    description:
      'Гурам Амарянның "Қонақ" атты жаңа концерті, онда ол жиырма жылдан астам уақыт бұрын даңқ пен жақсы өмір іздеп Отанынан кеткен шығыс жігітінің өмірі туралы айтады. Концертте суретші өзінің азабы мен шынайы тәжірибесін қайтадан әзілге аударады.\n' +
      'Алдыңғы концерттегідей "Адамдар не дейді?" Гурамның өміріндегі шынайы оқиғалар, оның ойлары мен пайымдаулары мүмкіндігінше көптеген бақылаулар мен күлкілі әзілдермен сұйылтылады',
    categoryId: 1,
    popular: 123,
    top: 54,
    visited: 254,
  },
  {
    id: 6,
    name: "JANAGA в Алматы",
    image: "https://cdn.kino.kz/partners-events/JANAGAvAlmaty/p1192x597.webp",
    locationCoordinate: [67.89, 90.123],
    rating: 3.8,
    description: "JANAGA в Алматы",
    categoryId: 1,
    popular: 32,
    top: 54,
    visited: 32,
  },
  // {
  //   id: 7,
  //   name: "Event 7",
  //   image: "",
  //   locationCoordinate: [78.901, 12.345],
  //   rating: 4.9,
  //   description: "Shop till you drop in this vibrant location.",
  //   categoryId: 1,
  //   tourList: [],
  // },
  // {
  //   id: 8,
  //   name: "Event 8",
  //   image: "",
  //   locationCoordinate: [89.012, 23.456],
  //   rating: 4.3,
  //   description: "Enjoy live music performances.",
  //   categoryId: 1,
  //   tourList: [],
  // },
  // {
  //   id: 9,
  //   name: "Event 9",
  //   image: "",
  //   locationCoordinate: [90.123, 34.567],
  //   rating: 3.5,
  //   description: "Discover the wonders of science.",
  //   categoryId: 1,
  //   tourList: [],
  // },
  // {
  //   id: 10,
  //   name: "Event 10",
  //   image: "",
  //   locationCoordinate: [12.345, 45.678],
  //   rating: 4.6,
  //   description: "A perfect blend of nature and adventure.",
  //   categoryId: 1,
  //   tourList: [],
  // },
];
