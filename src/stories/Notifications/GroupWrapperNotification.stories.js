import GroupWrapperNotification from "./GroupWrapperNotification";
import "./notifications.scss";

export default {
  title: "GroupWrapperNotification/Page",
  component: GroupWrapperNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Template = (args) => {
  return GroupWrapperNotification(args);
};

export const Default = Template.bind({});
Default.args = {
  notifications: [
    {
      type: "default",
      imageSrc: "/city.png",
      title: "Holiday 2024",
      description: "Lorem ipsum dorom lorem manga",
      time: "2 hours ago",
    },
  ],
};

export const WithDefaultNotification = Template.bind({});
WithDefaultNotification.args = {
  defaultNotificationProps: {
    type: "default",
    imageSrc: "/city.png",
    title: "Lorem ipsum dolor sit amet, consectetur and adipiscing elit, sed do eiusmod.",
    time: "2 hours ago",
  },
};

export const WithNewNotification = Template.bind({});
WithNewNotification.args = {
  newNotificationProps: {
    type: "newNotification",
    imageSrc: "/city.png",
    title: "Lorem ipsum dolor sit amet, consectetur and adipiscing elit, sed do eiusmod.",
    time: "2 hours ago",
  },
};

export const WithHoverNotification = Template.bind({});
WithHoverNotification.args = {
  hoverNotificationProps: {
    type: "hover",
    imageSrc: "/city.png",
    title: "Lorem ipsum dolor sit amet, consectetur and adipiscing elit, sed do eiusmod.",
    time: "2 hours ago",
  },
};
