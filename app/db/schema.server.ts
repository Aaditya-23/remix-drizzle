import {
	pgTable,
	text,
	uuid,
	timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	createdAt: timestamp("createdAt").defaultNow(),
});
