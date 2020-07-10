
// contiene la información de las secciones,
// Una sección es por ejemplo:  header, body, footer, etc.
export class Section {
    id: number;
    name: string;
    height:number;

    //indica que la section estará disponible al momento de generar el reporte
    enable:boolean;
    
    constructor(_enable: boolean){
        this.enable = _enable;
    }
}