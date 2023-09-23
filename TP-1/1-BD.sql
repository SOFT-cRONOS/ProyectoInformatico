-- Escribir las sentencias SQL necesarias para crear una tabla Notebook en una base de datos
-- Computadoras. La tabla debe contener información de marca, modelo, precio y fecha de fabricación,
-- además de un id autoincremental establecido como clave primaria

CREATE DATABASE Computadoras;

CREATE TABLE Notebook (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255),
    modelo VARCHAR(255),
    precio DECIMAL(10, 2),
    fecha_fabricacion DATE
);


INSERT INTO Notebook (marca, modelo, precio, fecha_fabricacion)
VALUES
    ('Asus', 'AP-52342', 185000.99, '2022-01-15'),
    ('DELL', 'Inspiron 440', 250000.50, '2021-11-20'),
    ('Lenovo', 'G-480', 150000.99, '2022-03-05');

-- a. La información completa de todas las notebooks.
SELECT * FROM Notebook;

-- b. La marca y modelo de todas las notebooks.
SELECT marca, modelo FROM Notebook;

-- c. La información completa de todas las notebooks cuyo precio es superior a un valor dado.
SELECT * FROM Notebook WHERE precio > 900;

-- d. El precio de todas las notebooks cuya fecha de fabricación corresponde a un intervalo dado.
SELECT precio FROM Notebook WHERE fecha_fabricacion BETWEEN '2022-01-01' AND '2022-12-31';

-- e. La información de una notebook a partir de su id.
SELECT * FROM Notebook WHERE id = 2;