import { HttpHeaders } from '@angular/common/http';

export class Utils {
  static noAuthHeader = { headers: new HttpHeaders({ apiKey: 'noAuth' }) };
}
