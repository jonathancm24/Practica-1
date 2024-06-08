BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[cancha] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Descripcion] NVARCHAR(1000),
    [Estado] NVARCHAR(1000) CONSTRAINT [cancha_Estado_df] DEFAULT 'Activa',
    CONSTRAINT [cancha_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Deportista] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Nombre] NVARCHAR(1000),
    [identificacion] NVARCHAR(1000),
    [Equipo_que_representa] NVARCHAR(1000),
    [Estado] NVARCHAR(1000) CONSTRAINT [Deportista_Estado_df] DEFAULT 'Activa',
    CONSTRAINT [Deportista_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[separacion] (
    [id] INT NOT NULL IDENTITY(1,1),
    [canchaId] INT NOT NULL,
    [DeportistaId] INT NOT NULL,
    [Fecha_de_Separacion] NVARCHAR(1000),
    [Hora_desde] NVARCHAR(1000),
    [Hora_hasta] NVARCHAR(1000),
    [Estado] NVARCHAR(1000) CONSTRAINT [separacion_Estado_df] DEFAULT 'Activa',
    CONSTRAINT [separacion_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[separacion] ADD CONSTRAINT [separacion_canchaId_fkey] FOREIGN KEY ([canchaId]) REFERENCES [dbo].[cancha]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[separacion] ADD CONSTRAINT [separacion_DeportistaId_fkey] FOREIGN KEY ([DeportistaId]) REFERENCES [dbo].[Deportista]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
