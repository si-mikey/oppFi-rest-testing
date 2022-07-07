import axios from 'axios';
import { expect } from 'chai';
import config from '../config.js';
import offerData from './offerData.js';
import offerDeniedData from './offerDeniedData.js';
import offerBadData from './offerBadData.js';

const request = axios.create({
  baseURL: config.testURL,
  headers: {
      'x-api-key': config.apiKey,
      'Content-Type': 'application/json'
  },
  timeout: config.timeout,
  method: 'post'
});

describe('API tests for /offer endpoint @offer', function () {

  describe('Should return an accepted offer @offer-accept', function () {

    it('should return status code 201', async function () {
      const response = await request.post('', offerData);
      expect(response.data).to.include({'code': 201})
    });

    it('should return accepted as true', async function () {
      const response = await request.post('', offerData);
      expect(response.data).to.include({'accepted': true});
    });

    it('should return status as APPROVED', async function () {
      const response = await request.post('', offerData);
      expect(response.data).to.include({'status': 'APPROVED'});
    });

    it('should return offer object(s)', async function () {
      const response = await request.post('', offerData);
      expect(response.data.offers).to.be.an('array').that.is.not.empty
      expect(response.data.offers[0]).to.be.an('object').that.is.not.empty
    });
  });

  describe('Should declined a customer @offer-decline', function () {

    it('should return status code 315', async function () {
      const response = await request.post('', offerDeniedData);
      expect(response.data).to.include({'code': 315});
    });

    it('should return accepted false', async function () {
      const response = await request.post('', offerDeniedData);
      expect(response.data).to.include({'accepted': false});
    });

    it('should return status declined', async function () {
      const response = await request.post('', offerDeniedData);
      expect(response.data).to.include({'status': 'DECLINED'});
    });

  });

  describe('Should return error for malformed request data', function () {
    // Unable to return neighter accepted or declined
    // achieved via curl
    it('Should return status 500', async function () {
      offerBadData['socialSecurityNumber'] = 'a';
      offerBadData['leadOfferId'] = '-';
      offerBadData['email'] = ":-)";
      offerBadData['stateCode'] = 1;
      offerBadData['requestedLoanAmount'] = '&';
      offerBadData['grossMonthlyIncome'] = '`';
      const response = await request.post('', offerBadData);
      expect(response.data).to.include({'code': 500});
    });
  });
});
