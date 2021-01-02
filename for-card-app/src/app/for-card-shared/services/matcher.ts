import {Route, UrlSegment, UrlSegmentGroup} from '@angular/router';

export class ForCardMatcher {

  static forCardUserMatcher(
    segments: UrlSegment[],
    group: UrlSegmentGroup,
    route: Route
  ) {
    return {consumed: []};
  }
}
