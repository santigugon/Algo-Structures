import { algoDS } from "./AlgoDS.ts";

export class Algorithm extends algoDS {
  inPlace: boolean;
  stable: boolean;
  avgTimeComplexity: string;
  worstTimeComplexity: string;
  constructor(
    name: string,
    relevance: number,
    category: string,
    portrait: string,
    descriptions: string[],
    imgSrcs: string[],
    summary: string,
    inPlace: boolean,
    stable: boolean,
    avgTimeComplexity: string,
    worstTimeComplexity: string
  ) {
    super(name, relevance, category, portrait, descriptions, imgSrcs, summary);
    this.inPlace = inPlace;
    this.stable = stable;
    this.avgTimeComplexity = avgTimeComplexity;
    this.worstTimeComplexity = worstTimeComplexity;
  }
  getInPlace() {
    return this.inPlace;
  }
  setInPlace(inPlace: boolean) {
    this.inPlace = inPlace;
  }
  getStable() {
    return this.stable;
  }
  setStable(stable: boolean) {
    this.stable = stable;
  }
  getAvgTimeComplexity() {
    return this.avgTimeComplexity;
  }
  setAvgTimeComplexity(avgTimeComplexity: string) {
    this.avgTimeComplexity = avgTimeComplexity;
  }
  getWorstTimeComplexity() {
    return this.worstTimeComplexity;
  }
  setWorstTimeComplexity(worstTimeComplexity: string) {
    this.worstTimeComplexity = worstTimeComplexity;
  }
}
