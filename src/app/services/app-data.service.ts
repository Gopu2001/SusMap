import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Papa } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  SHEETS_ID = "12jc_EN3Uh5RHPjjmI-osbys7oHBq9RPSWn71_4zhRSM";
  SHEETS_API_KEY = "AIzaSyBZgDR2xgMIi_xlt-luKmuJPj2DUxsplnk";
  baseURLpt1 = "https://sheets.googleapis.com/v4/spreadsheets/" + SHEETS_ID + "/values/'";
  //surround the name of the sheet with a single quotes
  baseURLpt2 = "'?key=" + SHEETS_KEY;

  filters = [];

  filterNames = [];
  allFilterData = [];
  buildings = [];

  constructor(
    private storage: Storage,
    private papa: Papa,
    private http: HttpClient
  ) { }

  //turns unparsed array to array of json objects
  async arrayToJSONWithHeaders(values: []): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      var tempArr = []; //returning this value
      for(let i = 1; i < values.length; i++) {
        var tempJSON = {}; //temp data to insert into tempArr

        for (let j = 0; j < values[i].length; j++) {
          tempJSON[(values[0][j]+"").toUpperCase()] = values[i][j];
        }

        tempArr.push(tempJSON);
      }

      resolve(tempArr);
    });
  }

  // arrayToJSONWithHeaders(values: []) {
  //   var tempArr = []; //returning this value
  //   for(let i = 1; i < values.length; i++) {
  //     var tempJSON = {}; //temp data to insert into tempArr
  //
  //     for (let j = 0; j < values[i].length; j++) {
  //       tempJSON[(values[0][j]+"").toUpperCase()] = values[i][j];
  //     }
  //
  //     tempArr.push(tempJSON);
  //   }
  //   return tempArr;
  // }

  async buildPromise(name: string): Promise<any> {
    name = name.toUpperCase();//just in case
    return await new Promise<any>((res,rej) => {
      this.storage.get(name).then((val) => {
        if(val && !refresh) {
          res(val); //exists
        } else {

          this.http.get(baseURLpt1 + name + baseURLpt2).subscribe((data: {}) => {

            this.arrayToJSONWithHeaders(data['values']).then((parsedData: []) => {
              this.storage.set(name, parsedData);
              res(parsedData);
            };

          }).catch((err) => {
            console.log(err);
            rej(err);
          });

        }
      }).catch((err) => {
        console.log(err);
        rej(err);
      });
    });
  }

  async getBuildingFilterNames(refresh: boolean): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      forkJoin([
        this.buildPromise("BUILDINGS"),
        this.buildPromise("FILTERS")

      ]).subscribe((data: [])=> {
        this.buildings = data[0];
        var tempFilterNames = data[1];

        for (let i = 0; i < tempFilterNames.length; i++) {
          var tempJSON;
          tempJSON["FILTER_NAME"] = tempFilterNames[i].toUpperCase();
          tempJSON["ACTIVE"] = false;
          this.filterNames.push(tempJSON);
        }

        resolve([this.buildings, this.filterNames])
      });

    });
  }

  async getAllFilterData(refresh: boolean): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      promArr = []
      for (let i = 0; i < this.filterNames.length; i++) {
        promArr.push(buildPromise(this.filterNames[i]));
      }
      forkJoin(promArr).subscribe((data: []) => {
        for (let i = 0; i < this.data.length; i++) {
          var tempJSON = {};
          tempJSON["FILTER_NAME"] = this.filterNames[i]["FILTER_NAME"];
          tempJSON["DATA"] = data[i]
          this.allFilterData.push(tempJSON);
        }
        resolve(this.allFilterData);
      });

    });
  }


  // triggerFilterApiCalls() { //cont in data branch
  //   for (let i = 0; i < this.filters.length; i++) {
  //     this.getSpecificFilterData(this.filters[i]['Name'], true).then((val) => {
  //       if(val) {
  //         this.filters[i]['data'] = val;
  //       }
  //     });
  //   }
  // }
  //
  // async getFilterData(refresh: boolean): Promise<any> {
  //   return await new Promise<any>((resolve, reject) => {
  //     this.storage.get("filters").then((val) => {
  //       if(val && !refresh) {
  //         this.filters = val;
  //         resolve(this.filters);
  //       } else {
  //         this.papa.parse('https://raw.githubusercontent.com/Apro123/GhettoDatabase/master/filters.csv', {
  //           download: true,
  //           header: true,
  //           skipEmptyLines: 'greedy',
  //           complete: result => {
  //             this.filters = result.data;
  //             for (let i = 0; i < this.filters.length; i++) {
  //               this.filters[i]['active'] = false;
  //             }
  //             this.storage.set("filters", this.filters);
  //             resolve(this.filters);
  //           },
  //           error: err => {
  //             console.log(err);
  //             resolve(val); //no internet
  //           }
  //         });
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //       reject();
  //     });
  //   });
  // }
  //
  // updateFilterData(filters) {
  //   this.filters = filters;
  //   this.storage.set("filters", this.filters);
  // }
  //
  // async getBuildingData(refresh: boolean): Promise<any> {
  //   var buildings = [];
  //   return await new Promise<any>((resolve, reject) => {
  //     this.storage.get("buildings").then((val) => {
  //       if(val && !refresh) {
  //         buildings = val;
  //         resolve(buildings);
  //       } else {
  //         this.papa.parse('https://raw.githubusercontent.com/Apro123/GhettoDatabase/master/buildings.csv', {
  //           download: true,
  //           header: true,
  //           skipEmptyLines: 'greedy',
  //           complete: result => {
  //             buildings = result.data;
  //             for (let i = 0; i < buildings.length; i++) {
  //               buildings[i]['url'] = '/folder/' + buildings[i]['BUILDING_ID'];
  //             }
  //             this.storage.set("buildings", buildings);
  //             resolve(buildings);
  //           },
  //           error: err => {
  //             console.log(err);
  //             resolve(val); //no internet
  //           }
  //         });
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //       reject();
  //     });
  //   });
  // }
  //
  // async getSpecificBuildingDataSimple(id): Promise<any> {
  //   // return this.storage.get("buildings");
  //   return await new Promise<any>((resolve, reject) => {
  //     this.storage.get("buildings").then((val) => {
  //       if(val) {
  //         const ind = val.findIndex(building => building['BUILDING_ID'] == id)
  //         resolve(val[ind]);
  //       } else {
  //         console.log(val);
  //         reject();
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //       reject();
  //     })
  //   });
  // }
  //
  // async getSpecificFilterData(filterName: string, refresh: boolean): Promise<any> {
  //   var temp = [];
  //   return await new Promise<any>((resolve, reject) => {
  //     this.storage.get(filterName).then((val) => {
  //       if(val && !refresh) {
  //         resolve(val);
  //       } else {
  //         this.papa.parse('https://raw.githubusercontent.com/Apro123/GhettoDatabase/master/' + filterName + '.csv', {
  //           download: true,
  //           header: true,
  //           skipEmptyLines: 'greedy',
  //           complete: result => {
  //             this.storage.set(filterName, result.data);
  //             resolve(result.data);
  //           },
  //           error: err => {
  //             console.log(err);
  //             resolve(val); //no internet
  //           }
  //         });
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //       reject();
  //     });
  //   });
  // }
}
