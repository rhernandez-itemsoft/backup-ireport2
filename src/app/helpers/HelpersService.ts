
import { PositionXY } from 'src/app/models/positionxy';

export class HelpersService {
  constructor() { }

  getPosition(element): PositionXY {
    let x = 0;
    let y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      x += element.offsetLeft - element.scrollLeft;
      y += element.offsetTop - element.scrollTop;
      element = element.offsetParent;
    }
    return new PositionXY(x, y);
  }

  pixelToCentimeter(_pixels: number): number {
    //1 PX	=	0.02645833 cm
    return ( _pixels * 0.02645833 / 1);
  }
  //pixelToMilimeter Convierte pixeles a milimetros
  pixelToMilimeter(_pixels: number): number {
    // Assuming the pixel density is 96 dpi, meaning that there are 96 pixels per inch. We know that 1 inch is equal to 25.4 mm. 
    // So there are 96 pixels per 25.4 mm. Than 1 pixel = (25.4 / 96) mm. Thus, there are 0.26458333 millimeters in a pixel.
    return ( _pixels * 0.264583333 / 1) ;
  }
  centimeterToPixel(_centimeters: number): number {
    //1 PX	=	0.02645833 cm
    return ( _centimeters * 1 / 0.02645833);
  }

  getTransformXY(obj): PositionXY
  {
    let response: PositionXY = new PositionXY(0,0);
    const transArr = [];
      if(!window.getComputedStyle) {
        return response;
      };

      const style:any = getComputedStyle(obj), transform = style.transform || style.webkitTransform || style.mozTransform;
      let mat = transform.match(/^matrix3d\((.+)\)$/); 

      if(mat) { 
        const positionArr = parseFloat(mat[1].split(', ')[13]);
        response = new PositionXY(positionArr[0], positionArr[1]);
        return response;
      }

      mat = transform.match(/^matrix\((.+)\)$/);
      mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
      mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;


      return new PositionXY(transArr[0], transArr[1]) ;
  }
  
}