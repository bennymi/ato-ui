
export type NavIcon = {
    icon: string,
    link: string,
    title: string,
}

export type NavGroupItem = {
    title: string,
    path: string,
    icon?: string,
    hoverIcon?: string,
}

export type NavGroup = {
    groupTitle: string,
    hideTitle?: boolean,
    groupIcon?: string,
    items: NavGroupItem[],
}

export type NavPage = {
    navTitle: string,
    showSidebar: boolean,
    basePath: string,
    landingPath: string,
    pageIcon?: string,
    groups: NavGroup[],
}

export type Navigation = NavPage[];

// export type Navigation = {
//     [key: string]: NavPage
// }