// Ejercicio 2
// a. Definir un formato JSON adecuado para la información de las Notebooks modeladas en el ejercicio
// anterior.


tabla_notebooks = 
{
    "notebooks": [
        {
            "id": 1,
            "marca": "Asus",
            "modelo": "AP-52342",
            "precio": 185000.99,
            "fecha_fabricacion": "2022-01-15"
        },
        {
            "id": 2,
            "marca": "DELL",
            "modelo": "Inspiron 440",
            "precio": 250000.50,
            "fecha_fabricacion": "2021-11-20"
        },
        {
            "id": 3,
            "marca": "Lenovo",
            "modelo": "G-480",
            "precio": 150000.99,
            "fecha_fabricacion": "2022-03-05"
        }
    ]
};


// b. Definir un formato JSON adecuado para modelar información de álbumes musicales. Considerar
// que un álbum puede tener 1 o más temas y 1 o más autores.
tabla_musica = 
{
    "album": {
        "titulo": "Nombre del Álbum",
        "anio_lanzamiento": 2023,
        "genero": "Género Musical",
        "temas": [
            {
                "nombre": "Tema 1",
                "duracion": "4:30",
                "autores": [
                    {
                        "nombre": "Autor 1",
                        "rol": "Compositor"
                    },
                    {
                        "nombre": "Autor 2",
                        "rol": "Intérprete"
                    }
                ]
            },
            {
                "nombre": "Tema 2",
                "duracion": "3:45",
                "autores": [
                    {
                        "nombre": "Autor 3",
                        "rol": "Compositor"
                    },
                    {
                        "nombre": "Autor 2",
                        "rol": "Intérprete"
                    }
                ]
            }
        ]
    }
}

