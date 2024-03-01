# All_Blue


## Idea de la aplicación

La propuesta se centra en el  desarrollo de una página de comercio, con un enfoque similar a los más grandes como Aliexpress o Amazon. La aplicación tiene como objetivo principal ofrecer a los usuarios la mejor experiencia posible en cuanto al manejo y utilización de de la misma, para ello se incluirá un carrito de compra para que los usuarios puedan gestionar sus compras de manera eficiente, un buscador que permita al usuario encontrar lo que quiera en momentos ,además de la implementación de categorías para permitir una navegación lo más fluida e inmersiva posible.Posiblemente, se incorporará una funcionalidad de chat que permitirá la interacción entre los usuarios, la cual , ayuda a los administradores y a los usuarios saber la calidad de los productos que encontrarás. 

## Manual
Para utilizar la aplicación, los usuarios deben iniciar sesión o registrarse. Una vez completado este paso, accederán a la parte principal de la aplicación, donde encontrarán un catálogo de productos con varios filtros disponibles y la opción de agregar elementos al carrito para realizar compras. Además, los usuarios tendrán acceso a una sección personalizada donde podrán ver y gestionar su información personal, incluida la posibilidad de eliminar su cuenta si así lo desean.

[Video explicativo](https://drive.google.com/file/d/1WZNZZCCU2UYaVjy8ZLSseuqHp3U2glh1/view?usp=sharing) 


## Despliegue


El despliegue ha sido un poco complicado, pero finalmente logré implementar la parte del frontend utilizando Vercel, mientras que la parte del backend se ejecuta localmente. Para poder utilizar la aplicación, todo lo que necesitas hacer es descargar el proyecto y ejecutar el siguiente comando en la terminal:

[Repositorio Backend](https://github.com/dieguga07/Laravel-project-All-BLue)

```sh 
docker-compose up -d --build 

```
En caso de que esta opción no funcione, también puedes realizar una instalación manual del frontend descargando el proyecto y ejecutando los siguientes comandos:

[Repositorio Frontend](https://github.com/dieguga07/Vue-project-All-Blue-)


```sh
npm install
```

Asegurate de tener las siguientes dependencias que se usan en el pryecto:

[Pinia](https://pinia.vuejs.org/getting-started.html)
[Vue router](https://router.vuejs.org/guide/)
[Pinia-plugin-persist](https://www.npmjs.com/package/pinia-plugin-persist)


###### Compile and Hot-Reload for Development

```sh
npm run dev
```

###### Compile and Minify for Production

```sh
npm run build
```
Estos pasos te permitirán poner en marcha la aplicación sin problemas.

¡¡¡ Importante !!! Es posible que la respuesta tarde varios segundos debido al retraso en el despliegue del backend.

## Figma
[Enlace al Figma](https://www.figma.com/file/AKtjTzrGazoxUcZ97ScBey/Vue-project-1?type=design&node-id=1-7&mode=design&t=tGGIAE6cs8Phfv43-0)

