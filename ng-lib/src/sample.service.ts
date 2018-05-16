import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() {

  }
  sayHello(): string {
    return 'hello mofo';
  }
}
