export default class Skills {
        id:String;
        
      type:String;
        
       img_skill:String;
        
         name:String;
        
         amount:Number;
        

 

  constructor(
    id: String, 
    type: String, 
    img_skill: String, 
    name: String, 
    amount: Number
) {
    this.id = id
    this.type = type
    this.img_skill = img_skill
    this.name = name
    this.amount = amount
  }



}