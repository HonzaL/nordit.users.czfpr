
CZFPR.Router.map(function() {
  this.resource('lang', {path: '/:lang_id'}, function() {
    this.resource('contracts', function() {
      this.resource('contract', {path: "/:contract_id"}, function() {
	this.resource('czfpr.main');
	this.resource('czfpr', function() {
	  this.route('graph');
	  this.route('graphHires');
	  this.route('alarms');
	  this.route('denniSpotreby');
	  this.route('download');
	});
      });
    });
  });
});

CZFPR.RootView = Ember.View.extend({
  init: function() {
    this._super();
    this.baseTemplateNameObserver();
  }
  , contract: 'czfpr'
  , baseTemplateNameObserver: function() {
    this.set('templateName', (this.baseTemplateName.match(/^\//) ? this.baseTemplateName : (this.contract + '||' + this.baseTemplateName)));
  }.observes('baseTemplateName')
})

CZFPR.CzfprMainView = CZFPR.RootView.extend({baseTemplateName: 'index/main'});
CZFPR.CzfprGraphView = CZFPR.RootView.extend({baseTemplateName: 'index/graph'});
CZFPR.CzfprGraphHiresView = CZFPR.RootView.extend({baseTemplateName: 'index/graphHires'});

// Filtry
CZFPR.MonthYearFilterView = CZFPR.RootView.extend({baseTemplateName: 'filter/monthYear'});

// Pohledy do ControlWebu
CZFPR.CzfprDenniSpotrebyView = CZFPR.DataDrivenTableView.extend({filterView: CZFPR.MonthYearFilterView});
CZFPR.CzfprDownloadView = CZFPR.RootView.extend({baseTemplateName: '/cw/eu/10420_Lomna/lomna_download_DCBP_u2.htm'});

// Pohledy odvozene od globalnich pohledu
CZFPR.CzfprAlarmsView = NU.AlarmsView.extend({});
