import { useState, useEffect } from "react";
import { Bell, BellOff } from "lucide-react";
import { isNotificationsEnabled, requestNotificationPermission, disableNotifications, startNotificationScheduler } from "@/utils/notifications";

export default function NotificationToggle() {
  const [enabled, setEnabled] = useState(isNotificationsEnabled());

  const toggle = async () => {
    if (enabled) {
      disableNotifications();
      setEnabled(false);
    } else {
      const granted = await requestNotificationPermission();
      if (granted) {
        setEnabled(true);
        startNotificationScheduler();
      }
    }
  };

  return (
    <button
      onClick={toggle}
      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
      aria-label={enabled ? "Desativar notificações" : "Ativar notificações"}
      title={enabled ? "Notificações ativas" : "Ativar notificações de drinks"}
    >
      {enabled ? (
        <Bell size={16} className="text-primary" />
      ) : (
        <BellOff size={16} className="text-muted-foreground" />
      )}
    </button>
  );
}
