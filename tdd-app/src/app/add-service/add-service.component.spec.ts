import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from './add-service.component';
import { AddService } from '../add.service';

describe('AddServiceComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;
  let addServiceSpy:jasmine.SpyObj<AddService>
  
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AddService',['add'])

    await TestBed.configureTestingModule({
      imports: [AddServiceComponent],
      providers:[
        {provide:AddService, useValue:spy}

      ]


    })
    .compileComponents();
    addServiceSpy = TestBed.inject(AddService) as jasmine.SpyObj<AddService>

    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should calculate the sum of two numbers using AddService',()=>{
    const mockSum = 3;
    addServiceSpy.add.and.returnValue(mockSum);
    component.val1 = 2;
    component.val2 = 1;
    component.sum();
    fixture.detectChanges();
    expect(component.result).toBe(mockSum);
    // expect(addServiceSpy.add).toHaveBeenCalledWith(2,1);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
