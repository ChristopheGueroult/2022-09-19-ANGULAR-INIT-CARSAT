import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion = 1;
  constructor() {}
  public increment(): void {
    this.numVersion = this.numVersion + 1;
    console.log(this.numVersion);
  }
}
