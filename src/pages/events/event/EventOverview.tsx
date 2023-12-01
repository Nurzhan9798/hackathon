import classNames from "classnames";
import cls from "./EventOverview.module.css";

interface EventOverviewProps {
  className?: string;
}

export const EventOverview = (props: EventOverviewProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.EventOverview, [className])}>
      EventOverview
    </div>
  );
};
