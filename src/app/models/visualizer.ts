export type ValueOptions = number | string 
export type TransformFN<T> = (v: number) => T

export enum VisualizerOptions {
    inner,
    bgc
} 

export class TransformsFNS{
    static toR:TransformFN<string> = (v) => `rgb(${v},0,0)`
    static toG:TransformFN<string> = (v) => `rgb(0,${v},0)`
    static toB:TransformFN<string> = (v) => `rgb(0,0,${v})`

    static toAscii:TransformFN<string> = (v) => String.fromCharCode(v)
    
    static toNumber:TransformFN<number> = (v) => v
}

export class Visualizer<T> {
    constructor(public transformFn: TransformFN<T>,public type:VisualizerOptions){}
}

export class Visualizers{
    static r = new Visualizer(TransformsFNS.toR, VisualizerOptions.bgc)
    static g = new Visualizer(TransformsFNS.toG, VisualizerOptions.bgc)
    static b = new Visualizer(TransformsFNS.toB, VisualizerOptions.bgc)
    static ascii = new Visualizer(TransformsFNS.toAscii, VisualizerOptions.inner)
    static number = new Visualizer(TransformsFNS.toNumber, VisualizerOptions.inner)
}