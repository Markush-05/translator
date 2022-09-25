// import React from 'react';

import { TRANSLAT_ROUTE, LOGINE_ROUTE, LIST_ROUTE,REGISTRATION_ROUTE,ClOSE_ROUTE } from "./utils/const";

import Authorization from "./container/Authorization/authorization";
import Registration from "./container/Regestration/registration";

import PageListSaves from "./components/page-list-saves/page-list-saves";
import PageTranslator from "./components/page-translator/page-translator";

import Welcome from './components/welcome'

function CloseApp ({updatLest}) {
    

    return updatLest()
}

export const poblicRoutes = [
    {
        path:'/',
        Component: Authorization ,
        
    },
    {
        path:LOGINE_ROUTE,
        Component: Authorization
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Registration
    },
]



export const privateRoutes  = [
    {
        path:'/',
        Component: Welcome
    },
    {
        path:LIST_ROUTE,
        Component: PageListSaves
    },
    {
        path:TRANSLAT_ROUTE,
        Component: PageTranslator
    },
    {
        path: ClOSE_ROUTE,
        Component: CloseApp 
    },
   
]