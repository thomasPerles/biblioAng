export class NotificationUtilisateur {

    /**
     * see : https://developer.mozilla.org/fr/docs/Web/API/Notification
     */
    public static notifier(message: string): void {
        if (!('Notification' in window)) {
            alert(message);
        } else if (Notification.permission === 'granted') {
            new Notification(message);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === 'granted') {
                        new Notification(message);
                    }
                });
        } else {
            console.log(message);
        }
    }
}
