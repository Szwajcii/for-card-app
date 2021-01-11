import {Route, UrlSegment, UrlSegmentGroup} from '@angular/router';
import {Role} from '../model/role.model';

const USER_CONTEXT = 'app.userContext';

export class ForCardMatcher {

  static forCardUserMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));

    const isMatch = user ? user.roles.includes(Role.USER) : false;

    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

  static forCardAdminMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    const user = JSON.parse(localStorage.getItem(USER_CONTEXT));

    const isMatch = user ? user.roles.includes(Role.ADMIN) : false;

    if (isMatch) {
      return {consumed: []};
    } else {
      return null;
    }
  }

}
