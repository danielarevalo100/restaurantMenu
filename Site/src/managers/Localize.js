/* managers */
//import { API_strings } from 'managers/Api';

export default class Localize {

  static current = Localize.current || new Localize();

  static key = (section, component, key, params = []) => {
    const {
      strings,
      language
    } = this.current;

    key = `kHistoryBook${section}${component}${key}`;

    if( strings[key] ) {
      var localizedText = strings[key];
      params.forEach((param, index) => {
        localizedText = localizedText.replace(`STR_${(index+1)}`, param);
      });
      return localizedText;
    }
    return key;
  }

  constructor() {
    this.language = 'en';
    this.strings = {};
    this.stringsAsJSON = {}
  }

  initialize(language = null) {
    this.strings = {}
    this.stringsAsJSON = {}
  }

}
