import BaseAPI from './base.api';

class TemplateAPI extends BaseAPI {
  getTemplateData() {
    return this._get('/ePNAVU1sgGtQ/data');
  }
}

export default new TemplateAPI('templates');
