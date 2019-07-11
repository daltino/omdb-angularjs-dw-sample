/* jshint -W117, -W030 */
describe('DashboardController', function() {
  var controller;
  var movies = mockData.getMockMovies();

  beforeEach(function() {
    bard.appModule('app.dashboard');
    bard.inject('$controller', '$log', '$q', '$window', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    sinon.stub(dataservice, 'getMovies').returns($q.when(movies));
    controller = $controller('DashboardController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Dashboard controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Dashboard', function() {
        expect(controller.title).to.equal('Dashboard');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have current movie', function() {
        expect(controller.currentMovie).to.not.be.empty;
      });

      it('should have movies count of 10', function() {
        expect(controller.movies).to.have.length(10);
      });
    });
  });
});
