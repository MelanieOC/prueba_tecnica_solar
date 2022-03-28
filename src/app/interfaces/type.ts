export interface Type {
    name: string;
    id: number;
}

export interface Service {
    id: number;
    type_id: number;
    title: string;
    description: string;
}
