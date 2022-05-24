import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type NotificationProps = {
  message: string;
  color?: string;
  timing?: number;
};

const showNotification = (props: NotificationProps) => {
  if (document.getElementById("notification") != null)
    return console.log("notification already exists");

  const container = document.getElementById("notification-container");
  const root = createRoot(container!);

  const { message, color = "green", timing = 3000 } = props;
  setTimeout(() => {
    document.getElementById("notification")?.classList.toggle("show");
    setTimeout(() => {
      document.getElementById("notification")?.classList.toggle("show");
      setTimeout(() => {
        root.unmount();
      }, 1000);
    }, timing);
  }, 100);

  return root.render(
    <div
      style={{ border: `2px solid ${color}` }}
      id="notification"
      className={`notification`}
    >
      {message}
    </div>
  );
};
type Props = {
  children: JSX.Element;
};

const Notification: React.FC<Props> = (props) => {
  return (
    <>
      <div id="notification-container"></div>
      {props.children}
    </>
  );
};

export { Notification, showNotification };
