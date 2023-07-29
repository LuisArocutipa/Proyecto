<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/abet.png?raw=true" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>

</table>
</div>

<div align="center">
<span style="font-weight:bold;">INFORME DE LABORATORIO</span><br />
</div>


<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 2</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Django - Proyecto final</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td>08</td><td>AÑO LECTIVO:</td><td>2023 A</td><td>NRO. SEMESTRE:</td><td>III</td>
</tr>

<tr><td colspan="6">INTEGRANTES:
    <ul>
        <li><P>Luis Edgar Arocutipa Gutierrez</P></li>
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTES:
<ul>
<li>Carlo Corrales Delgado</li>
</ul>
</td>
</<tr>
</tdbody>
</table>

#

## EJERCICIOS PROPUESTOS
-  Descripción
https://docs.google.com/document/d/1ZKMqefUxr75Q4GGgcmgoueZ925qB0T68_YNi8-9BVAc/edit?usp=sharing

- Este trabajo debe ser hecho en grupos de 3 a 4.  Escoger una empresa, escoger el tema a trabajar y definir los Requerimientos funcionales.
- El trabajo en equipo, debe ser hecho de modo que todos los participantes del grupo conozcan todo el código.
    - La programación debe ser hecha en pares, es decir que durante una videollamada, dos o más integrantes (al menos dos, pueden ser todos los integrantes del grupo) programen un mismo código en un repositorio central, turnándose la labor de observador y codificar a intervalos de tiempo equitativos.
    - No se debe dividir el trabajo en partes y que los integrantes hagan su parte sin que los demás conozcan de su trabajo o él conozca y participe en el trabajo de los demás.
    - Se deben crear ramas en sus proyectos de git para cada una de las funcionalidades, una vez alcanzada con éxito la funcionalidad, esta se debe integrar a la rama principal.
- La aplicación será calificada sobre 20 y deberá incluir:
    - Una app independiente
        - URLs propios, usando reverse (2 puntos)
        - Plantillas propias de la aplicación (1 puntos)
        - Que usen widgets de manera elegante (1 puntos)
    - Vistas de Listado, Detalle, Crear, Actualizar y Borrar (4 puntos)
        - Formulario con restricciones de seguridad adicionales (2 puntos)
    - Vista de consultas que devuelva Json (3 puntos)
        - Programa cliente para hacer y consumir las consultas
        - Con Ajax (2 puntos)
        - Con Framework de JavaScript (3 puntos)
    - Al menos dos modelos (2 puntos)
        - Modelo con clave externa: foreign key (+2 puntos, opcional)
    - CSS o Bootstrap (2 puntos)
    - Publicó su aplicación en el web (+3 puntos, opcional)
    - Descargar un informe como archivos pdf (+2 puntos, opcional)
    - Enviar correo (+2 puntos, opcional)
- Trabajo en equipo, los 20 puntos serán distribuidos de manera equitativa entre los siguientes criterios:
    - Responsabilidad: cumplió puntualmente con todo
    - Proactividad: hizo más de lo que se pidió
    - Aporte al grupo
    - Calificó a sus compañeros (Si no lo hizo 50% de la nota de trabajo individual)
- La calificación final será un promedio entre la nota individual 40% y grupal 60%
    - La nota grupal será por el producto calificado por el profesor, en base a sus avances, exposición e informe.
    - La nota individual será calificada por sus propios compañeros. Los que no califiquen a sus compañeros tendrán la mitad de la nota en este componente.
El día de la presentación se contará con, al menos 15 minutos por grupo para exponer el sistema completo.


#

