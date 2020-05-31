import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-header',
    templateUrl: './section-header.component.html',
    styleUrls: ['./section-header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeaderComponent implements OnInit {

    @Input()
    title = 'The section title';

    constructor() {
    }

    ngOnInit() {
    }

}
