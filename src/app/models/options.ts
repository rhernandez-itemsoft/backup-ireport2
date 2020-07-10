export class RptOptions {
    name: string = ''; //nombre del reporte: es un identificador único

    // marginLeft:number=0;
    // marginTop:number=0;
    // marginRight:number=0;
    // marginBottom:number=0;

    // orientationId:number=0;
    // unitId:number=0;
    // sizeId:number=0;
    // zoomId:number=0;
    
    
    orientation: RptOrientation; //horientación de la página
    unit: RptUnit; //unidad de medida del workspace (vista en modo diseño)
    size: RptSize; //tamaño de la hoja
    margin: RptMargin = new RptMargin(1,1,1,1); //margen de la hoja
    zoom: RptZoom; //zoom en el workspace
    requestMethods: RptRequestMethod[];
    //urlApiData: string = ''; //url de la api que va a consumir
    //typeCallApi: RptTypeCallApi; //tipo de llamada al servicio (urlApiData)
    //urlApiTotalPages: string = ''; //servicio que nos dice el total de paginas que leeremos (cuando el tipo de llamada es por paginación)
    //recordsByPage: number = 1000; //número de registros máximos por pagina (registros que obtendremos en cada peticion para ir armando el pdf)
    
}


//RptRequestMethod metodos de coneccion para las APIS que consume el reporte (connections and Datasources)
export class RptRequestMethod {
    id:number=0;
    method: string = '';
}

//Orientation orientación de la página
//Horizontal o Vertical
export class RptOrientation {
    id:number=0;
    value: string = '';
    label: string = '';
    constructor(_id:number, _value: string, _label: string) {
        this.id = _id;
        this.value = _value;
        this.label = _label;
    }
}

//Unidad de medida del espacio de trabajo, cm, px
export class RptUnit {
    id:number=0;
    value: string = '';
    label: string = '';
    constructor(_id:number,_value: string, _label: string) {
        this.id = _id;
        this.value = _value;
        this.label = _label;
    }
}

//tamaño de la hoja
//letter
//A4
export class RptSize {
    id:number=0;
    width: number = 0;
    height: number = 0;
    value: string = '';
    label: string = '';

    constructor(_id:number,_width: number, _height: number, _value:string, _label: string) {
        this.id = _id;
        this.width = _width;
        this.height = _height;
        this.value = _value;
        this.label = _label;
    }
}


//zoom en el espacio de trabajo
export class RptZoom {
    id:number=0;
    value: number = 0;
    label: string = '';
    constructor(_id:number,_value: number, _label: string) {
        this.id = _id;
        this.value = _value;
        this.label = _label;
    }
}

//margenes en la hoja del reporte
export class RptMargin {
    //unidad: milimetros
    left: number = 15; 
    top: number = 15;
    right: number = 15;
    bottom: number = 15;
    
    constructor(_left:number, _top:number, _right:number, bottom:number){
        this.left = _left;
        this.top = _top;
        this.right = _right;
        this.bottom = bottom;
    }
}

/*
//tipo de llamada del servicio que nos retornará los datos
//Obtener los datos en una sola petición
//obtener los datos en varias peticiones (por paginación)
export class RptTypeCallApi {
    value: number = 0;
    label: string = '';
    constructor(_value: number, _label: string) {
        this.value = _value;
        this.label = _label;
    }
}
*/


export class StyleSheet {
    width: string = '';
    height: string = '';
    // 'max-width': string = '';
    // 'max-height': string = '';

    // 'padding-left': string = '';
    // 'padding-top': string = '';
    // 'padding-right': string = '';
    // 'padding-bottom': string = '';

    transform: string='scale(1)'; 
}

export class ZoomPage {
    transform: string='scale(1)'; // scale(1);
}