# Migration `20200720224322-create-tables`

This migration has been generated by ikey2244 at 7/20/2020, 10:43:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "password" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200720223146-revert..20200720224322-create-tables
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Memory {
   id        Int      @default(autoincrement()) @id
@@ -18,7 +18,8 @@
 model User {
   id         Int      @default(autoincrement()) @id
   email      String   @unique
+  password   String
   name       String
   memories   Memory[]
 }
```


