import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";
import { Test } from "./models/test.model";
import { Observable, timeout } from "rxjs";
import { AbsenceDays } from "./models/absenceDays.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {
    constructor(private http: HttpClient){}
    readonly studentList: Student[] = [
        {
            id: 1, firstName: "aaa", lastName: "aaa", address: "lakjla", phone: "01-1234567", active: true, avgMark: 85, absenceDays: [],
            tests: [
                { id: 1, date: new Date(), description: "math", mark: 86 },
                { id: 2, date: new Date(), description: "history", mark: 85 },
                { id: 3, date: new Date(), description: "grammer", mark: 84 },
            ]
        },
        { id: 2, firstName: "bbb", lastName: "bbb", address: "lakjla", phone: "01-1234567", active: false, avgMark: 88, dateLeave: new Date(), absenceDays: [] },
        {
            id: 3, firstName: "ccc", lastName: "ccc", address: "lakjla", phone: "01-1234567", active: true, avgMark: 96, absenceDays: [],
            tests: [
                { id: 1, date: new Date(), description: "math", mark: 95, },
                { id: 2, date: new Date(), description: "history", mark: 93 },
                { id: 3, date: new Date(), description: "grammer", mark: 100 },
            ]
        }
    ]
    getStudents(): Student[] {
        return this.studentList
    }

    getStudentsPromise(): Promise<Student[]> {
        return new Promise<Student[]>((resolve, reject) => {
            setTimeout(() => { resolve(this.studentList); }, 3000)
        })
    }

    getStudentsFromServer():Observable<Student[]>{
        return this.http.get<Student[]>("api/students"); 
    }
    getStudentsFromServerByDone(done: boolean):Observable<Student[]>{
        return this.http.get<Student[]>("api/students/"+done); 
    }

    addStudent(student: Student): Observable<Student> {
        return this.http.post<Student>("api/students", student);
    }

    updateStudent(student: Student): Observable<Student> {
        return this.http.put<Student>("api/students/"+student.id, student);
    }

    deleteStudent(student: Student): Observable<boolean> {
        return this.http.delete<boolean>("api/students/" + student.id);
    }

    async getAvg(id: number): Promise<number> {
        let students = await this.getStudentsPromise()
        let student = students.find((student) => student.id === id)
        let sum: number = 0;
        let count: number = 0;
        if (student && student.tests) {
            student.tests.forEach(test => {
                sum += test.mark ? test.mark : 0;
                count++;
            });
        }
        return sum / count;
    }

    getTotalMissingDays(id: number): number {
        let studentByID = this.studentList.find((student) => student.id === id)
        let totalMissingDays: number = 0
        
        if (studentByID !== undefined) {
            studentByID.absenceDays.forEach((absenceDays: AbsenceDays) => {
                totalMissingDays += absenceDays.totalDays;
                
            })
        }
        return totalMissingDays;
    }
}