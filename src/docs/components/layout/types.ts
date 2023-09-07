
export type NavIcon = {
    icon: string,
    link: string,
    title: string,
}

export type NavGroupItem = {
    title: string,
    mdPath: string,
    sitePath: string,
    description?: string,
    icon?: string,
    hoverIcon?: string,
    component?:  string,
    componentPath?: string,
}

export type NavGroup = {
    groupTitle: string,
    hideTitle?: boolean,
    groupIcon?: string,
    items: NavGroupItem[][],
    // components?: ComponentItem[],
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