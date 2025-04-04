import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  http =  inject(HttpClient);

  employeeList: any = [];

  ngOnInit(): void {
    this.http.get('https://localhost:7276/api/Employee/GetAllEmployees').subscribe((data: any) => {
      this.employeeList = data;
    });
  }
  
}
