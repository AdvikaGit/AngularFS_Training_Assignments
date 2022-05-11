import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //2. Test child component loading
  it('should render child component elements -- product-details', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
    expect(childComponent).toBeTruthy();
  });

  it('should render all child component elements -- product-details', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-product-details'));
    expect(childComponents.length).toBe(component.productArr.length);
  });


  // 4. Test child component properties
it('testing child component data -- product-details', () => {
  const testObj:any = { pid: 1, pname: "Samsung", price: 100, category: "mobile", qty: 4 };
  const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
  // console.log(childComponent.properties["deptObj"]);
  // expect(childComponent.properties["deptObj"]).toEqual( testObj  );
  expect(childComponent.properties["item"]).toEqual( component.productArr[0] );
});


/// 5. Test child component events
it('testing child component events -- onDeptRemove', () => {
  const childComponent  = fixture.debugElement.query(By.css('app-product-details'));
  const pid = childComponent.properties["item"].pid;

  //console.log("Before remove : "  + component.depts.length);
  childComponent.triggerEventHandler('onremoveprod', pid)
  // console.log("After remove : "  + component.depts.length);

  let index = component.productArr.findIndex( (item:any) => item.pid == pid);
  expect(index).toBe(-1);
});



});
