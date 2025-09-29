interface IMessageSender {
  sendMessage(message: string): void;
}

class EmailSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}

class SmsSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}

class NotificationService {
  constructor(private sender: IMessageSender) {}

  notify(message: string): void {
    this.sender.sendMessage(message);
  }
}

// Voorbeeldgebruik:
const emailService = new NotificationService(new EmailSender());
emailService.notify("Welkom bij onze service!");

const smsService = new NotificationService(new SmsSender());
smsService.notify("Uw code is 1234.");