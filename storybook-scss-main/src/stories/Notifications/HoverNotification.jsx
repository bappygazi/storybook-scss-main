const HoverNotification = () => {
  return (
    <div className="group_card">
      <div className="notify_card">
        <p>
          <small>Hover</small>
        </p>
        <div className="notify_card_body card_hover">
          <div>
            <img src="/city.png" alt="city" />
          </div>
          <div>
            <h4 className="title">Lorem ipsum dolor sit amet, consectetur and adipiscing elit, sed do eiusmod.</h4>
            <p>
              <small>2 hours ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="notify_card">
        <p>
          <small>Hover</small>
        </p>
        <div className="notify_card_body card_hover small_hover">
          <div>
            <img src="/city.png" alt="city" />
          </div>
          <div>
            <h4 className="title title_long">Lorem ipsum dolor sit amet, consectetur and adipiscing elit, sed do eiusmod.</h4>
            <p>
              <small>2 hours ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverNotification;
