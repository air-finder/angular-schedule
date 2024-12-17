import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@brunovbsilva/material';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-page-not-found',
    imports: [
        TranslateModule,
        ButtonComponent,
        RouterLink
    ],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
