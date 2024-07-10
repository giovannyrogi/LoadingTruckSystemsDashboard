// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [
        {
          id: 'default',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: icons.IconKey,
          breadcrumbs: false
        },
      ]
    }
    
    
  ]
  
};

export default dashboard;
