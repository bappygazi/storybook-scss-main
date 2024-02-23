import PropTypes from "prop-types";
import GroupWrapperNotification from "./GroupWrapperNotification";
import "./notifications.scss";

const Notifications = ({ pageTitle, l_size, s_size }) => {
  return (
    <section className="notification_section">
      <div className="container">
        <h1 className="main_header">{pageTitle}</h1>
        <div className="layout_column_section">
          {/* group header */}
          <div className="layout_header_wrapper">
            <h3 className="layout_header">{l_size}</h3>
            <h3 className="layout_header">{s_size}</h3>
          </div>
          <GroupWrapperNotification />
        </div>
      </div>
    </section>
  );
};

Notifications.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  l_size: PropTypes.string.isRequired,
  s_size: PropTypes.string.isRequired,
};

export default Notifications;
