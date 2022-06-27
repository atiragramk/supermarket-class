import { TReforms } from "../types/types";


export class Requirements {
    
   public reforms : TReforms[] = [
    {name: 'judge reform', priority: 'urgent', status: 'pending'},
    {name: 'medical reform', priority: 'high', status: 'pending'},
    {name: 'land reform', priority: 'low', status: 'pending'},
    {name: 'bussiness reform', priority: 'high', status: 'pending'},
    {name: 'public administration reform', priority: 'low', status: 'pending'},
   ] 

   get reform () {
      return this.reforms
   }
   
}