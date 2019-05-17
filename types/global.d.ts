// Types for compiled templates
declare module 'ajax-app/templates/*' { 
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
