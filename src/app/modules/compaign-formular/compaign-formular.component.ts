import { Component, OnInit } from '@angular/core';
import { CompaignFormularDataService } from '@core/services/compaign-formular-data.service';
import brands from '@assets/brands.json'
import mediaList from '@assets/media-list.json'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IBrand } from '@core/modeles/brands';
import { ICompagne } from '@core/modeles/compagnes';
import { IMedia } from '@core/modeles/media';

@Component({
  selector: 'app-compaign-formular',
  templateUrl: './compaign-formular.component.html',
  styleUrls: ['./compaign-formular.component.css']
})
export class CompaignFormularComponent implements OnInit {
  listBrands:IBrand[]=brands
  listMedias:IMedia[]=mediaList
  selectedCompaign:ICompagne | null=null
  formCompaign!:FormGroup
  constructor(private compaignService:CompaignFormularDataService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.selectedCompaign=this.compaignService.getDataCompaign()
    if(this.selectedCompaign){
      this.formCompaign=this.createFormCompaign(this.selectedCompaign)
      let mediaForm = this.formCompaign.get('media') as FormArray
      for(const media of this.selectedCompaign.media){
        mediaForm.push(this.createMediaForm(media))
      }
    } else {
      this.router.navigate(['/list'])
    }
  }
createFormCompaign(data:ICompagne){
  return this.fb.group({
    brand:data.brand.brandId,
    campaignName:data.campaignName,
    media:this.fb.array([])
  })
}
createMediaForm(media:IMedia){
  return this.fb.group({
    mediaId: media.mediaId,
    name:media.name,
    value:media.value
  })
}
verifyMediaExistance(id:number){
  if(this.formCompaign.get('media')?.value.find((el:{mediaId:number})=>el.mediaId===id)){
    return true
  } else {
    return false
  }
}
}
