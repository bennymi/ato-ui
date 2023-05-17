export type ThemeColor =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'surface'
		| 'success'
		| 'warning'
		| 'error';

export type ShadeValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

type ColorManipulation = {
	color: string,
	lighten_values: number[],
	darken_values: number[],
}

export type LocalStorageColor = {
	[key in ThemeColor]: ColorManipulation;
}

export type LocalStorageTheme = {
    colors: LocalStorageColor,
	btn_radius: string,
	btn_icon_radius: string,
	container_radius: string
};

export type Contrast = {
	on_color: string,
	contrast: number,
}

export type Shade = Contrast & {
	color: string
}

export type PaletteShades = {
	[key in ShadeValues]: Shade;
}

export type Palette = {
	[key in ShadeValues]: string;
};

export type Rgb = {
	r: number;
	g: number;
	b: number;
};

export type FullTheme = {
	[key in ThemeColor]: PaletteShades;
};