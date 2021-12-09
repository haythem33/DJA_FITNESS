export class Product {
    _id!: string;
    productName!:string;
    quantity!:number;
    price!:number;
    static fromObject(product : any) : Product {
        let c = new Product();
        c._id = product._id;
        c.productName = product.productName;
        c.quantity = product.quantity;
        c.price = product.price;
        return c;
      }
} 