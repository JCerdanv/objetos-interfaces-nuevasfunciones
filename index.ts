import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

/* (dia 8) https://github.com/JCerdanv/objetos-interfaces-nuevasfunciones.git */

const systemName: string = "LogSystem";
const version: number = 11.6;
const userName: string = "JCerdan";

console.log( "============== f * f =================");
console.log( " Nombre del sisTema " + systemName + " v" + version);
console.log( " ¡Bienvenido, [" + userName + "]!");
console.log( "==================================\n");

interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

const answer = await rl.question("¿Cuál es tu nombre? ");
console.log(`Hola, ${answer}!`);

let opcionJ: string = " ";

// cambio el tipo de string[] a Tarea[]
let tareaJ: Tarea[] = []; 

// Contador agregar IDs únicos secuenciales
let idContador: number = 1;

/*

do {
    console.log( "\n==F|       MENU DE TAREAS       |F==");
    console.log( "     a  =  Agregar nueva tarea a lista  ===");
    console.log( "     e  =  Eliminar ultima tarea de lista ===");
    console.log( "     l  =  Lista de todas tareas ===");
    console.log( "     s  =  Salir del menu  ===");
    opcionJ = await rl.question("Elija una letra: ");


  switch (opcionJ.trim().toLowerCase()) {
    case "a":
      const nuevaTarea = await rl.question("Ingresa el título de la tarea: ");
      if (nuevaTarea.trim() !== "") {
        // nueva tarea con el contador
        const objetoTarea: Tarea = {
          id: idContador,
          title: nuevaTarea.trim(),
          completed: false
        };
        tareaJ.push(objetoTarea);
        
        console.log(` Tarea "[ID: ${idContador}] ${nuevaTarea}" se agregó.`);
        idContador++; // Incrementa el contador para la siguiente tarea
      } else {
        console.log(" El titulo de la tarea no debe estar vacio.");
      }
      break;

    case "e":
      if (tareaJ.length > 0) {
        const eliminada = tareaJ.pop();
        // eliminar ultimo objeto de la lista
        console.log(` Se eliminó la última tarea: "${eliminada?.title}"`);
      } else {
        console.log(" No hay tareas en lista por eliminar.");
      }
      break;

    case "l":
      console.log("\n->>> LISTA DE TAREAS <<<-");
      if (tareaJ.length === 0) {
        console.log("No hay tareas registradas.");
      } else {
        // enseña ID único del objeto y su título
        for (let i = 0; i < tareaJ.length; i++) {
          console.log(`ID: ${tareaJ[i].id} - ${tareaJ[i].title} [${tareaJ[i].completed ? "Completada" : "Pendiente"}]`);
        }
      }
      break;

    case "s":
      console.log(` "Gracias por probar la nueva App v${version}... vuelve pronto!" `); 
      break;

    default:
      console.log(`${answer}, por favor, debes usar las opciones sugeridas\n`);
      break;
  }

} while (opcionJ.trim().toLowerCase() !== "s");

*/


// === funciones Arrow para cada opcion ===

const addTask = (title: string): void => {
  if (title.trim() !== "") { 
    const objetoTarea: Tarea = { 
      id: idContador, 
      title: title.trim(), 
      completed: false 
    }; 
    tareaJ.push(objetoTarea); 
    console.log(` Tarea "[ID: ${idContador}] ${title}" se agregó.`); 
    idContador++; 
  } else { 
    console.log(" El titulo de la tarea no debe estar vacio."); 
  }
};

const removeTask = (): void => {
  if (tareaJ.length > 0) { 
    const eliminada = tareaJ.pop(); 
    console.log(` Se eliminó la última tarea: "${eliminada?.title}"`); 
  } else { 
    console.log(" No hay tareas en lista por eliminar."); 
  }
};

const listTasks = (): void => {
  console.log("\n->>>  LISTA  DE  TAREAS  <<<-"); 
  if (tareaJ.length === 0) { 
    console.log("No hay tareas registradas."); 
  } else { 
    for (let i = 0; i < tareaJ.length; i++) { 
      const estado = tareaJ[i].completed ? "completed" : "pending";
      console.log(`[${tareaJ[i].id}] ${tareaJ[i].title} - ${estado}`); 
    } 
  } 
};

// === menú de tareras ===

do {
    console.log( "\n==F|       MENU DE TAREAS       |F==");
    console.log( "     a  =  Agregar nueva tarea a lista  ===");
    console.log( "     e  =  Eliminar ultima tarea de lista ===");
    console.log( "     l  =  Lista de todas tareas ===");
    console.log( "     s  =  Salir del menu  ===");
  
    opcionJ = await rl.question("Elija una letra: "); 
  
    switch (opcionJ.trim().toLowerCase()) { 
    case "a": 
      const nuevaTarea = await rl.question("Ingresa el título de la tarea: "); 
      addTask(nuevaTarea);
      break; 
      
    case "e": 
      removeTask();
      break; 
      
    case "l": 
      listTasks();
      break; 
      
    case "s": 
      console.log(` "Gracias por probar la nueva App v${version}... vuelve pronto!" `); 
      break; 
      
    default: 
      console.log(`${answer}, por favor, debes usar las opciones sugeridas\n`); 
      break; 
    } 
} while (opcionJ.trim().toLowerCase() !== "s"); 



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

