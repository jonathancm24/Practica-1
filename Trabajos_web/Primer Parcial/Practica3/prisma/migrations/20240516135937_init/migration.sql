BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[cancha] ADD [Estado] NVARCHAR(1000) CONSTRAINT [cancha_Estado_df] DEFAULT 'Activa';

-- AlterTable
ALTER TABLE [dbo].[Deportista] ADD [Estado] NVARCHAR(1000) CONSTRAINT [Deportista_Estado_df] DEFAULT 'Activa';

-- AlterTable
ALTER TABLE [dbo].[separacion] ADD [Estado] NVARCHAR(1000) CONSTRAINT [separacion_Estado_df] DEFAULT 'Activa';

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
