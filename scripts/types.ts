
export type ComponentFile = {
    component: string;
    files: string[];
};

export type ComponentProp = { 
    name: string;
    type: string;
    description: string;
    defaultValue?: string;
};