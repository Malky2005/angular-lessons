import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";

@Injectable()
export class StudentService {
    getStudents(): Student[] {
        return [
            {
                id: 1, firstName: "aaa", lastName: "aaa", address: "lakjla", phone: "01-1234567", active: true, avgMark: 85,
                tests: [
                    { id: 1, date: new Date(), description: "math", mark: 86 },
                    { id: 2, date: new Date(), description: "history", mark: 85 },
                    { id: 3, date: new Date(), description: "grammer", mark: 84 },
                ]
            },
            { id: 2, firstName: "bbb", lastName: "bbb", address: "lakjla", phone: "01-1234567", active: false, avgMark: 88, dateLeave: new Date() },
            {
                id: 3, firstName: "ccc", lastName: "ccc", address: "lakjla", phone: "01-1234567", active: true, avgMark: 96,
                tests: [
                    { id: 1, date: new Date(), description: "math", mark: 95 },
                    { id: 2, date: new Date(), description: "history", mark: 93 },
                    { id: 3, date: new Date(), description: "grammer", mark: 100 },
                ]
            }
        ]
    }
}