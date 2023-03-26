import { Component, OnInit } from '@angular/core';
import compagnes from '@assets/list-compagnes.json'
import brands from '@assets/brands.json'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompaignFormularDataService } from '@core/services/compaign-formular-data.service';
import moment from "moment"
import { ICompagne, TotalCompagnes } from '@core/modeles/compagnes';
import { IBrand } from '@core/modeles/brands';
@Component({
  selector: 'app-compagnes-list',
  templateUrl: './compagnes-list.component.html',
  styleUrls: ['./compagnes-list.component.css']
})

export class CompagnesListComponent implements OnInit {
compagnes:ICompagne[]=[]
brands:IBrand[]=brands
compagnesInitialValues:TotalCompagnes=compagnes
moment=moment
filterForm:FormGroup=this.createForm()
  constructor(private fb:FormBuilder, private router:Router, private compaignService:CompaignFormularDataService) { }
  displayedColumns: string[] = ['Status', 'Name', 'Type', 'Brand',"Submission","action"];
  ngOnInit(): void {
    this.compagnes=this.compagnesInitialValues.requests
  }
  createForm(){
  return this.fb.group({
  name:null,
  type:null
})
  }
  filterData(){
    let filteredCompagne:ICompagne[]=[]
    if(this.filterForm.get('name')?.value){
      filteredCompagne=this.compagnesInitialValues.requests
      .filter((el:ICompagne)=>el.campaignName.toLowerCase().includes(this.filterForm.get('name')?.value.toLowerCase()))
    }
    if(this.filterForm.get('type')?.value){
      let array = this.filterForm.get('name')?.value? filteredCompagne : this.compagnesInitialValues.requests
      this.compagnes= array.filter((el:ICompagne)=>el.brand.brandId === this.filterForm.get('type')?.value)
      return this.compagnes 
    }
    this.compagnes = filteredCompagne
    return this.compagnes 
  }
  redirectTo(compaign:ICompagne){
    this.compaignService.setDataCompaign(compaign)
    this.router.navigate([`/list/details/${compaign.requestId}`])
  }
}

