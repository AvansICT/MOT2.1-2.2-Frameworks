class MySQLDatabase {
  connect() {
    console.log("Connecting to MySQL database...");
  }
}

class UserService {
  private db: MySQLDatabase;

  constructor() {
    this.db = new MySQLDatabase(); // Direct afhankelijk van concrete klasse
  }

  getUser(id: number) {
    this.db.connect();
    // Haal gebruiker op uit database
    console.log(`Getting user with id ${id}`);
  }
}

// Gebruik
const service = new UserService();
service.getUser(1);