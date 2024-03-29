USE [db_aa1998_bitedetector]
GO
/****** Object:  Table [dbo].[Contacto]    Script Date: 17/11/2023 11:55:40 ******/
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
/****** Object:  Table [dbo].[Contactos_Generales]    Script Date: 17/11/2023 11:55:40 ******/
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
/****** Object:  Table [dbo].[Historial]    Script Date: 17/11/2023 11:55:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Historial](
	[IdPicadura] [int] NOT NULL,
	[IdUsuario] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Insecto]    Script Date: 17/11/2023 11:55:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Insecto](
	[IdInsecto] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](250) NOT NULL,
	[SintomasGraves] [varchar](max) NULL,
	[SintomasLeves] [varchar](max) NULL,
	[Recomendaciones] [varchar](max) NULL,
	[Foto] [varchar](1024) NULL,
	[MasInfo] [varchar](max) NULL,
 CONSTRAINT [PK_Insecto] PRIMARY KEY CLUSTERED 
(
	[IdInsecto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Picadura]    Script Date: 17/11/2023 11:55:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Picadura](
	[IdPicadura] [int] IDENTITY(1,1) NOT NULL,
	[Foto] [varchar](max) NULL,
	[Estado] [nvarchar](max) NULL,
	[IdInsecto] [int] NULL,
	[Probabilidades] [float] NULL,
 CONSTRAINT [PK_Picadura] PRIMARY KEY CLUSTERED 
(
	[IdPicadura] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 17/11/2023 11:55:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [int] IDENTITY(1,1) NOT NULL,
	[Mail] [varchar](max) NOT NULL,
	[Nombre] [varchar](max) NOT NULL,
	[Password] [varchar](max) NOT NULL,
	[Token] [varchar](max) NULL,
	[ExpirationDate] [datetime] NULL,
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
INSERT [dbo].[Historial] ([IdPicadura], [IdUsuario]) VALUES (1, 1)
GO
SET IDENTITY_INSERT [dbo].[Insecto] ON 

INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (1, N'Mosquito', N'Una zona hinchada, inflamada y de gran tamaño/Sarpullido similar a la urticaria/Hinchazón alrededor de los ojos', N'n bulto inflamado que provoca picazón y que se forma unos minutos después de la picadura/Una mancha dolorosa que parece urticaria y que se forma dentro de las 24 horas luego de la picadura/Ampollas pequeñas', N'Lave el área con agua y jabón./Aplique una compresa de hielo durante 10 minutos para reducir la inflamación y la comezón. Vuelva a aplicar la compresa de hielo, según sea necesario./Utilice una crema contra la comezón o antihistamínica de venta libre para ayudar a aliviar la comezón. Siga las instrucciones de la etiqueta del producto.', N'/img/fotos/Mosquito.jpg', N'Los mosquitos propagan microbios a través de las picaduras. Los virus como el del Nilo Occidental y del dengue y parásitos como los de la malaria lo pueden enfermar./El mosquito se infecta con un virus o un parásito cuando pica a una persona o un animal infectado. El mosquito infectado propaga microbios a otras personas o animales por medio de las picaduras./No todos los infectados con un microbio transmitido por mosquitos se enferman.')
INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (2, N'Bee', N'Reacciones cutáneas, incluidos urticaria y picazón y piel pálida o enrojecida/Dificultad para respirar/Hinchazón de la garganta y la lengua/Un pulso débil y rápido/Náuseas, vómitos o diarrea/Mareos o desmayos/Pérdida del conocimiento', N'Dolor punzante e instantáneo en el lugar de la picadura/Una roncha roja en el área de la picadura/Ligera hinchazón alrededor del área de la picadura', N'Si puedes, retira el aguijón tan pronto como sea posible, por ejemplo, raspándolo con una uña. No trates de quitar un aguijón debajo de la superficie de la piel. Es posible que no haya un aguijón, ya que solo las abejas dejan sus aguijones. Otros insectos que pican, como las avispas, no lo hacen./Lava el área afectada con agua y jabón./Aplica una compresa fría./Si la picadura es en un brazo o una pierna, elévalos./Evita rascarte el área de la picadura. Esto empeorará la comezón y la hinchazón, y aumentará el riesgo de infección.', N'/img/fotos/Aosquito.jpg', N'La mayoría de las picadas no requieren atención médica, pero una reacción alérgica por la picada puede ser una situación de emergencia')
INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (3, N'None', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (4, N'Spider', N'Dolor que aumenta durante las primeras ocho horas después de la mordida, Fiebre, escalofríos y dolores en el cuerpo', N'enrojecimiento, dolor e hinchazón', N'Lave el área afectada con agua y jabón. Aplique hielo o una compresa húmeda. Si necesita, tome un medicamento para el dolor de venta libre.', NULL, N'Aunque mucha gente le tiene miedo a las arañas, éstas generalmente no pican a las personas a menos que se sientan amenazadas. La mayoría de las picaduras de arañas son inofensivas. A veces pueden causar reacciones alérgicas. Pero las picaduras de la viuda negra o la reclusa parda pueden ser muy peligrosas.')
INSERT [dbo].[Insecto] ([IdInsecto], [Nombre], [SintomasGraves], [SintomasLeves], [Recomendaciones], [Foto], [MasInfo]) VALUES (5, N'Ticks', N'Rascarse puede llevar a una infección cutánea.Las pulgas pueden ser portadoras de bacterias que causan enfermedades en los humanos, como el tifus y la peste. Las bacterias pueden ser transmitidas a los humanos por la picadura de pulgas.', N'Pequeñas protuberancias rojas, a menudo tres protuberancias agrupadas, que producen mucha picazón', N'evitar rascarse demasiado,  lavarse la zona con agua y jabón y aplicar una loción de calamina', NULL, N'Las pulgas pueden saltar de un animal a otro, por lo que si tenemos mascotas en casa infectadas de ellas, corremos el riesgo de sufrir sus picaduras')
SET IDENTITY_INSERT [dbo].[Insecto] OFF
GO
SET IDENTITY_INSERT [dbo].[Picadura] ON 

INSERT [dbo].[Picadura] ([IdPicadura], [Foto], [Estado], [IdInsecto], [Probabilidades]) VALUES (1, N'img.jpg', N'Correcto', 1, 23)
INSERT [dbo].[Picadura] ([IdPicadura], [Foto], [Estado], [IdInsecto], [Probabilidades]) VALUES (4, N'asd.jpg', N'Correcto', 1, 14)
INSERT [dbo].[Picadura] ([IdPicadura], [Foto], [Estado], [IdInsecto], [Probabilidades]) VALUES (5, N'data:image/jpeg;base64,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', N'concluso', 1, 0.83052784204483032)
SET IDENTITY_INSERT [dbo].[Picadura] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (1, N'manolisguido@gmail.com', N'bicho', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (2, N'manolisguido@gmail.com', N'bicho', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (3, N'manolisguido@gmail.com', N'hola123', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (4, N'manolisguido@gmail.com', N'BolasTristes', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (5, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (7, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (9, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (10, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (11, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (12, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (13, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (14, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (15, N'manolisguido@gmail.com', N'Guido', N'YuumY', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (16, N'manolisguido@gmail.com', N'YummY', N'Guido', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (19, N'manolisguido@gmail.com', N'Guido', N'YummY', N'57f2bd70-2c74-4c55-89e9-8915871c9feb', CAST(N'2023-08-04T13:08:31.473' AS DateTime))
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (20, N'a@gmail.com', N'Guido', N'YummY', N'4f8de771-05ca-4096-b302-61f59a1a1b6e', CAST(N'2023-08-04T13:42:02.120' AS DateTime))
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (24, N'manolisguido@gmail.com', N'Guido', N'YummY', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (25, N'manolisguido@gmail.com', N'Guido', N'YummY', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (26, N'manolisguido@gmail.com', N'Guido', N'YummY', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (27, N'frido@gmail.com', N'Guido', N'YummY', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (28, N'lionelMessi@gmail.com', N'MESSI', N'MESSISMO', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (29, N'brianmessi@gmail.com', N'Messi', N'LionelQuindi', NULL, NULL)
INSERT [dbo].[Usuario] ([IdUsuario], [Mail], [Nombre], [Password], [Token], [ExpirationDate]) VALUES (30, N'brianmessi@gmail.com', N'Messi', N'LionelQuindi', NULL, NULL)
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
