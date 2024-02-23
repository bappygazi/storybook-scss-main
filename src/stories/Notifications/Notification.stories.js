// Import the Notifications component
import Notifications from "./Notifications";

// This default export specifies the title and component for Storybook
export default {
  title: "Notifications/Page",
  component: Notifications,
  parameters: {
    layout: "fullscreen", // Set layout to fullscreen
  },
  tags: ["autodocs"],
};

// Template for our Stories
const Template = (args) => {
  return Notifications(args);
};

// Define our first story
export const Default = Template.bind({});
Default.args = {
  pageTitle: "Notifications", // Set the page title
  l_size: "L", // Set large size
  s_size: "S", // Set small size
};
