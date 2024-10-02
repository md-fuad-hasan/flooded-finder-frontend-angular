
export interface DivisionModel {
    id: number;
    name: string
}

export interface DivisionCreateModel {
    name: string
}

export interface DistrictModel {
    id: number;
    divisionId: number;
    divisionName: string
    name: string
}

export interface DistrictCreateModel {
    divisionId: number;
    name: string
}


export interface UpazilaModel {
    id: number;
    name: string
    districtName: string,
    divisionName: string,
    divisionId: number;
    districtID: number;
}

export interface UpazilaCreateModel {
    divisionId: number;
    districtId: number;
    name: string
}

export interface AreaModel {

    divisionId: number;
    districtId: number;
    upazilaId: number;
    name: string;
    phone: string;
}