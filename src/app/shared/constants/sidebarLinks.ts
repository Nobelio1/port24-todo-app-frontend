import { SidebarItems } from '../interfaces/sidebar.model';

export class SidebarLinks {
  public static menuItemsGeneral: SidebarItems[] = [
    {
      id: '1',
      route: '/core/panel/rooms',
      allowed: true,
      title: 'Tableros',
      link: 'assets/icons/roomsIcon.svg',
    },
    {
      id: '2',
      route: '/core/panel/members',
      allowed: true,
      title: 'Miembros',
      link: '../../../assets/icons/membersIcon.svg',
    },
    {
      id: '3',
      allowed: true,
      route: '/core/panel/information-table',
      title: 'Información del Tab',
      link: '../../../assets/icons/settingIcon.svg',
    }
  ];

  public static menuItemsViews: SidebarItems[] = [
    {
      id: '1',
      allowed: true,
      title: 'Tabla',
      link: '../../../assets/icons/tableIcon.svg',
    },
    {
      id: '2',
      allowed: true,
      title: 'Calendario',
      link: '../../../assets/icons/calendarIcon.svg',
    },
  ];
}
