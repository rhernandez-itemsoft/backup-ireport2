import { CtrlObjStyles } from './ctrl-obj-styles';



export class Ctrl {
  isActive:boolean;
  //indica la posición en la matriz de objeto
  index:number;

  //tipo de control
  type:string;

  //nombre del control
  name: string;

  //contiene el texto y/o los campos que se van a imprimir en el reporte
  data: string;

  //permite sobreponer un control sobre otro
  zIndex:number;


  //posición Y del control
  top: number;

  //posición X del control
  left: number;

  //ancho del control
  width: number;

  //alto del control
  height: number;
  
  
  
  //border width en px
  borderWidth: number;

  //border style: solid, dashed
  borderStyle:string;

  //border color
  borderColor:string;

  //show border left
  borderLeft: boolean;

  //show border top
  borderTop: boolean;

  //show border right
  borderRight: boolean;

  //show border bottom
  borderBottom: boolean;

  //font size en unidad pt
  fontSize:number;

  //text bolder
  bolder: boolean;

  //text talic
  italic: boolean;

  //text underline
  underline: boolean;

  //text strikethrough 
  strikethrough: boolean;

  //background color
  backgroundColor:string;

  //text color
  textColor:string;

  //text align
  textAlign:string;

  maxWidth:number=100;
  maxHeight:number=100;

  container:any;
  //Arma el style que se deberá establecer en la vista para mostrar el control adecuadamente
  style: any;
  private _style:any;
  prepareStyle() : any{
    this._style= {
        width:  this.width+'px',
        height:  this.height+'px',
        'max-width': this.width + (this.container.width -this.left - this.width)+'px',
        'max-height': this.height + ( this.container.height - this.top - this.height) +'px',
        transform: 'translate3d('+this.left+'px, '+this.top+'px, '+'0px)',
    };

    //agrega los estilos que se hallan establecido para el border
    this.setBorderStyle();

    //agrega los estilos que permiten formatear el texto
    this.setFormatText();

    this.setColor();
    this.style = this._style;
    
    //console.log('prepareStyle...');
    return this._style;
  }


  constructor(){
    this.isActive = false;
    this.index = -1;
    this.type = 'input';
    this.name = '';
    this.data = '';
    this.zIndex = 0;
    this.top = 0;
    this.left = 0;
    this.width = 150;
    this.height = 25;
    this.container = new SheetSectionContainer();
    this.borderWidth = 0;
    this.borderStyle = '';
    this.borderColor = '';
    this.borderLeft = false;
    this.borderTop = false;
    this.borderRight = false;
    this.borderBottom = false;
    this.fontSize = 0;
    this.bolder = false;
    this.italic = false;
    this.underline = false;
    this.strikethrough = false;
    this.backgroundColor = '';
    this.textColor = '';
    this.textAlign = '';

    //this.prepareStyle();
  }

  //agrega los estilos que se hallan establecido para el border
  private setBorderStyle(){
    const bortderInactive   = '#f0f0f0 solid 1px';
    const bortderActive     = 'rgba(173, 204, 225, 1)  solid 1px';
    const defaultBorder = this.isActive?bortderActive:bortderInactive;

    if (this.borderWidth>0 && this.borderStyle!='' && this.borderColor!=''){
      const _width =  this.borderWidth +'px';
      const _style =  this.borderStyle;
      const _color =  this.borderColor;
      
      const border =  _color + ' ' + _style + ' ' + _width;
     
      
      this._style['border-left']    = this.borderLeft?border:defaultBorder;
      this._style['border-top']     = this.borderTop?border:defaultBorder;
      this._style['border-right']   = this.borderRight?border:defaultBorder;
      this._style['border-bottom']  = this.borderBottom?border:defaultBorder;
    }else{
      this._style['border'] = defaultBorder;
    }
  }

  //agrega los estilos que permiten formatear el texto
  private setFormatText(){   
    this._style['font-size'] = (this.fontSize?this.fontSize:'12')+'pt';
    this._style['text-align'] = this.textAlign != ''? this.textAlign :'left';
    this._style['font-weight'] = this.bolder?'bolder':'';
    this._style['font-style'] = this.italic?'italic':'';
    this._style['text-decoration'] = this.underline?'underline':'';
    this._style['text-decoration'] = this._style['text-decoration'] + (this._style['text-decoration']!=''?' ':'')+ (this.strikethrough?'line-through':'');
  }

  private setColor(){
    this._style['background-color'] = this.backgroundColor != ''? this.backgroundColor :'transparent';
    this._style['color'] = this.textColor != ''? this.textColor :'#000000';
  }
}

export class CtrlLabel extends Ctrl {
  //textodel control
  constructor(){
    super();
  }
}

export class CtrlInput extends Ctrl {
  constructor(){
    super();
  }
}

export class CtrlImage extends Ctrl {}

export class CtrlTable extends Ctrl {}

export class CtrlChart extends Ctrl {}

export class CtrlBarCode extends Ctrl {}



export class SheetSectionContainer {
  name : string ;
  width: number;
  height: number;
  constructor(){
    this.name = '';
    this.width = 0;
    this.height = 0;
  }
}