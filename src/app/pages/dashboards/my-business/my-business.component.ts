import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent, CardComponent } from '@brunovbsilva/material';
import { SessionUserService } from '@core/service/session-user.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-my-business',
    imports: [
        ButtonComponent,
        CardComponent,
        TranslateModule,
        RouterLink
    ],
    templateUrl: './my-business.component.html',
    styleUrl: './my-business.component.scss'
})
export class MyBusinessComponent {

  constructor(private _sessionUser: SessionUserService) {}

  protected provider$ = computed(() => this._sessionUser.sessionUser$().profile.serviceProvider);
}
