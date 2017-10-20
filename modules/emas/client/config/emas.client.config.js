(function () {
  'use strict';

  angular
    .module('emas')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Assessments',
      state: 'emas',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'emas', {
      title: 'Emotional Maturity',
      state: 'emas.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'emas', {
      title: 'Romantic Attraction',
      state: 'emas.create',
      roles: ['user']
    });
  }
}());