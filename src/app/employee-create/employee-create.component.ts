import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
import { mergeAnalyzedFiles } from '@angular/compiler';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { first_name: '', 
  email: '', phone_number: '',
  info_source:'television', campus_info:'students,location,atmosphere' }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  
   }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      
      this.router.navigate(['/employee-list'])
    })
  }

}