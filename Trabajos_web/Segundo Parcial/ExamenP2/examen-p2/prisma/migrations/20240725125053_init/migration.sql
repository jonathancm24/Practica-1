/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Obra_de_arte` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Obra_de_arte_codigo_key" ON "Obra_de_arte"("codigo");
