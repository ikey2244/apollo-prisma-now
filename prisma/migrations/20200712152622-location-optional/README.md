# Migration `20200712152622-location-optional`

This migration has been generated by ikey2244 at 7/12/2020, 3:26:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Memory" ALTER COLUMN "location" DROP NOT NULL;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200712152136-refactor-to-use-memories..20200712152622-location-optional
--- datamodel.dml
+++ datamodel.dml
@@ -3,15 +3,15 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Memory {
   id        Int      @default(autoincrement()) @id
   createdAt DateTime @default(now())
-  location  String
+  location  String?
   title     String
   user      User     @relation(fields: [userId], references: [id])
   userId    Int
 }
```

