import { Component, Inject } from '@angular/core';
import { TestService } from './test.service';

@Component({
    selector: 'app-root',
    styles: [],
    template: 'Hello',
})
export class AppComponent {
    constructor(/*@Inject(TestService)*/ test: TestService) {
        test.write();
    }
}
