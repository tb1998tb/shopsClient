import { Category } from "./Category";

export class Shop{
    public codeShop:number;
    public nameShop:string;
    public passwordShop:string;
    public phoneShop?:string;
    public mailShop:string;
    public latitude:Float32Array;
    public longitude:number;
    public fromHour?:any;
    public toHour?:any;
    public categories:Category[];
}