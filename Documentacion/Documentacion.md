![alt text](image-2.png)


# Índice

1. [Idea de la aplicación](#idea-de-la-aplicación)
2. [Tecnologías a utilizar](#tecnologías-a-utilizar)
3. [Guía de estilos](#guía-de-estilos)
4. [Resultados obtenidos](#resultados-obtenidos)
5. [Instalación del proyecto](#instalación-del-proyecto)
6. [Desarrollo](#desarrollo)
7. [Despliegue](#despliegue)
8. [Manual](#manual)
9. [Conclusiones](#conclusiones)

## Idea de la aplicación

La propuesta se centra en el  desarrollo de una página de comercio, con un enfoque similar a los más grandes como Aliexpress o Amazon. La aplicación tiene como objetivo principal ofrecer a los usuarios la mejor experiencia posible en cuanto al manejo y utilización de de la misma, para ello se incluirá un carrito de compra para que los usuarios puedan gestionar sus compras de manera eficiente, un buscador que permita al usuario encontrar lo que quiera en momentos ,además de la implementación de categorías para permitir una navegación lo más fluida e inmersiva posible.Posiblemente, se incorporará una funcionalidad de chat que permitirá la interacción entre los usuarios, la cual , ayuda a los administradores y a los usuarios saber la calidad de los productos que encontrarás. 

## Tecnologías a utilizar

Para la implementación del proyecto , voy a utilizar Vue.js, un framework moderno y versátil que facilita el desarrollo de interfaces de usuarios dinámicas y atractivas.Para las funcionalidades principales, se implementara una API propia , parecida a Platzi Fake Store,la cual dispondrá de diversos tipos de artículos.para el chat, se optará por Disqus, una plataforma consolidada que garantiza una comunicación fluida entre los usuarios.Además,se evaluará la integración de otras posibles APIs con el propósito de mejorar aún más la experiencia del usuario.

Funcionalidades Clave:

Carrito de compra:
El desarrollo incluirá la implementación de un carrito de compra robusto y fácil de usar. Los usuarios podrán agregar, editar y eliminar productos de manera intuitiva. La funcionalidad permitirá un cálculo en tiempo real del total de la compra, ofreciendo una experiencia de compra transparente y eficiente. Asimismo, se simulará el proceso de pago para proporcionar a los usuarios una vista previa realista de sus transacciones.

Búsqueda de productos:
Se incorporará una potente funcionalidad de búsqueda que permitirá a los usuarios encontrar productos específicos de manera rápida y eficiente. La inclusión de filtros y categorías facilitará la exploración de la tienda, brindando a los usuarios opciones de personalización para afinar sus búsquedas y descubrir productos relevantes de manera efectiva.

Chat entre usuarios(Según el tiempo)
Se introducirá un sistema de chat que permitirá a los usuarios interactuar y compartir opiniones sobre productos y servicios. La implementación de esta función dependerá de la disponibilidad de tiempo en el desarrollo, asegurando una integración cuidadosa para ofrecer una experiencia de usuario fluida y segura
 
Audiencia Objetivo:

La plataforma está diseñada para atender a una amplia audiencia, abarcando usuarios de todas las edades y perfiles. Al no incluir productos exclusivos para mayores de 18 años, se busca llegar a un público diverso.Esta propuesta busca no solo ofrecer una experiencia de compra efectiva, sino también establecer una conexión más significativa entre los usuarios, promoviendo un ambiente interactivo y social en la plataforma.

## Guía de estilos
![alt text](image-3.png)

Resultado:

![alt text](image-4.png)

En esta imagen , podemos ver la parte inicial del proyecto, la cual cuenta con la página de error , la página inicial y sus respectivos iniciar sesión y registro

En la siguiente imágen, podemos ver la parte principal , a esta solo se puede acceder si el usuario , ha iniciado sesión o se ha registrado.En esta parte contaremos con un navbar, footer y las partes principales de cada página.

Cuenta con dos páginas , una es la principal y la otra tendrá información del usuario y el chat.En la principal podemos encontrar los productos , el buscador , los filtrados , el carrito y el contacto en la parte del footer.
y por último esta es la misma versión pero con su modo oscuro:

![alt text](image-7.png)

![alt text](image-8.png)

## Resultados obtenidos

El resultado final ha sido este:



## Instalación del proyecto

Instrucciones detalladas sobre cómo instalar y configurar el proyecto en un entorno local.

## Desarrollo

Para iniciar el proyecto, decidí comenzar por diseñar la base de datos que utilizaría y establecer los objetivos que deseaba alcanzar con ella. Una vez completado este paso, procedí con el desarrollo del cliente, el cual está implementado en Vue. Simultáneamente, fui aplicando el estilo necesario para que todo adquiriera coherencia visual.

Una vez que lo esencial estuvo completado, me concentré en la parte del servidor. Creé la API en Laravel y la utilicé para la creación del producto final. Durante este proceso de desarrollo, me encontré con varios errores, los cuales pude resolver gradualmente gracias a fuentes externas y a las indicaciones proporcionadas por el profesorado.

Comparado con mi proyecto anterior, las dificultades encontradas fueron menores, ya que algunas de ellas fueron similares a las que enfrenté previamente, lo que me permitió abordarlas de manera más eficiente y con menos tiempo de resolución.

Durante la fase de desarrollo, he atravesado varias etapas, algunas en las que todo fluía sin problemas, y otras en las que me enfrentaba a dificultades significativas. En ocasiones, incluso cuando todo parecía estar en orden, me encontraba con pequeños detalles, como olvidar un "this" o un punto y coma, lo que subraya la complejidad de este primer encuentro con un proyecto de cierta envergadura.

## Despliegue

Explica cómo desplegar la aplicación en un entorno de producción.

## Manual

Proporciona un manual de usuario detallado para ayudar a los usuarios a familiarizarse y utilizar la aplicación.

## Conclusiones

Este proyecto ha representado un hito significativo en mi aprendizaje, marcando una notable brecha entre mis conocimientos previos y lo que he adquirido a lo largo del proceso. Observar la evolución que he experimentado me llena de orgullo por los logros alcanzados hasta el momento, aunque reconozco que siempre hay margen para la mejora continua.

En cuanto al proyecto en sí, siento que he dado un salto considerable en comparación con el anterior. Quizás esto se deba a que en el proyecto anterior estaba explorando y aprendiendo a manejarme, lo cual me ha permitido evitar errores anteriores. Aunque el resultado final no se ajusta completamente a mi visión inicial, me hubiera gustado dotarlo de más funcionalidades y mejorar su aspecto visual, así como facilitar su uso para el usuario. En particular, la implementación de un chat, que estaba destinado a ser el núcleo del proyecto, tuvo que ser postergada debido a limitaciones de tiempo.
