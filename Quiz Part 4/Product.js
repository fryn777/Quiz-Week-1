export default class Product{
    constructor(prodId,prodName, category, price=0,totalBuy=1){

        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
        this.subTotal= price * totalBuy

    }

    setPrice(price){

        return price.toString();
    }

    setTotalBuy(total){

        return total.toString();
    }

    toString(){
        
        return `Id produk : ${this.prodId} Nama : ${this.prodName} Kategori : ${this.category}
        Harga :  ${this.setPrice} Total : ${this.setTotalBuy} `
    }

}