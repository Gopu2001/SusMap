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
  baseURLpt1 = "https://sheets.googleapis.com/v4/spreadsheets/" + this.SHEETS_ID + "/values/'";
  //surround the name of the sheet with a single quotes
  baseURLpt2 = "'?key=" + this.SHEETS_API_KEY;

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
  async arrayToJSONWithHeaders(values): Promise<any> {
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

  async buildPromise(name: string, refresh: boolean): Promise<any> {
    name = (""+name).toUpperCase();//just in case
    return await new Promise<any>((res,rej) => {
      this.storage.get(name).then((val) => {
        if(val && !refresh) {
          res(val); //exists
        } else {

          this.http.get(this.baseURLpt1 + name + this.baseURLpt2).subscribe((data: {}) => {

            this.arrayToJSONWithHeaders(data['values']).then((parsedData: Array<any>) => {
              try {
                this.storage.set(name, parsedData);
              } catch (error) {
                console.log(parsedData);
              }
              res(parsedData);
            });

          })
        }
      }).catch((err) => {
        console.log(err);
        rej(err);
      });
    });
  }

  async getBuildingFilterNames(refresh: boolean): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      if(this.filterNames.length != 0 && this.buildings.length != 0 && !refresh) {
        resolve([this.buildings, this.filterNames]);
      }

      var promArr = [this.buildPromise("BUILDINGS", refresh)];
      if(this.filterNames.length == 0) {
        //doesnt exist
        promArr.push(this.buildPromise("FILTERS", refresh));
      }
      forkJoin(promArr).subscribe((data)=> {
        this.buildings = data[0];
        if(this.filterNames.length == 0) {
          var tempFilterNames = data[1];
          for (let i = 0; i < tempFilterNames.length; i++) {
            var tempJSON = {};
            tempJSON["FILTER_NAME"] = tempFilterNames[i]["NAME"].toUpperCase();
            tempJSON["ACTIVE"] = false;
            this.filterNames.push(tempJSON);
          }
        }

        resolve([this.buildings, this.filterNames]);
      });

    });
  }

  async getAllFilterData(refresh: boolean): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
      var promArr = []
      for (let i = 0; i < this.filterNames.length; i++) {
        promArr.push(this.buildPromise(this.filterNames[i]["FILTER_NAME"], refresh));
      }
      forkJoin(promArr).subscribe((data: []) => {
        for (let i = 0; i < data.length; i++) {
          var tempJSON = {};
          tempJSON["FILTER_NAME"] = this.filterNames[i]["FILTER_NAME"];
          tempJSON["ACTIVE"] = this.filterNames[i]['ACTIVE'];
          tempJSON["DATA"] = data[i]
          this.allFilterData.push(tempJSON);
        }
        resolve(this.allFilterData);
      });

    });
  }

  async getSpecificBuildingData(id: number) {
    return await new Promise<any>((resolve, reject) => {
      this.storage.get("BUILDINGS").then((val) => {
        const ind = val.findIndex(building => building['BUILDING_ID'] == id)
        resolve(val[ind]);
      })
    });
  }

  updateFilterData(filters) {
    this.filterNames = filters;
  }
}
