import GroupWrapperNotification from "./GroupWrapperNotification";

const Notifications = () => {
  return (
    <section className="notification_section">
      <div className="container">
        <h1 className="main_header">Notifications</h1>
        <div className="layout_column_section">
          {/* group header */}
          <div className="layout_header_wrapper">
            <h3 className="layout_header">L</h3>
            <h3 className="layout_header">S</h3>
          </div>
          <GroupWrapperNotification />
        </div>
      </div>
    </section>
  );
};

export default Notifications;
