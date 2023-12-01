import classNames from "classnames";
import cls from "src/pages/events/eventsList/EventsList.module.css";

interface EventsListProps {
  className?: string;
}

export const EventsList = (props: EventsListProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.EventsList, [className])}>EventsList</div>
  );
};
