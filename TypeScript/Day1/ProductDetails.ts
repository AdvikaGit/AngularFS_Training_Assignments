

   

let productName : string;
let unitPrice:number;
let quantity:number;
let deliverToHome:boolean;
enum DiscountType {NEW15=15,WEEKEND25=25};
let totalTypesOfDiscount : number | DiscountType;


function getDiscountedPrice(unitPrice:number,quantity:number,totalTypesOfDiscount:DiscountType|number) : number {
    let totalPrice=(unitPrice*quantity);
    let discountedPrice= totalPrice - ((totalPrice*totalTypesOfDiscount)/100)
    return discountedPrice;
    
    

}

productName = "LG";
unitPrice=16400;
quantity=5;
deliverToHome=true;
totalTypesOfDiscount=DiscountType.NEW15;
console.log(`Product name = ${productName} , Unit price = ${unitPrice} , Quantity = ${quantity} , 
Discount = ${totalTypesOfDiscount} , Total Price = ${getDiscountedPrice(unitPrice,quantity,totalTypesOfDiscount)+(deliverToHome?30:0)} , Deilvery Mode = ${deliverToHome?"Deliver To Home":"Store Pickup"}`);

console.log("-------------------------------------------");


productName = "Samsung TV";
unitPrice=18000;
quantity=10;
deliverToHome=false;
totalTypesOfDiscount=10;

console.log(`Product name = ${productName} , Unit price = ${unitPrice} , Quantity = ${quantity} , 
Discount = ${totalTypesOfDiscount}% , Total Price = ${getDiscountedPrice(unitPrice,quantity,totalTypesOfDiscount)+(deliverToHome?30:0)} , Deilvery Mode = ${deliverToHome?"Deliver To Home":"Store Pickup"}`);
