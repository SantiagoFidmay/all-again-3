export default class Pizza{
    constructor(diametro,espessura){
        this.raio = diametro/2
        this.altura = espessura
        this.densidade = 0.85
    }

    calcularAreaBase(){
        let area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume(){
        let volume = this.calcularAreaBase()
        return volume
    }

    //Relacionamento entre volume e a densidade
    //Regra do negócio da densidade da massa que é 0.85g/cm²

    getPesoUnitario(){
        return this.calcularVolume() * this.densidade 
    }
}