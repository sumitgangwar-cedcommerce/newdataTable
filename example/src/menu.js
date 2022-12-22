import { home, bag, box, note, setting } from 'ounce-ui';

export const panelFunctions = {
    getMenu: () => {
        return [
            {
                id: "login",
                content: "Login",
                path: "/login",
                icon : 
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#413bbc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
            },
            {
                id: "dashboard",
                content: "Dashboard",
                path: "/dashboard",
                icon : home
            },
            {
                id: "products",
                content: "Products",
                path: "/product",
                icon : note,
            },
            {
                id: "order",
                content: "Orders",
                path: "/order",
                icon : bag
            },
            {
                id: "configuration",
                content: "Configuration",
                path: "/config",
                icon : setting,
            },
            {
                id: "activity",
                content: "Activity",
                path: "/activity",
                icon : box
            },
        ];
    }
};
