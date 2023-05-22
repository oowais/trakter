import useNotifierStatusStore from "@/store/notifierStatus";

const useNotifier = () => {
  const store = useNotifierStatusStore();

  const requestPermission = async () => {
    console.log(window);
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }
    const permission = await Notification.requestPermission();
    store.setPermission(permission);
    if (permission === "granted") alert("permission is granted! YAY");
    else if (permission === "denied") alert("permission is denied! :(");
  };

  const getPermissionStatus = (): NotificationPermission => {
    return store.permission;
  };

  const newNotification = async (
    title: string,
    options: NotificationOptions = {}
  ): Promise<Notification> => {
    if (!store.isGranted) await requestPermission();
    return new Notification(title, options);
  };

  return { requestPermission, getPermissionStatus, newNotification };
};

export default useNotifier;

/**
 * Overriding original NotificationOptions to remove unsupported options
 */
interface NotificationOptions {
  body?: string;
  data?: any;
  icon?: string;
  tag?: string; // allow one notificaiton of the same tag
  silent?: boolean;
}
