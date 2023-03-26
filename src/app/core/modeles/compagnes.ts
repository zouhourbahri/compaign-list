import { IBrand } from '@core/modeles/brands';
export interface TotalCompagnes{
    totalVolume:number,
    requests:ICompagne[]
}
export interface ICompagne {
    requestId: number,
    advice: boolean,
    campaignName  : string,
    campaignDescription  : string,
    decisionDeadline  : string |null,
    decisionDescription  : string,
    key  : string,
    numberOfAssets  : number,
    createdDate  : string,
    updatedDate  : string | null,
    submittedDate  : string |null,
    validatedDate  : string |null,
    affiliate  : IAffiliate,
    brand  : IBrand,
    requestStatus  : IRequestStatus,
    createdBy  : ICreatedBy,
    updatedBy  : IUpdatedBy | null,
    submittedBy  : ISubmittedBy | null,
    validatedBy  : IValidatedBy | null,
    countries  : ICountry[],
    media  : IMedia[]
  }
  export interface IAffiliate{
        affiliateId  : number,
        name  : string  
  }
  
  export interface IRequestStatus {
    requestStatusId  : number,
    name  : string,
    value  : string,
    step  : number
}
  export interface ICreatedBy{
    userInfoId  : number,
    name  :string,
    email  :string
}
  export interface IUpdatedBy {
    userInfoId  : number,
    name  : string,
    email  : string
}
  export interface ICountry{
    countryId  : number,
    name  : string,
    value  : string
}
  export interface IMedia{
    mediaId  : number,
    name  : string,
    value  : string
}
  export interface IValidatedBy {
     userInfoId : number,
     name :  string ,
     email :  string 
}
  export interface ISubmittedBy {
     userInfoId : number,
     name :  string ,
     email :  string
}