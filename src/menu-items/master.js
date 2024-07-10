// assets
import { IconDatabase } from '@tabler/icons';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LogoDriver from '../assets/images/icons/driver_icon.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

// constant
const icons = { IconDatabase, LocalShippingOutlinedIcon, PersonOutlinedIcon, LogoDriver };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const master = {
    id: 'master',
    title: 'Master',
    type: 'group',
    children: [
        {
            id: 'master-menu',
            title: 'Master Data',
            type: 'collapse',
            icon: icons.IconDatabase,

            children: [
                {
                    id: 'vehicle',
                    title: 'Vehicle',
                    type: 'item',
                    url: '/vehicle',
                    // icon: icons.LocalShippingOutlinedIcon,
                    breadcrumbs: false
                },
                {
                    id: 'driver',
                    title: 'Driver',
                    type: 'item',
                    url: '/driver',
                    // icon: icons.LogoDriver,
                    breadcrumbs: false
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/users',
                    // icon: icons.PersonOutlinedIcon,
                    breadcrumbs: false
                },
            ],
        },
    ]

};

export default master;
