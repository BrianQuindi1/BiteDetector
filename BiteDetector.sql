USE [Bite_Detector]
GO
/****** Object:  Table [dbo].[Contacto]    Script Date: 19/5/2023 09:59:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacto](
	[IdContacto] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NULL,
	[Numero] [int] NULL,
 CONSTRAINT [PK_Contacto] PRIMARY KEY CLUSTERED 
(
	[IdContacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Historial]    Script Date: 19/5/2023 09:59:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[IdHistorial] [int] IDENTITY(1,1) NOT NULL,
	[IdPicadura] [int] NOT NULL,
 CONSTRAINT [PK_Historial] PRIMARY KEY CLUSTERED 
(
	[IdHistorial] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListaContactos]    Script Date: 19/5/2023 09:59:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListaContactos](
	[IdListaContactos] [int] IDENTITY(1,1) NOT NULL,
	[IdContacto] [int] NOT NULL,
 CONSTRAINT [PK_ListaContactos] PRIMARY KEY CLUSTERED 
(
	[IdListaContactos] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Picadura]    Script Date: 19/5/2023 09:59:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Picadura](
	[IdPicadura] [int] IDENTITY(1,1) NOT NULL,
	[Foto] [varchar](max) NULL,
	[Estado] [varchar](50) NULL,
	[Resultado] [varchar](50) NULL,
 CONSTRAINT [PK_Picadura] PRIMARY KEY CLUSTERED 
(
	[IdPicadura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 19/5/2023 09:59:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[Mail] [varchar](50) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[IdHistorial] [int] NOT NULL,
	[IdListaContactos] [int] NOT NULL,
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Usuario_1] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Historial]  WITH CHECK ADD  CONSTRAINT [FK_Historial_Picadura] FOREIGN KEY([IdPicadura])
REFERENCES [dbo].[Picadura] ([IdPicadura])
GO
ALTER TABLE [dbo].[Historial] CHECK CONSTRAINT [FK_Historial_Picadura]
GO
ALTER TABLE [dbo].[ListaContactos]  WITH CHECK ADD  CONSTRAINT [FK_ListaContactos_Contacto] FOREIGN KEY([IdContacto])
REFERENCES [dbo].[Contacto] ([IdContacto])
GO
ALTER TABLE [dbo].[ListaContactos] CHECK CONSTRAINT [FK_ListaContactos_Contacto]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_Historial] FOREIGN KEY([IdHistorial])
REFERENCES [dbo].[Historial] ([IdHistorial])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_Historial]
GO
ALTER TABLE [dbo].[Usuario]  WITH CHECK ADD  CONSTRAINT [FK_Usuario_ListaContactos] FOREIGN KEY([IdListaContactos])
REFERENCES [dbo].[ListaContactos] ([IdListaContactos])
GO
ALTER TABLE [dbo].[Usuario] CHECK CONSTRAINT [FK_Usuario_ListaContactos]
GO
