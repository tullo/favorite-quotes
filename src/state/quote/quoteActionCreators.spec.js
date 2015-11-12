import expect from 'expect';
import {ADD_QUOTE_BY_ID, REMOVE_QUOTE_BY_ID, LIKE_QUOTE_BY_ID, UNLIKE_QUOTE_BY_ID} from '../ActionTypes';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from './quoteActionCreators';

describe('quote actions and action creators', () => {

  describe('addQuoteById', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        text: 'Lorem ipsum',
        author: 'Jane Doe',
        id: 1,
        likeCount: 7
      };
      const actual = addQuoteById(examplePayload);
      const expected = {
        type: ADD_QUOTE_BY_ID,
        payload: examplePayload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('removeQuoteById', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        id: 1
      };
      const actual = removeQuoteById(examplePayload);
      const expected = {
        type: REMOVE_QUOTE_BY_ID,
        payload: examplePayload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('likeQuoteById', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        id: 1
      };
      const actual = likeQuoteById(examplePayload);
      const expected = {
        type: LIKE_QUOTE_BY_ID,
        payload: examplePayload
      };
      expect(actual).toEqual(expected);
    });
  });

  describe('unlikeQuoteById', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        id: 1
      };
      const actual = unlikeQuoteById(examplePayload);
      const expected = {
        type: UNLIKE_QUOTE_BY_ID,
        payload: examplePayload
      };
      expect(actual).toEqual(expected);
    });
  });
});
