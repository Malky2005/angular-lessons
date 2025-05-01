export class Student {
    id?: number;
    firstName?: string;
    lastName?: string;
    address?: string;
    phone?: string;
    active?: boolean;
    avgMark?: number;
    dateLeave?: Date;

    /**
     *
     */
    constructor(name: string) {
        this.firstName = name;
        this.lastName = name;
    }
}