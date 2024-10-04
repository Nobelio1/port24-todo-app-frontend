import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoListId = 'todoList'
  doneListId = 'doneList'
  inProggesListId = 'inProggesList'

  public todoSource = signal<string[]>([
    'Planificar el día',
    'Revisar correos importantes',
    'Preparar la lista de pendientes',
    'Configurar la reunión semanal'
  ]);

  public doneSource = signal<string[]>([
    'Despertar',
    'Hacer ejercicio matutino',
    'Tomar desayuno',
    'Leer noticias',
    'Preparar el café'
  ]);

  public inProggesSource = signal<string[]>([
    'Trabajar en el proyecto del cliente',
    'Llamada con el equipo de desarrollo',
    'Revisar el progreso de las tareas asignadas'
  ]);


  //todo: servicios para obtener los todos, crear y modificar



}
