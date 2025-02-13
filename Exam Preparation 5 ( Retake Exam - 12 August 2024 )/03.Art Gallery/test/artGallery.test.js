import { assert } from "chai";
import { describe, it } from "mocha";
import artGallery from "../artGallery.js";


describe("artGallery Tests", function() {
    describe("addArtwork tests", function() {
        it("If all valid data is added return the appropriate message", function() {
            let result = artGallery.addArtwork('Painting1', '60 x 60', 'Picasso');
            let resultMsg = `Artwork added successfully: 'Painting1' by Picasso with dimensions 60 x 60.`;
            assert.equal(result, resultMsg);

            let result2 = artGallery.addArtwork('Painting3', '30 x 30', 'Monet');
            let resultMsg2 = `Artwork added successfully: 'Painting3' by Monet with dimensions 30 x 30.`;
            assert.equal(result2, resultMsg2);

            let result3 = artGallery.addArtwork('Painting2', '40 x 40', 'Van Gogh');
            let resultMsg3 = `Artwork added successfully: 'Painting2' by Van Gogh with dimensions 40 x 40.`;
            assert.equal(result3, resultMsg3);
        });

        it("If title is not string throw an Error", function() {     
            assert.throws(() => {
                artGallery.addArtwork(true, '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork({}, '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork(undefined, '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork(123, '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork([], '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork(null, '60 x 60', 'Picasso');
            }, Error, "Invalid Information!");
        });
        
        it("If artist is not string throw an Error", function() {     
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', 0);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', null);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', undefined);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', []);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', {});
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x 30', false);
            }, Error, "Invalid Information!");
        });

        it("If dimensions are invalid throw an Error", function() {     
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '-30 x 30', 'Picasso');
            }, Error, "Invalid Dimensions!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '30 x -2', 'Picasso');
            }, Error, "Invalid Dimensions!");
            assert.throws(() => {
                artGallery.addArtwork('Painting3', '-1200 x -1', 'Picasso');
            }, Error, "Invalid Dimensions!");

        });

        it("If artist is invalid throw an Error", function() {     
            assert.throws(() => {
                artGallery.addArtwork('Painting1', '20 x 20', 'Gosho');
            }, Error, "This artist is not allowed in the gallery!");
            assert.throws(() => {
                artGallery.addArtwork('Painting1', '60 x 60', 'Satan');
            }, Error, "This artist is not allowed in the gallery!");
            assert.throws(() => {
                artGallery.addArtwork('Painting1', '40 x 40', 'Lestat');
            }, Error, "This artist is not allowed in the gallery!");
        });
     });

     describe("calculateCosts Tests", function() {
        it("If all the data is valid and there is a sponsor(true) return the correct message", function() {
            let result = artGallery.calculateCosts(3, 3, true);
            let resultMsg = "Exhibition and insurance costs are 5.4$, reduced by 10% with the help of a donation from your sponsor."
            assert.equal(result, resultMsg);
        });

        it("If all the data is valid and there is no sponsor(false) return the correct message", function() {
            let result = artGallery.calculateCosts(3, 3, false);
            let resultMsg = "Exhibition and insurance costs are 6$."
            assert.equal(result, resultMsg);
        });

        it("If exibitionCosts is not a number throw an Error", function() {
            assert.throws(() => {
                artGallery.calculateCosts([], 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(null, 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(undefined, 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(true, 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts('3', 3, false);
            }, Error, "Invalid Information!");
        });

        it("If exibitionCosts is a negative number throw an Error", function() {
            assert.throws(() => {
                artGallery.calculateCosts(-1, 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(-10, 3, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(-1000, 3, false);
            }, Error, "Invalid Information!");
        });

        it("If insuranceCosts is not a number throw an Error", function() {
            assert.throws(() => {
                artGallery.calculateCosts(3, [], false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, null, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, {}, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, undefined, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, '3', false);
            }, Error, "Invalid Information!");
        });

        it("If insuranceCosts is a negative number throw an Error", function() {
            assert.throws(() => {
                artGallery.calculateCosts(3, -1, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, -10, false);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, -1000, false);
            }, Error, "Invalid Information!");

        });

        it("If sponsor is not a boolean throw an Error", function() {
            assert.throws(() => {
                artGallery.calculateCosts(3, 3, []);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, 3, {});
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, 3, null);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, 3, undefined);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.calculateCosts(3, 3, 'false');
            }, Error, "Invalid Information!");
        });
     });

     describe("organizeExhibits Tests", function() {
        it("If artworksCount and displaySpacesCount are valid and there are less than 5 artworks in a space", function() {
            let result = artGallery.organizeExhibits(3, 3);
            let resultMsg = `There are only 1 artworks in each display space, you can add more artworks.`;
            assert.equal(result, resultMsg);

            let result1 = artGallery.organizeExhibits(10, 10);
            let resultMsg1 = `There are only 1 artworks in each display space, you can add more artworks.`;
            assert.equal(result1, resultMsg1);
        });

        it("If artworksCount and displaySpacesCount are valid and there are more than 5 artworks in a space", function() {
            let result1 = artGallery.organizeExhibits(50, 5);
            let resultMsg1 = `You have 5 display spaces with 10 artworks in each space.`;
            assert.equal(result1, resultMsg1);

            let result2 = artGallery.organizeExhibits(100, 10);
            let resultMsg2 = `You have 10 display spaces with 10 artworks in each space.`;
            assert.equal(result2, resultMsg2);
        });

        it("If artworksCount is not number throw an Error", function() {     
            assert.throws(() => {
                artGallery.organizeExhibits('100', 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits([], 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(null, 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(undefined, 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits({}, 10);
            }, Error, "Invalid Information!");

        });

        it("If artworksCount is not positive number or is zero throw an Error", function() {     
            assert.throws(() => {
                artGallery.organizeExhibits(-10, 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(-100, 10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(0, 10);
            }, Error, "Invalid Information!");
        });

        it("If displaySpacesCount is not number throw an Error", function() {     
            assert.throws(() => {
                artGallery.organizeExhibits(10, '10');
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, []);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, null);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, undefined);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, {});
            }, Error, "Invalid Information!");

        });

        it("If displaySpacesCount is a negative number or zero throw an Error", function() {     
            assert.throws(() => {
                artGallery.organizeExhibits(10, -10);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, -100);
            }, Error, "Invalid Information!");
            assert.throws(() => {
                artGallery.organizeExhibits(10, 0);
            }, Error, "Invalid Information!");

        });
     });

});
