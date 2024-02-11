export interface IArea{
    id:string;
    areaName:string;
    officeNumber: string;
    createdAt:string;

}

export interface ICreateAreaDto{
    areaName:string;
    officeNumber: string;

}

export interface IEmployee{
    id:string;
    firstName: string;
    lastName: string;
    username: string;
    dni: string;
    email: string;
    idArea: string;
    areaName: string;
    createdAt: string;

}

export interface ICreateEmployeeDto{
    
    firstName: string;
    lastName: string;
    username: string;
    dni: string;
    email: string;
    idArea: string;
}

export interface IAttendanceRecord{
    id:string;
    time:string;
    obs: string;
    tipo: string;
    idEmployee: string;
    username: string;
    createdAt:string;


}

export interface ICreateAttendanceRecordDto{
    
    time:string;
    obs: string;
    tipo: string;
    idEmployee: string;

}