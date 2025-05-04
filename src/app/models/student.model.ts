import { Course } from "./course.model";

export class Student {
    id: number;
    firstName: string;
    lastName: string;
    address?: string;
    phone?: string;
    active?: boolean;
    avgMark?: number;
    dateLeave?: Date;
    course?:Course;
    year?:Year;

    /**
     *
     */
    constructor(name: string) {
        this.id = 0
        this.firstName = name;
        this.lastName = name;
    }

    
}
export enum Year{
    'A',
    'B',
    'C'
}