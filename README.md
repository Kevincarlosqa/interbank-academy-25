# Reto Técnico: Procesamiento de Transacciones Bancarias (CLI)

## Introducción

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada para el reto técnico de Interbank Academy 25. Su propósito es procesar un archivo CSV con transacciones bancarias y generar un reporte que incluye:

- **Balance Final**: La suma de los montos de transacciones tipo "Crédito" menos la suma de los montos tipo "Débito".
- **Transacción de Mayor Monto**: El ID y monto de la transacción con el valor más alto.
- **Conteo de Transacciones**: El número total de transacciones por tipo ("Crédito" y "Débito").

La solución está implementada en **TypeScript**, utilizando Node.js como entorno de ejecución, y sigue principios de diseño modular y funcional para garantizar claridad, mantenibilidad y robustez.

---

## Instrucciones de Ejecución

### Requisitos Previos

- **Node.js**: Versión 18 o superior (recomendado: 20.x.x). Puedes instalarlo desde [nodejs.org](https://nodejs.org) o usar un administrador como `nvm`.
- **npm**: Incluido con Node.js para gestionar dependencias.
- Un archivo CSV válido (por ejemplo `data/data.csv`) con el formato:

  ```
   id,tipo,monto
   1,Crédito,100.00
   2,Débito,50.00
   3,Crédito,200.00
   4,Débito,75.00
   5,Crédito,150.00
   ```

### Instalación

1. **Clona el repositorio**:
 ```bash
 git clone https://github.com/kevincarlosqa/interbank-academy-25.git
 cd interbank-transactions
```
2. **Instala las dependencias**:
 ```bash
npm install
```
Esto instalará:
- csv-parse: Para parsear el archivo CSV.
- @types/node y typescript: Para desarrollo y compilación en TypeScript.


3. **Prepara el archivo CSV**:
- Coloca tu archivo CSV en la carpeta data (e.g., data/data.csv).
- Si no proporcionas un archivo, el programa usará data/data.csv por defecto.

### Ejecución

1. **Compila el código TypeScript**:
 ```bash
npm run build
```
- Esto genera los archivos JavaScript en la carpeta dist.

2. **Ejecuta la aplicación**:
- Con un archivo CSV específico:
 ```bash
npm start data/data.csv
```
- Sin argumento (usa el archivo predeterminado data/data.csv):
 ```bash
npm start
```
3. **Resultado esperado**:
 ```bash
Reporte de Transacciones
---------------------------------------------
Balance Final: 325.00
Transacción de Mayor Monto: ID 3 - 200.00
Conteo de Transacciones: Crédito: 3 Débito: 2
```