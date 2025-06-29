import type {Component, FC} from "react";
import {AuthorizedPage} from "../../pages/Authorized/AuthorizedPage.tsx";
import ProjectCatalogPage from "../../pages/ProjectCatalog/ProjectCatalogPage.tsx";

export const AuthorizedRoutes: {
    path: string;
    element: FC
}[] = [
    {
        path: 'authorized',
        element: AuthorizedPage
    },
    {
        path: 'catalog',
        element: ProjectCatalogPage
    }
]