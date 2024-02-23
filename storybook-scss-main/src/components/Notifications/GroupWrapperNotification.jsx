import DefaultNotification from "./DefaultNotification";
import HoverNotification from "./HoverNotification";
import NewNotification from "./NewNotification";

const GroupWrapperNotification = () => {
  return (
    <div className="group_wrapper">
      {/* default group 1 */}
      <DefaultNotification />
      {/* new notification group 2 */}
      <NewNotification />
      {/* hover group 3 */}
      <HoverNotification />
    </div>
  );
};

export default GroupWrapperNotification;
