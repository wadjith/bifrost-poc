//app base url

export class ApiRoute {
  static apiBaseUrl = "https://passenger-api.noblesse-voyage.com/api";

  static login = this.apiBaseUrl + "/login_check";

  static logout = this.apiBaseUrl + "/logout";
}
