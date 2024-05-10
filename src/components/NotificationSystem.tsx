// src/components/NotificationSystem.tsx
import React, { useEffect, useState } from 'react';
import {
  createNotification, getNotifications, markNotificationRead
} from '../services/NotificationService';
import { Notification } from '../types/Notification';

const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const fetchNotifications = async () => {
    const data = await getNotifications();
    setNotifications(data);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleNotificationClick = async (id: string) => {
    await markNotificationRead(id);
    fetchNotifications(); // Refresh notifications
  };

  const handleCreateNotification = async (message: string) => {
    await createNotification(message);
    fetchNotifications(); // Refresh notifications
  };

  return (
    <div>
      <h1>Notification System</h1>
      <button onClick={() => handleCreateNotification('Notification 1')}>Button 1</button>
      <button onClick={() => handleCreateNotification('Notification 2')}>Button 2</button>
      <button onClick={() => handleCreateNotification('Notification 3')}>Button 3</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} style={{ textDecoration: notification.read ? 'line-through' : 'none' }}>
            {notification.message}
            {!notification.read && (
              <button onClick={() => handleNotificationClick(notification.id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationSystem;
