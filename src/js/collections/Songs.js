import {Collection} from 'backbone';
import Song from '../models/Song';

const Songs = Collection.extend({
  model: Song,
  url: 'http://localhost:8888/MusicPlayer/test.json'
});
export default Songs;
