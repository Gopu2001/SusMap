import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Papa } from 'ngx-papaparse';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(
    private storage: Storage,
    private papa: Papa
  ) { }

  async getFilterData(refresh: boolean): Promise<any> {
    var filters = [];
    return await new Promise<any>((resolve, reject) => {
      this.storage.get("filters").then((val) => {
        if(val && !refresh) {
          filters = val;
          resolve(filters);
        } else {
          this.papa.parse('https://raw.githubusercontent.com/Apro123/GhettoDatabase/master/filters.csv', {
            download: true,
            header: true,
            skipEmptyLines: 'greedy',
            complete: result => {
              filters = result.data;
              filters[0]['active'] = true;
              for (let i = 1; i < filters.length; i++) {
                filters[i]['active'] = false;
              }
              this.storage.set("filters", filters);
              resolve(filters);
            },
            error: err => {
              console.log(err);
              reject();
            }
          });
        }
      });
    });
  }

  async getFilterDataSimple(): Promise<any> {
    return this.storage.get("filters");
    // return await new Promise<any>((resolve, reject) => {
    //   this.storage.get("filters").then((val) => {
    //     if(val) {
    //       resolve(val);
    //     } else {
    //       console.log(val);
    //       reject();
    //     }
    //   }).catch((err) => {
    //     console.log(err);
    //     reject();
    //   })
    // });
  }

  updateFilterData(filters) {
    this.storage.set("filters", filters);
  }

  async getBuildingData(refresh: boolean): Promise<any> {
    var buildings = [];
    return await new Promise<any>((resolve, reject) => {
      this.storage.get("buildings").then((val) => {
        if(val && !refresh) {
          buildings = val;
          resolve(buildings);
        } else {
          this.papa.parse('https://raw.githubusercontent.com/Apro123/GhettoDatabase/master/buildings.csv', {
            download: true,
            header: true,
            skipEmptyLines: 'greedy',
            complete: result => {
              buildings = result.data;
              for (let i = 0; i < buildings.length; i++) {
                buildings[i]['url'] = '/folder/' + buildings[i]['BUILDING_ID'];
              }
              this.storage.set("buildings", buildings);
              resolve(buildings);
            },
            error: err => {
              console.log(err);
              reject();
            }
          });
        }
      });
    });
  }

  async getBuildingDataSimple(): Promise<any> {
    return this.storage.get("buildings");
    // return await new Promise<any>((resolve, reject) => {
    //   this.storage.get("buildings").then((val) => {
    //     if(val) {
    //       resolve(val);
    //     } else {
    //       console.log(val);
    //       reject();
    //     }
    //   }).catch((err) => {
    //     console.log(err);
    //     reject();
    //   })
    // });
  }
}
