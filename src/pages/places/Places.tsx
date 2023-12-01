import classNames from "classnames";
import cls from "src/pages/places/Places.module.css";

interface PlacesProps {
  className?: string;
}

export const Places = (props: PlacesProps) => {
  const { className } = props;

  return <div className={classNames(cls.Places, [className])}>Places</div>;
};
