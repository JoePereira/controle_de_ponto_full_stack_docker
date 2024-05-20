-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "codigoUsuario" TEXT,
    "nome" TEXT NOT NULL,
    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Horarios" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "horarioEntrada" TIMESTAMP(3),
    "horarioSaida" TIMESTAMP(3),
    CONSTRAINT "Horarios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Horarios" ADD CONSTRAINT "Horarios_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
