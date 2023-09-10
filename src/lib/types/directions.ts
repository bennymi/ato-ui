// export const directions = ['t', 'tr', 'tl', 'r', 'l', 'b', 'br', 'bl'];

export const directions: { [key: string]: string } = {
	t: 'top',
	tr: 'top right',
	tl: 'top left',
	r: 'right',
	l: 'left',
	b: 'bottom',
	br: 'bottom right',
	bl: 'bottom left'
};

export const directionsJ = Object.keys(directions).join('|');
