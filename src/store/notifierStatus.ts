import { defineStore } from "pinia";

const useNotifierStatusStore = defineStore("notifierStatus", {
  state: () => {
    return { permission: Notification.permission as NotificationPermission };
  },
  actions: {
    setPermission(permission: NotificationPermission) {
      this.permission = permission;
    },
    reset() {
      this.permission = "default";
    },
  },
  getters: {
    isGranted: (state) => state.permission === "granted",
  },
});

export default useNotifierStatusStore;
