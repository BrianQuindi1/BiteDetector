USE [Bite_Detector]
GO
/****** Object:  Table [dbo].[Contacto]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacto](
	[IdContacto] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](max) NOT NULL,
	[Numero] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL,
 CONSTRAINT [PK_Contacto] PRIMARY KEY CLUSTERED 
(
	[IdContacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contactos_Generales]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contactos_Generales](
	[IdContactos_Generales] [int] IDENTITY(1,1) NOT NULL,
	[Numero] [int] NOT NULL,
	[Nombre] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Contactos_Generales] PRIMARY KEY CLUSTERED 
(
	[IdContactos_Generales] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Historial]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[IdPicadura] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Insecto]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Insecto](
	[IdInsecto] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](250) NOT NULL,
	[SintomasGraves] [varchar](max) NULL,
	[SintomasLeves] [varchar](max) NULL,
	[Recomendaciones] [varchar](max) NOT NULL,
	[Foto] [varchar](1024) NOT NULL,
	[MasInfo] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Insecto] PRIMARY KEY CLUSTERED 
(
	[IdInsecto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Picadura]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Picadura](
	[IdPicadura] [int] IDENTITY(1,1) NOT NULL,
	[Foto] [varchar](max) NOT NULL,
	[Estado] [nvarchar](max) NOT NULL,
	[IdInsecto] [int] NULL,
	[Probabilidades] [float] NOT NULL,
 CONSTRAINT [PK_Picadura] PRIMARY KEY CLUSTERED 
(
	[IdPicadura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 7/7/2023 10:51:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Mail] [varchar](max) NOT NULL,
	[Nombre] [varchar](max) NOT NULL,
	[Contraseña] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Contacto] ON 

INSERT [dbo].[Contacto] ([IdContacto], [Nombre], [Numero], [IdUsuario]) VALUES (1, N'mama', 1543126678, 1)
INSERT [dbo].[Contacto] ([IdContacto], [Nombre], [Numero], [IdUsuario]) VALUES (2, N'Mama', 1544562341, 1)
SET IDENTITY_INSERT [dbo].[Contacto] OFF
GO
SET IDENTITY_INSERT [dbo].[Insecto] ON 

INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (3, N'Mosquito', N'Una zona hinchada, inflamada y de gran tamaño/Sarpullido similar a la urticaria/Hinchazón alrededor de los ojos', N'n bulto inflamado que provoca picazón y que se forma unos minutos después de la picadura/Una mancha dolorosa que parece urticaria y que se forma dentro de las 24 horas luego de la picadura/Ampollas pequeñas', N'Lave el área con agua y jabón./Aplique una compresa de hielo durante 10 minutos para reducir la inflamación y la comezón. Vuelva a aplicar la compresa de hielo, según sea necesario./Utilice una crema contra la comezón o antihistamínica de venta libre para ayudar a aliviar la comezón. Siga las instrucciones de la etiqueta del producto.', N'/img/fotos/Mosquito.jpg', N'Los mosquitos propagan microbios a través de las picaduras. Los virus como el del Nilo Occidental y del dengue y parásitos como los de la malaria lo pueden enfermar./El mosquito se infecta con un virus o un parásito cuando pica a una persona o un animal infectado. El mosquito infectado propaga microbios a otras personas o animales por medio de las picaduras./No todos los infectados con un microbio transmitido por mosquitos se enferman.')
INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (5, N'Abeja', N'Reacciones cutáneas, incluidos urticaria y picazón y piel pálida o enrojecida/Dificultad para respirar/Hinchazón de la garganta y la lengua/Un pulso débil y rápido/Náuseas, vómitos o diarrea/Mareos o desmayos/Pérdida del conocimiento', N'Dolor punzante e instantáneo en el lugar de la picadura/Una roncha roja en el área de la picadura/Ligera hinchazón alrededor del área de la picadura', N'Si puedes, retira el aguijón tan pronto como sea posible, por ejemplo, raspándolo con una uña. No trates de quitar un aguijón debajo de la superficie de la piel. Es posible que no haya un aguijón, ya que solo las abejas dejan sus aguijones. Otros insectos que pican, como las avispas, no lo hacen./Lava el área afectada con agua y jabón./Aplica una compresa fría./Si la picadura es en un brazo o una pierna, elévalos./Evita rascarte el área de la picadura. Esto empeorará la comezón y la hinchazón, y aumentará el riesgo de infección.', N'/img/fotos/Aosquito.jpg', N'La mayoría de las picadas no requieren atención médica, pero una reacción alérgica por la picada puede ser una situación de emergencia')
SET IDENTITY_INSERT [dbo].[Insecto] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Contraseña]) VALUES (1, N'manolisguido@gmail.com', N'bicho', N'Guido')
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Contraseña]) VALUES (2, N'manolisguido@gmail.com', N'bicho', N'Guido')
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Contraseña]) VALUES (3, N'manolisguido@gmail.com', N'hola123', N'Guido')
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Contraseña]) VALUES (4, N'manolisguido@gmail.com', N'BolasTristes', N'Guido')
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Contraseña]) VALUES (5, N'manolisguido@gmail.com', N'YummY', N'Guido')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
ALTER TABLE [dbo].[Contacto]  WITH CHECK ADD  CONSTRAINT [FK_Contacto_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[Contacto] CHECK CONSTRAINT [FK_Contacto_Usuario]
GO
ALTER TABLE [dbo].[Historial]  WITH CHECK ADD  CONSTRAINT [FK_Historial_Picadura] FOREIGN KEY([IdPicadura])
REFERENCES [dbo].[Picadura] ([IdPicadura])
GO
ALTER TABLE [dbo].[Historial] CHECK CONSTRAINT [FK_Historial_Picadura]
GO
ALTER TABLE [dbo].[Historial]  WITH CHECK ADD  CONSTRAINT [FK_Historial_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[Historial] CHECK CONSTRAINT [FK_Historial_Usuario]
GO
ALTER TABLE [dbo].[Picadura]  WITH CHECK ADD  CONSTRAINT [FK_Picadura_Insecto] FOREIGN KEY([IdInsecto])
REFERENCES [dbo].[Insecto] ([IdInsecto])
GO
ALTER TABLE [dbo].[Picadura] CHECK CONSTRAINT [FK_Picadura_Insecto]
GO
