import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

// Database connection configuration
const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'sakila',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create drizzle instance
export const db = drizzle(connection, { schema, mode: 'default' });

export type Database = typeof db;
