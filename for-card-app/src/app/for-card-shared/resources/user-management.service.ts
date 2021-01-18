import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs';
import {Role} from '../model/role.model';
import {AuthService} from '../components/auth/auth.service';
import {UserContext} from '../model/user-context.model';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  userManagementApi = '/api/user';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  findAllUsers(): Observable<User.DataModel[]> {
    return this.http.get<User.DataModel[]>(`${this.userManagementApi}/all`);
  }

  findUserById(id: string): Observable<User.Model> {
    return this.http.get<User.Model>(`${this.userManagementApi}/${id}`);
  }

  getUserContext(): Observable<UserContext> {
    return this.authService.userContext;
  }

  update(user: User.Model): Observable<User.Model> {
    return this.http.put<User.Model>(`${this.userManagementApi}`, user);
  }

  isUserHasRole(role: Role): Observable<boolean> {
    return this.getUserContext()
      .pipe(
        filter(user => !!user),
        map(user => user.roles.includes(role))
      );
  }

  isUserHasOneOfRoles(roles: Role[]): Observable<boolean> {
    return this.getUserContext().pipe(map(user => !!roles.some(role => {
      console.log(user);
      return user.roles.includes(role);
    })));
  }

  findUserIdFromContext(): Observable<string> {
    return this.getUserContext()
      .pipe(
        filter(data => !!data),
        map(data => data.id)
      );
  }
}
