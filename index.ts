import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

/* (dia 8) https://github.com/JCerdanv/objetos-interfaces-nuevasfunciones.git */

const systemName: string = "LogSystem";
const version: number = 11.2;
const userName: string = "JCerdan";

console.log( "================*==================");
console.log( "  Nombre del sisTema  " + systemName + " v" + version);
console.log( "  ¡Bienvenido, [" + userName + "]!");
console.log( "==================================\n");

const answer = await rl.question("¿Cuál es tu nombre? ");
console.log(`Hola, ${answer}!`);

let opcionJ: string = " ";
let tareaJ: string[] = []; 

do {
    console.log( "\n===|       MENU DE TAREAS       |===");
    console.log( "     a  =  Agregar nueva tarea a lista  ===");
    console.log( "     e  =  Eliminar ultima tarea de lista ===");
    console.log( "     l  =  Lista de todas tareas ===");
    console.log( "     s  =  Salir del menu  ===");
    opcionJ = await rl.question("Elija una letra: ");

    switch (opcionJ.trim().toLowerCase()) {
        case "a":
            const nuevaTarea = await rl.question("Ingresa el título de la tarea: ");
            if (nuevaTarea.trim() !== "") {
                tareaJ.push(nuevaTarea.trim());
                console.log(` Tarea "${nuevaTarea}" agregada con éxito.`);
            } else {
                console.log(" El título de la tarea no puede estar vacío.");
            }
            break;

        case "e":
            if (tareaJ.length > 0) {
                const eliminada = tareaJ.pop();
                console.log(`  Se eliminó la última tarea: "${eliminada}"`);
            } else {
                console.log("  No hay tareas en la lista para eliminar.");
            }
            break;

        case "l":
            console.log("\n->>> LISTA DE TAREAS <<<-");
            if (tareaJ.length === 0) {
                console.log("No hay tareas registradas.");
            } else {
                for (let i = 0; i < tareaJ.length; i++) {
                    console.log(`${i + 1}. ${tareaJ[i]}`);
                }
            }
            break;

        case "s":
            console.log("Gracias por probar la App... vuelve pronto!");
            break;

        default:
            
            console.log(`${answer}, debes usar las opciones sugeridas\n`); 
            break;

    }
    //
         
} while ( opcionJ.trim().toLowerCase() !== "s");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
