import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../service/services.service';




@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberForm: FormGroup;
  submitted:boolean = false;
  m_types:any[] = [
    { Name: 'Main Worker', id: 'M' },
    { Name: 'Co-Worker', id: 'C'},
    { Name: 'Self Employee', id: 'S'}
    ];

  constructor(private formBuilder: FormBuilder, private services:ServicesService) { }

  ngOnInit(): void {

    this.memberForm = this.formBuilder.group({
      member_id: ['', Validators.required],
      member_name: ['', Validators.required],
      current_firm: ['', Validators.required],
      application_number: ['', Validators.required],
      firm_address: ['', Validators.required],
      work_type: ['', Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.memberForm.invalid) {
      this.memberForm.value
    }
    let postVal:any = this.services.addValues(this.memberForm.value)
    // console.log('postVal',postVal)
    // if(postVal.success === 1) this.Route.navigate(['/'])
  }
  setNewUser(val){
    console.log(val);
  }

}
