# Problema_3

 Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy segura, para ello el cliente solicita los siguientes requerimientos para el password:

* Debe tener al menos 16 caracteres.
* Debe tener letras minúsculas y mayúsculas.
* No puede tener 2 letras iguales consecutivas.
* Debe contener al menos 4 números.
* No puede tener 2 números iguales consecutivos. 
* Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
* No se puede usar el número 0.
* No se puede colocar espacios.

* Ejecucion del programa
    * node inde.js


<h2>Explicacion de la resolcion</h2>
Cuenta con tre archivos

* Problema_3
    * index.js
    * src
        * class
            * ClassPassword.js
        * module
            * CaracteresExpeciales.js

<p>
Index.js: Tiene la instanciacion de la clase ClassPassword, donde se pasa la contraseña
ClassPassword.js: Es una clase que tiene algunas propiedades como configuraciones para la contraseña, junto con sus metodos
                    un metodo en general que usa los demas metodos que devolvera un objeto con cada error en la password
CaracteresExpeciales.js: Es una clase que maneja todo lo que tiene que ver con los caracteres especiales

</p>