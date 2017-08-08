import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { selectChoose } from 'power-select-test/tests/helpers/ember-power-select';

moduleForComponent('my-component', 'Integration | Component | my component', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{my-component}}`);

  selectChoose('.test-trigger', '.ember-power-select-option', 0);

  assert.equal(this.$('.selected-role').text().trim(), 'role1');
});
