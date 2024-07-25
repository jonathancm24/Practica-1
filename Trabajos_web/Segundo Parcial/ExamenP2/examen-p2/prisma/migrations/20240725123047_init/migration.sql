-- CreateTable
CREATE TABLE "Obra_de_arte" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "Nombre_artistico" TEXT NOT NULL,
    "Artista" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Evaluado_en" INTEGER NOT NULL,
    "Fecha_de_ultimo_retoque" TIMESTAMP(3) NOT NULL,
    "Empresa" TEXT NOT NULL,

    CONSTRAINT "Obra_de_arte_pkey" PRIMARY KEY ("id")
);
