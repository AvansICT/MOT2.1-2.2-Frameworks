import { mysqlTable, int, varchar, text, boolean, timestamp, tinyint, decimal } from 'drizzle-orm/mysql-core';

// Customer table
export const customers = mysqlTable('customer', {
  customer_id: int('customer_id').primaryKey().autoincrement(),
  store_id: tinyint('store_id').notNull(),
  first_name: varchar('first_name', { length: 45 }).notNull(),
  last_name: varchar('last_name', { length: 45 }).notNull(),
  email: varchar('email', { length: 50 }),
  address_id: int('address_id').notNull(),
  active: boolean('active').notNull().default(true),
  create_date: timestamp('create_date').notNull().defaultNow(),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Film/Movie table
export const films = mysqlTable('film', {
  film_id: int('film_id').primaryKey().autoincrement(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  release_year: int('release_year'),
  language_id: tinyint('language_id').notNull(),
  original_language_id: tinyint('original_language_id'),
  rental_duration: tinyint('rental_duration').notNull().default(3),
  rental_rate: decimal('rental_rate', { precision: 4, scale: 2 }).notNull().default('4.99'),
  length: int('length'),
  replacement_cost: decimal('replacement_cost', { precision: 5, scale: 2 }).notNull().default('19.99'),
  rating: varchar('rating', { length: 10 }).default('G'),
  special_features: text('special_features'),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Actor table
export const actors = mysqlTable('actor', {
  actor_id: int('actor_id').primaryKey().autoincrement(),
  first_name: varchar('first_name', { length: 45 }).notNull(),
  last_name: varchar('last_name', { length: 45 }).notNull(),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Rental table
export const rentals = mysqlTable('rental', {
  rental_id: int('rental_id').primaryKey().autoincrement(),
  rental_date: timestamp('rental_date').notNull(),
  inventory_id: int('inventory_id').notNull(),
  customer_id: int('customer_id').notNull(),
  return_date: timestamp('return_date'),
  staff_id: tinyint('staff_id').notNull(),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Category table
export const categories = mysqlTable('category', {
  category_id: tinyint('category_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 25 }).notNull(),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Store table
export const stores = mysqlTable('store', {
  store_id: tinyint('store_id').primaryKey().autoincrement(),
  manager_staff_id: tinyint('manager_staff_id').notNull(),
  address_id: int('address_id').notNull(),
  last_update: timestamp('last_update').notNull().defaultNow().onUpdateNow(),
});

// Export types
export type Customer = typeof customers.$inferSelect;
export type NewCustomer = typeof customers.$inferInsert;
export type Film = typeof films.$inferSelect;
export type NewFilm = typeof films.$inferInsert;
export type Actor = typeof actors.$inferSelect;
export type NewActor = typeof actors.$inferInsert;
export type Rental = typeof rentals.$inferSelect;
export type NewRental = typeof rentals.$inferInsert;
export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
export type Store = typeof stores.$inferSelect;
export type NewStore = typeof stores.$inferInsert;
