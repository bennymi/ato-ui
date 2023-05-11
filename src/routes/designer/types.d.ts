export type ThemeColor =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'surface'
		| 'success'
		| 'warning'
		| 'error';

export type Theme = {
    [key in ThemeColor]?: string;
};