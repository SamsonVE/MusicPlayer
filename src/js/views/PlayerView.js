import {View} from 'backbone';
import _ from 'underscore';


//console.log(notes);
const PlayerView = View.extend({
  templateMatches: '',
    templateError: '',
    initialize: function ()
    {
        //Set templates to use later on
        // this.templateMatches = _.template(this.$('#template-player').html());
        // this.$el.html(this.templateMatches);
        //
        // $("#volume").slider({
        //    min: 0,
        //    max: 100,
        //    value: 100,
        //    range: "min",
        //    animate: true
        // });
        // var myMedia = document.createElement('audio');
        // $('#player').append(myMedia);
        // myMedia.id = "myMedia";
        // //playAudio('src/audio/01 Laat Het Branden');
        //
        // function playAudio(fileName) {
        //     var mediaExt = (myMedia.canPlayType('audio/mp3')) ? '.mp3' :
        //         '';
        //     if (mediaExt) {
        //         myMedia.src = fileName + mediaExt;
        //         myMedia.play();
        //     }
        // }
        //
        // function playOrPause() {
        //     if (!myMedia.paused) {
        //         $('#playbtn').attr('class', 'fa fa-play fa-lg');
        //         myMedia.pause();
        //
        //     } else {
        //         myMedia.play();
        //         $('#playbtn').attr('class', 'fa fa-pause fa-lg');
        //     }
        // }
        soundManager.setup({
         url: '/swf/',
         flashVersion: 9, // optional: shiny features (default = 8)
         // optional: ignore Flash where possible, use 100% HTML5 mode
         // preferFlash: false,
         onready: function() {
           // Ready to use; soundManager.createSound() etc. can now be called.
           
         }
        });
        //Listen to global events for change of new club
        //App.events.on('newClub', this.loadMatches, this);
        //this.loadMatches();
    }
});

export default PlayerView;
