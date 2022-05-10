import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //default quantity=1
  it('should default quantity to be 1', () => {
    const qtyobj: number = component.qty;
    expect(qtyobj).toBe(1);
  });
  
  //empty as default value
  it('should total property empty as default value', () => {
    const strOutput:string  = component.total;
    expect(strOutput).toBe("");
  });

  it('should result contains "Total Amount : 195"', () => {
    component.price = 65;
    component.qty = 3;
    component. get_total_amount();
    const strOutput: string = component.total;
    console.log("Total="+component.total);
    expect(strOutput).toBe("Total Amount : 195");
  });

  it('should result contains "Total Amount : NaN"', () => {
    component.price = 556;
    component.qty = "huhu";
    component.get_total_amount();
    const strOutput: string = component.total;
    expect(strOutput).toBe("Total Amount : NaN");
  });

  it('should set the Quantity to 4 in textbox', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[1].value = 4;
    inputArray[1].dispatchEvent(new Event('input'));
    expect(component.qty).toBe('4');
  });

  it('should set the Unit price to 3 in textbox', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');

    inputArray[2].value = 3;
    inputArray[2].dispatchEvent(new Event('input'));
    expect(component.price).toBe('3');
  });

  it('should button click generates result in span --->total ', () => {

    const inputArray =  fixture.nativeElement.querySelectorAll("input");

		inputArray[0].value = 'LG';
		inputArray[0].dispatchEvent(new Event('input'));

		inputArray[1].value = '345';
		inputArray[1].dispatchEvent(new Event('input'));

    inputArray[2].value = '3';
		inputArray[2].dispatchEvent(new Event('input'));

    let inputObj = fixture.nativeElement.querySelector('button');
		inputObj.dispatchEvent(new Event('click'));

    //console.log(component.result);  // should modify paragraph
    fixture.detectChanges();

    let spanObj = fixture.nativeElement.querySelector('span');
    expect(spanObj.textContent).toBe('Total Amount : 1035');
 });



});
