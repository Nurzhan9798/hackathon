import classNames from "classnames";
import { Icon, LatLng, LatLngExpression, LocationEvent } from "leaflet";
import { useState } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Link } from "react-router-dom";
import cls from "./Map.module.css";
import { ReactComponent as HotelIcon } from "../../assets/Vector.svg";
import { ReactComponent as PlaceIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as CafeIcon } from "../../assets/Group 579.svg";

interface MapProps {
  className?: string;
}

const placesCategories = [
  {
    icon: HotelIcon,
    text: "Hotel",
    category: 1,
  },
  {
    icon: CafeIcon,
    text: "Cafe",
    category: 2,
  },
  {
    icon: PlaceIcon,
    text: "Places",
    category: 3,
  },
];

interface Place {
  id: number;
  name: string;
  category: number;
  shortDesc: string;
  location: LatLngExpression;
}

const places: Place[] = [
  {
    id: 1,
    name: "Place 1 sdfjlnjsdlf kjsalkd fnsjkldf;jk ajsdfkl; kasdjf ajsdfk sd",
    category: 1,
    shortDesc: "desc 1",
    location: [43.693695, 51.240834],
  },
  {
    id: 2,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.703695, 51.240834],
  },
  {
    id: 3,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.713695, 51.240834],
  },
  {
    id: 3,
    name: "Place 1 sdfjlnjsdlf kjsalkd fnsjkldf;jk ajsdfkl; kasdjf ajsdfk sd",
    category: 1,
    shortDesc: "desc 1",
    location: [43.693695, 51.240834],
  },
  {
    id: 4,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.703695, 51.240834],
  },
  {
    id: 5,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.713695, 51.240834],
  },
  {
    id: 6,
    name: "Place 1 sdfjlnjsdlf kjsalkd fnsjkldf;jk ajsdfkl; kasdjf ajsdfk sd",
    category: 1,
    shortDesc: "desc 1",
    location: [43.693695, 51.240834],
  },
  {
    id: 7,
    name: "Place 2",
    category: 2,
    shortDesc: "desc 2",
    location: [43.703695, 51.240834],
  },
  {
    id: 8,
    name: "Place 3",
    category: 3,
    shortDesc: "desc 3",
    location: [43.713695, 51.240834],
  },
];
const icon = new Icon({
  iconUrl: "https://static.thenounproject.com/png/245626-200.png",
  iconSize: [32, 32],
  className: "c",
});
function LocationMarker() {
  const [position, setPosition] = useState<null | LatLng>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export const Map = (props: MapProps) => {
  const { className } = props;
  const [selectedCategory, setSelectedCategory] = useState(-1);

  const selectCategory = (category: number) => {
    if (selectedCategory === category) setSelectedCategory(-1);
    else setSelectedCategory(category);
  };

  return (
    <div className={classNames(cls.Map, [className])}>
      <div className={cls.filters}>
        {placesCategories.map((category) => (
          <div className={cls.filterItem}>
            <div
              className={classNames(cls.filterIconWrapper, {
                [cls.filterIconWrapperSelected]:
                  category.category === selectedCategory,
              })}
              onClick={() => selectCategory(category.category)}
            >
              <category.icon className={cls.filterIcon} />
            </div>
            <p className={cls.filterText}>{category.text}</p>
          </div>
        ))}
      </div>
      <div>
        <MapContainer
          className={cls.mapContainer}
          center={[43.693695, 51.240834]}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {places.map((place) => {
            if (selectedCategory !== -1 && place.category != selectedCategory)
              return null;
            return (
              <Marker position={place.location} icon={icon}>
                <Popup>{place.shortDesc}</Popup>
              </Marker>
            );
          })}
          <LocationMarker />
        </MapContainer>
      </div>
      <div className={cls.mapResult}>
        {places.map((place) => (
          <Link to={"/places/"} className={cls.placeItem}>
            <div className={cls.placeImage}>
              <img
                src={"https://ticketon.kz/files/media/gora-bozzhyra-001.jpg"}
                alt=""
              />
            </div>
            <div className={cls.placeInfo}>
              <div>
                <p className={cls.placeName}>{place.name}</p>
                {/*<p>{place.locationName}</p>*/}
                <div className={cls.placeLocationName}>
                  <img
                    src="https://static.thenounproject.com/png/245626-200.png"
                    alt=""
                  />
                  <p>Mangystau</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
