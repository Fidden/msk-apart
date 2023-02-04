export interface IProduct {
    id: number;
    image: string;
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
    areaDescription: string;
    subway: {
        color: string;
        station: string;
        distance: number;
    };
}
