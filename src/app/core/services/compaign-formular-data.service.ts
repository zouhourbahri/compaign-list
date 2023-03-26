import { Injectable } from '@angular/core';
import { ICompagne } from '@core/modeles/compagnes';

@Injectable({
  providedIn: 'root'
})
export class CompaignFormularDataService {
dataCompaign:ICompagne | null=null
  constructor() { }
  setDataCompaign(data:ICompagne){
  this.dataCompaign=data
  }
  getDataCompaign(){
    return this.dataCompaign
  }
}
