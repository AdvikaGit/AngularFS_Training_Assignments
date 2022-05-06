import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[IsAdmin]'
})
export class IsAdminDirective  
{

  @Input()
  IsAdmin: boolean = true;


  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }


  ngOnChanges()
   {

    if(this.IsAdmin == true)
    {
        // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }
  


}