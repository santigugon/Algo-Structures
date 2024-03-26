export class AlgoDS {
  name: string;
  relevance: number;
  category: string;
  portrait: string;
  descriptions: string[];
  imgSrcs: string[];
  summary: string;

  constructor(
    name: string,
    relevance: number,
    category: string,
    portrait: string,
    descriptions: string[],
    imgSrcs: string[],
    summary: string
  ) {
    this.name = name;
    this.relevance = relevance;
    this.category = category;
    this.portrait = portrait;
    this.descriptions = descriptions;
    this.imgSrcs = imgSrcs;
    this.summary = summary;
  }

  getName() {
    return this.name;
  }
  getRelevance() {
    return this.relevance;
  }

  setRelevance(relevance: number) {
    this.relevance = relevance;
  }

  getCategory() {
    return this.category;
  }

  setCategory(category: string) {
    this.category = category;
  }

  getPortrait() {
    return this.portrait;
  }

  setPortrait(portrait: string) {
    this.portrait = portrait;
  }

  getDescriptions() {
    return this.descriptions;
  }

  setDescriptions(descriptions: string[]) {
    this.descriptions = descriptions;
  }

  getImgSrcs() {
    return this.imgSrcs;
  }

  setImgSrcs(imgSrcs: string[]) {
    this.imgSrcs = imgSrcs;
  }

  getSummary() {
    return this.summary;
  }

  setSummary(summary: string) {
    this.summary = summary;
  }
}
