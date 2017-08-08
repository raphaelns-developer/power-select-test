import Ember from 'ember';

export default Ember.Component.extend({
  roles: [
    { name: 'role1' },
    { name: 'role2' },
    { name: 'role3' }
  ],

  actions: {
    selectRoleChange(role) {
      this.set('selectedRole', role.name);
    }
  }
});
