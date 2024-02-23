const DefaultNotification = () => {
  return (
    <div className="group_card">
      <div className="notify_card">
        <p>
          <small>Default</small>
        </p>
        <div className="notify_card_body">
          <div>
            <img src="/city.png" alt="city" />
          </div>
          <div>
            <h4 className="title">
              <span>Holiday 2024</span> lorem ipsum dorom lorem manga
            </h4>
            <p>
              <small>2 hours ago</small>
            </p>
          </div>
        </div>
      </div>
      <div className="notify_card">
        <p>
          <small>Default</small>
        </p>
        <div className="notify_card_body">
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

export default DefaultNotification