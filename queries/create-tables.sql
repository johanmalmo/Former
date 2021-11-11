CREATE TABLE "Users" (
  "id" int PRIMARY KEY,
  "email" varchar UNIQUE,
  "hash" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "Forms" (
  "id" int PRIMARY KEY,
  "title" varchar,
  "body" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "Categories" (
  "name" varchar PRIMARY KEY
);

CREATE TABLE "FormAuthors" (
  "authorId" int NOT NULL,
  "formId" int NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL,
  PRIMARY KEY ("authorId", "formId")
);

CREATE TABLE "FormCategories" (
  "formId" int NOT NULL,
  "categoryName" varchar NOT NULL,
  PRIMARY KEY ("formId", "categoryName")
);

ALTER TABLE "FormAuthors" ADD FOREIGN KEY ("authorId") REFERENCES "Users" ("id");
ALTER TABLE "FormAuthors" ADD FOREIGN KEY ("formId") REFERENCES "Forms" ("id");
ALTER TABLE "FormCategories" ADD FOREIGN KEY ("formId") REFERENCES "Forms" ("id");
ALTER TABLE "FormCategories" ADD FOREIGN KEY ("categoryName") REFERENCES "Categories" ("name");