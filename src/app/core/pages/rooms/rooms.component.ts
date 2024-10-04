import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { RoomCardComponent } from '../../components/room-card/room-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [SearchBarComponent,RoomCardComponent, CommonModule],
  templateUrl: './rooms.component.html',
  styles: ``
})
export class RoomsComponent {

  /**
   * ROOMS
   * Titulo
   * Creador
   * Color
   * Cantidad de miembros
   * Estadisticas de los todos (En lista / En curso / Terminados)
   * Boton de unirse
   * Boton de Editar
   * Boton de Eliminar
   */

  /**
   * MEMBERS
   * Nombre
   * Correo
   * Rol
   * Sala de la persona
   * Boton de Editar
   * Boton de Eliminar
   */

  /**
   * INFO-TABLE
   * Titulo
   * Integrantes de la sala
   * Estados de los todos
   */



}
