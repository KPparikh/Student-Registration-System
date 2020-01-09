import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  student_id = this.actRoute.snapshot.params['student_id'];
  employeeData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getEmployee(this.student_id).subscribe((data: {}) => {
      
      this.employeeData = data;
      console.log(this.employeeData);
      console.log(this.employeeData[0].address);
     
    })
  }

  // Update employee data
  updateEmployee() {
        this.router.navigate(['/employee-list'])
    }
  }

//}