import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  imports: [FormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css',
})
export class NewEmployeeComponent {
  employeeObj: any = {
    employeeId: 0,
    name: '',
    contactNo: '',
    email: '',
    projectName: '',
    city: '',
    address: '',
    employeeFamilies: [],
  };

  familyObj: any = {
    familyId: 0,
    employeeId: 0,
    name: '',
    relation: '',
    age: 0,
  };

  http = inject(HttpClient);

  onAddFamily(){
    const  localObj = JSON.stringify(this.familyObj);
    const family = JSON.parse(localObj);
    this.employeeObj.employeeFamilies.unshift(family);
  }

  onSaveEmployee(){
    debugger;
    this.http.post('https://localhost:7276/api/Employee/CreateEmployee', this.employeeObj).subscribe((response) => {
      debugger;
      alert('Employee added successfully');
    })
  }

}
