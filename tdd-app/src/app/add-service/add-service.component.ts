import { Component, inject } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  addService:AddService = inject(AddService)
  val1 = 0 
  val2 =  0 
  result =  0 


  sum(){
    this.result = this.addService.add(this.val1,this.val2)
  }


}