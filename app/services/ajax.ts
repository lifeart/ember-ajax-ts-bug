import AjaxService from 'ember-ajax/services/ajax';
export default class Ajax extends AjaxService.extend({
  name: 'local-ajax'
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'ajax': Ajax;
  }
}
