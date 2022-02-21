# MONGO DB
## Aaron Andal ASIX M10-BD 2021-2022

Información de MONGO1 [MONGO1](https://moodle.escoladeltreball.org/pluginfile.php/199623/mod_resource/content/0/Mongo.pdf)


Información de MONGO2 [MONGO2](https://moodle.escoladeltreball.org/pluginfile.php/199628/mod_resource/content/0/04-mongoDB-Intro_CRUD_Exercicis_basics.pdf)

How to Install Mongo [Mongo Install](https://www.how2shout.com/linux/how-to-install-mongodb-5-0-server-on-debian-11-bullseye/)

How to Install Mongo [Ejemplos Mongo](https://moodle.escoladeltreball.org/pluginfile.php/199626/mod_resource/content/0/exemples_Mongo_Inventory.txt.js)

DOCS MONGO OFICIAL [Mongo oficial](https://docs.mongodb.com)

DOCS MONGO OFICIAL: Query Operations [Mongo oficial](https://docs.mongodb.com/manual/reference/operator/query/)

DOCS MONGO OFICIAL: Comparison SQL [Mongo oficial](https://docs.mongodb.com/manual/reference/sql-comparison/)


## MONGO DB

* MongoDB es una base de datos orientada a DOCUMENTOS (Semi-Estructurada).

    * La información no se organiz en **TABLAS** es **NOSQL**.

    * La información se organiza en **COLECCIONES DE DOCUMENTOS** --> NO USAN UN ESQUEMA DDL.

    * Se utilizan estructuras similares a JSON = Diccionarios (Pares **CAMPO-VALOR**).

### CARACTERÍSTICAS

* Poca estructura de datos --> Muy flexible

* Muy relacionadas entre ellas.

    * Se procesa más rapido la información, pero el mantenimiento es lento.

    * Mucha cantidad de datos.

* Es escalable y fácil de implementar en el cloud, es rápido.

### DOCUMENTOS Y COLECCIÓN

* JSON : JavaScript Object Notation: 
    
    * Es un formato basado en texto estándar para representar datos estructurados en la sintaxis de Objetos de JavaScript.

* **COLECCIÓN:** Es un conjunto de documentos que comparten índices (La información más importante).

    * Los documentos de una COLECCIÓN pueden tener campos diferentes.

**EJEMPLO DE DOCUMENTO**

```
{
    Nombre: "Miguel",
    Apellidos: "Parada",
    Edad: 39,
    Aficiones: ["Música","Ciclismo","Baloncesto"],
    Amigos: [
        {
        Nombre:"Marie",
        Edad:35 },
        {
        Nombre:"Elsa",
        Edad:42
        }
    ]
} 
```
### ESTRUCTURA 

**BASE DE DATOS**

* **COLECCIONES**

    * **Documentos** (Objeto del cual guardamos información)

        * **Identificado** de una forma con ID (Si no lo ponemos, lo pone **Mongo**).

        * **Listado de campos** separados por **COMAS** { camp1, camp2, camp3, ....}

            * **CAMPO**

                * **NomDeCampo: Valor**

                * **NomDeCampo: [valor2, valor2],...**

                    * El *valor* puede ser:

                        * **"Valor"**: Comillas obligatorias por TEXTO

                        * Documento/Objeto --> {}.

![Comparison Mongo](https://github.com/KeshiKiD03/m10/blob/master/Photos/mongo2.png)

### INSTALACIÓN (DEBIAN)

### IMPORTACIÓN

### FINDS() = SELECTS

### OPERADORES EN QUERYS

### OPERACIONES RELACIONALES (AND OR NOT)

### SIGNIFICADO Y DEFINICIÓN

### DML = CRUD

### VARIABLES

### EJEMPLOS

