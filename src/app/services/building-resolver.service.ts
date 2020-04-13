import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { ActivatedRouteSnapshot } from '@angular/router';

import { AppDataService } from './app-data.service';

@Injectable({
  providedIn: 'root'
})
export class BuildingResolverService implements Resolve<any> {

  constructor(
    private info: AppDataService,
    // private activatedRoute: ActivatedRoute
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.info.getSpecificBuildingData(Number(route.paramMap.get("id")));
  }
}
