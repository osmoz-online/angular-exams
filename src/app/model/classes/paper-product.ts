export class PaperProduct {
    public id: number;
    public nom: string;
    public texture: string;
    public grammage: string;
    public couleur: string;

    constructor(data?) {
        this.setProductData(data);
    }

    setProductData(data?) {
        if (data) {
            if (data.hasOwnProperty('id')) this.id = data['id'];
            if (data.hasOwnProperty('nom')) this.nom = data['nom'];
            if (data.hasOwnProperty('texture')) this.texture = data['texture'];
            if (data.hasOwnProperty('grammage')) this.grammage = data['grammage'];
            if (data.hasOwnProperty('couleur')) this.couleur = data['couleur'];
        }
    }

    getAsString() {
        console.log('[' + this.id + '] ' + this.nom + '(' + this.texture + ', ' + this.grammage + ', ' + this.couleur + ')')
    }

    equals(p: PaperProduct) {
        return this.id === p.id
            && this.nom === p.nom
            && this.texture === p.texture
            && this.grammage === p.grammage
            && this.couleur === p.couleur;
    }

}
