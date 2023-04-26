export type Heading = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ElementHeadingLU = {
    [key: number]: number;
}

export type HeadingParentsLU = {
    [key: number]: number[] | null;
}