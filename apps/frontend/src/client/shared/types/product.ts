export interface IProduct {
	id: number;
	image: string;
	images: string[];
	title: string;
	description: string;
	address: string;
	price: number;
	rooms: number;
	floor: {
		value: number;
		total: number
	};
	area: number;
	areaData: {
		living?: number;
		kitchen?: number;
		year?: number;
	};
	areaDescription: string;
	subway: {
		color: string;
		station: string;
		distance: number;
	};
	corpus?: string;
	finishing?: string;
	repair?: string;
	buildType?: string;
	bathroomType?: string;
	balcony?: number;
	roomType?: string;
}
