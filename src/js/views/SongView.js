import {View} from 'backbone';
import _ from 'underscore';
import Songs from '../collections/Songs';

//console.log(notes);
const SongView = View.extend({
  templateMatches: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateMatches = _.template(this.$('#template-matches').html());
        //this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new club
        //App.events.on('newClub', this.loadMatches, this);
        this.loadMatches();
    },

    /**
     * Wrapper function to load the matches through the collection
     *
     * @param data
     */
    loadMatches: function (data)
    {
        this.collection.fetch({
            success: (collection) => this.loadMatchesSuccessHandler(collection),
            error: (collection, response) => this.loadMatchesErrorHandler(collection, response),
            data: {
                league: data
            }
        });
    },

    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
     */
    loadMatchesSuccessHandler: function (collection)
    {
        this.$el.html(this.templateMatches({matches: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadMatchesErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default SongView;
