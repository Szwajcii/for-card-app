import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from '../components/auth/auth.service';
import {Role} from '../model/role.model';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[appUserCanAccess]'
})
export class UserCanAccessDirective implements OnInit, OnDestroy {

  @Input('appUserCanAccess') roles: Role[];
  private permission$: Subscription;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.permission$ = this.authService.getUserContext()
      .pipe(
        map(userContext => {
          if (userContext != null && this.roles) {
            return !!this.roles.some(role => userContext.roles.includes(role));
          } else {
            return false;
          }
        })
      ).subscribe(isAllowed => {
        if (isAllowed) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }

}