## SOLUCIÓN DE LOS EJERCICIOS PROPUESTOS
- Para la resolución del segundo laboratorio se creó el siguiente repositoiro en GitHub:
https://github.com/LuisArocutipa/Proyecto
- El proyecto se basa en simular una tienda virtual de una empresa de electrodomesticos, para esto se va a hacer uso de dos modelos principales: Producto y User. De modo que entre estos dos modelos exista una relación de muchos a muchos, ya que un usuario puede comprar varios productos y asi mismo un producto puede ser comprado por varios usuarios. Además, en un futuro se implementará un nuevo modelo Reseña, con el fin que exista una relación de uno a muchos usando Foreignkey entre un producto y las reseñas. Asi tambien, un carrito en el cual se pueda almacenar productos que se quiera comprar, para que el momento de comprar se muestre un PDF con la lista de producto que se hayan seleccionado. Una vez se confirme la compra se envirá un email con el recibo(PDF) al correo que haya ingresado el usuario.
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/inicio.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/inicio2.PNG?raw=true" style="width:80%; height:auto"/><br>
- Para iniciar el proyecto se creo el proyecto 'empresa'. Donde se inicializaron las apps 'Tienda', que tiene el modelo Producto, el cual cuenta con sus campos correspondientes como nombre, precio, descripcion e imagen; además de una relación de muchos a muchos con el Modelo User. Además, de una base html para poder desarrollar y mostrar las demas funcionalidades del proyecto; junto con un directorio adicional en el cual estan todos las imagenes requeridas al momento de crear los productos.
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/modeloProducto.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/index.PNG?raw=true" style="width:80%; height:auto"/><br>
- Luego, se creó el archivo forms.py para que se puedan agregar nuevos productos usando la clase Meta. Se creó un directorio templates dentro de la app Tienda para que esta sea totalmente independiente del proyecto. Dentro de este directorio, para poder ingresar nuevos productos fue necesario crear un archivo nuevoProducto.html en el cual se usó el csrf_token como restricción de seguridad. Luego se creó la función agregarProducto en el archivo views.py en el cual se validó el formulario para agregar productos y finalmente se añadió la url en el archivo correspondiente.
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/forms.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/nuevo.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/agregar.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/formAgregar.PNG?raw=true" style="width:80%; height:auto"/><br>
- A continuación, se agregó la vista principal de la página, para esto fue necesario crear una funcion vistaInicio en la cual se envian por contexto todos los objetos producto existentes al archivo verProductos.html. En este archivo se hace uso de un ciclo for para poder crear la lista con todos los producto enviados, ademas se le añadió un boton en el cual se pueden ver todos los detalles del objeto como la descripción y más adelante las reseñas de otros usuarios.
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/vista.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/productos.PNG?raw=true" style="width:80%; height:auto"/><br>
<br><img src="https://github.com/LuisArocutipa/Proyecto/blob/main/Imagenes/lista.PNG?raw=true" style="width:80%; height:auto"/><br>
- Finalmente, se implemento una vista individual de cada producto una vez se precione el boton anteriormente mencionado. Se añadió la función verProducto en el cual se envia como argumento la ID del producto para poder tener una ruta especifica para cada objeto. Asi mismo, en el archivo vistaProducto.html se van mostrando todos los campos del producto junto con tres botones que se iran mostrando dependiendo del usuario que este registrado. En caso, no haya un usuario registrado se rediccionara a la página para registrase; si el usuario registrado no es admin, solo tendra la opcion de comprar el producto. Pero, si el usuario que haya hecho click al boton para ver más detalles es administrador, se le mostrarán dos botones adicionales(uno para modificar el producto y otro para eliminarlo).

- Para terminar con la app Tienda se incluyeron todas la urls que fueron creadas especificamente para esta app, de modo que esta sea independiente, a las urls de proyecto principal. Junto con una función para ver los objetos en formato JSON.

- Luego, se continuo con la implementación de las funciones de registro de usuarios, inicio de sesión y fin de sesión. Para esto se tomó de referencia un proyecto anterior, en el cual se habia implementado estas funcionalidades. Pero, tambien fue necesario adicionar dos directorios: static y templates. En el primer directorio, van todos los archivos css que fueron necesarios para que las páginas tengan un diseño. En el segundo directorio, están todos los archivos html necesarios. En este caso son tres, uno en el cual está el formulario para el registro de usuarios, este formulario usa la restricción de seguridad csrf_token y además muestra mensajes en caso se este cometiendo algun error al registrarse. Otro archivo es para el inicio de sesión de los usuarios ya registrados, el cual usa el mismo procedimiento de seguridad; y finalmente, y archivo para incluir un header que irá variando según en que página este el usuario. 

#