import { Pipe, PipeTransform } from '@angular/core';
import { TransformFN, ValueOptions } from '../models/visualizer';

@Pipe({
  name: 'runTransform',
  standalone: true
})
export class RunTransformPipe implements PipeTransform {

  transform<TRet extends ValueOptions>(v:number, cb:TransformFN<TRet>): TRet {
    return cb(v);
  }

}
