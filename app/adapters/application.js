import ENV from 'employee-forms/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,
});
