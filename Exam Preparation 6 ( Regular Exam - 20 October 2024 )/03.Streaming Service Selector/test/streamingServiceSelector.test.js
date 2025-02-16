import { assert } from "chai";
import { describe, it } from "mocha";
import streamingServiceSelector from "../streamingServiceSelector.js";


describe("streamingServiceSelector tests", function() {
    describe("selectingContent tests", function() {
        it("If all data is valid return the correct message", function() {
            let result = streamingServiceSelector.selectingContent('Movie', 'Cinema', 'Comedy' );
            let resultMsg = `You can watch this Comedy Movie on Cinema. Enjoy your Comedy-filled experience!`;
            assert.equal(result, resultMsg);

            let result1 = streamingServiceSelector.selectingContent('TV Show', 'Tablet', 'Horror' );
            let resultMsg1 = `You can watch this Horror TV Show on Tablet. Enjoy your Horror-filled experience!`;
            assert.equal(result1, resultMsg1);
        });

        it("If genre is incorrect throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.selectingContent('Movie', 'Cinema', 'Hentai' );
            }, Error, 'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
        });

        it("If type is incorrect throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.selectingContent('Documentary', 'Cinema', 'Sci-Fi' );
            }, Error, `We currently only support 'Movie' or 'TV Show' types.`);
        });

     });

     describe("availablePlatforms tests", function() {
        it("If all data is correct return the correct message", function() {
            let result = streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 1);
            let resultMsg = `Other available platforms are: Netflix, Disney+.`;
            assert.equal(result, resultMsg);
        });

        it("If platforms is not an array throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(null, 1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(undefined, 1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms('null', 1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(0, 1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms({}, 1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(false, 1);
            }, Error, 'Invalid platform selection.');
        });

        it("If selectedPlatformIndex is not an integer number throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 2.25);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], false);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], undefined);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], []);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], {});
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], null);
            }, Error, 'Invalid platform selection.');
        });

        it("If selectedPlatformIndex is a negative integer number throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -1);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -20);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], -1000000);
            }, Error, 'Invalid platform selection.');
        });

        it("If selectedPlatformIndex is an integer number bigger or equal to the platforms length throws an error", function() {
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 3);
            }, Error, 'Invalid platform selection.');
            assert.throws(() => {
                streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 20);
            }, Error, 'Invalid platform selection.');
        });
     });

     describe("contentRating tests", function() {
        it("If all data is valid and rating is equal or over 7 return the correct message", function() {
            let result = streamingServiceSelector.contentRating(120, 9);
            let resultMsg = `This content is highly rated (9/10) and has a runtime of 2.00 hours. Enjoy your watch!`;
            assert.equal(result, resultMsg);

            let result1 = streamingServiceSelector.contentRating(120, 7);
            let resultMsg1 = `This content is highly rated (7/10) and has a runtime of 2.00 hours. Enjoy your watch!`;
            assert.equal(result1, resultMsg1);
        });

        it("If all data is valid and rating is less than 7 return the correct message", function() {
            let result = streamingServiceSelector.contentRating(120, 5);
            let resultMsg = `This content has a lower rating (5/10) and runs for 2.00 hours. You might want to check reviews first.`;
            assert.equal(result, resultMsg);

            let result1 = streamingServiceSelector.contentRating(120, 6);
            let resultMsg1 = `This content has a lower rating (6/10) and runs for 2.00 hours. You might want to check reviews first.`;
            assert.equal(result1, resultMsg1);
        });

        it("If runtimeInMinutes is not a number throws an Error", function() {
            assert.throws(() => {
                streamingServiceSelector.contentRating(null, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating([], 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating({}, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(true, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(undefined, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating('null', 6);
            }, Error, 'Invalid runtime or rating.');
        });

        it("If runtimeInMinutes is a negative number or zero throws an Error", function() {
            assert.throws(() => {
                streamingServiceSelector.contentRating(-1, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(-20, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(-1000000, 6);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(0, 6);
            }, Error, 'Invalid runtime or rating.');
        });

        it("If viewerRating is not a number throws an Error", function() {
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, null);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, undefined);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, 'null');
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, true);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, []);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, {});
            }, Error, 'Invalid runtime or rating.');
           
        });

        it("If viewerRating is a negative number throws an Error", function() {
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, -1);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, -100);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, -10000);
            }, Error, 'Invalid runtime or rating.');
   
        });

        it("If viewerRating is a number bigger than 10 throws an Error", function() {
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, 11);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, 15);
            }, Error, 'Invalid runtime or rating.');
            assert.throws(() => {
                streamingServiceSelector.contentRating(120, 150);
            }, Error, 'Invalid runtime or rating.');
   
        });
     });

});
