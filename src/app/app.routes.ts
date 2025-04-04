import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { UserListComponent } from './page/user-list/user-list.component';
import { EmployeeListComponent } from './page/employee-list/employee-list.component';
import { NewEmployeeComponent } from './page/new-employee/new-employee.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'user-list',
                component: UserListComponent
            },
            {
                path: 'employee-list',
                component: EmployeeListComponent
            },
            {
                path: 'new-employee',
                component: NewEmployeeComponent
            }
        ]
    }
];
