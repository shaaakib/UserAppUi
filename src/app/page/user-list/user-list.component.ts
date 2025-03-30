import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [DatePipe, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  constructor(private http: HttpClient) {}

  userList : any = [];
  stateList : any = [];
  districtList : any = [];
  cityList : any = [];

  selectedSateId: string = '';
  selectedDistrictId: string = '';
  selectedCity: string = '';

  ngOnInit(): void {
    this.getUsers();
    this.getAllState();
  }

  getUsers() {
    this.http.get('https://localhost:7276/api/User/GetAllUsers').subscribe((response: any) => {
      this.userList = response;
    });
  }

  getAllState(){
    this.http.get('https://localhost:7276/api/Master/GetAllState').subscribe((response: any) => {
      this.stateList = response;
    }
    );
  }

  GetDistrictByStateId() {
    this.cityList = [];
    this.http.get('https://localhost:7276/api/Master/GetDistrictByStateId?stateId=' + this.selectedSateId).subscribe((response: any) => {
      this.districtList = response;
    });
  }
  
  GetCityByDistrictId() {
    this.http.get('https://localhost:7276/api/Master/GetCityByDistrictId?districtId=' + this.selectedDistrictId).subscribe((response: any) => {
      this.cityList = response;
    });
  }
}
