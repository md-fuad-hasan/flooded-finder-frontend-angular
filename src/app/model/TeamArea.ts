export interface AreaWithTeamModel {
    areaId: number
    areaName: string
    areaPhone?: string
    areaUpazila: string
    areaDistrict: string
    areaDivision: string
    visitedTeamCount: number
    visitedTeam: VisitedTeam[]
}

export interface VisitedTeam {
    teamId: number
    teamName: string
    teamEmail: string
    teamPhone: string
}


export interface TeamWithAreaModel {
    teamId: number
    name: string
    teamPhone: string
    teamEmail: string
    visitedAreaCount: number
    areasVisited: AreasVisited[]
}

export interface AreasVisited {
    areaId: number
    areaName: string
    areaPhone?: string
    areaUpazila: string
    areaDistrict: string
    areaDivision: string
}

export interface TeamArea {
    userId: number
    areaId: number
}