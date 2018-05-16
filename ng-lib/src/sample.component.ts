import { Component, ComponentFactoryResolver, Renderer2 } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>`
})
export class SampleComponent {

  constructor(
    private cfr: ComponentFactoryResolver,
    private renderer: Renderer2
  ) {
  }

}
