import {IArticle} from './IArticle';

export class News {
  /**
   *  보다 안정성 있게 set get 키워드를 사용하여 프로퍼티를 호출함
   */
  private _articles: IArticle[];
  constructor(public status:string, public source:string, public sortBy:string ){}

  get articles():IArticle[] {
    return this._articles;
  }

  set articles(value: IArticle[]){
    if(value.length > 0 ){
      this._articles = value;
    }
  }
}
