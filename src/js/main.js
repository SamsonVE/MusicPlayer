import _ from 'underscore';
import {Events} from 'backbone';
import Songs from './collections/Songs';
import SongView from './views/SongView';
import PlayerView from './views/PlayerView';
require('../scss/style.scss');
(function ()
{
  let setGlobalVariables = function ()
  {
    window.App = {};
    App.events = _.clone(Events);
  };


  let init = function ()
  {
    setGlobalVariables();
    let songsCollection = new Songs();
    new SongView({el: ".sm2-playlist-bd", collection: songsCollection});
    //new PlayerView({el: "#footer"});
  };

  window.addEventListener('load', init);
})();
