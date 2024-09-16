
export interface DivisionModel {
    ID: number;
    Division: string
}

export interface DistrictModel {
    ID: number;
    DivisionID: number;
    District: string
}


export interface UpazilaModel {
    ID: number;
    DivisionID: number;
    DistrictID: number;
    Upazila: string
}

export interface AreaModel {
    ID: number;
    DivisionID: number;
    DistrictID: number;
    UpazilaID: number;
    Area: string
}