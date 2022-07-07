# oppFi-rest-testing
OppFi REST Testing Framework


Requirements
-----------
```bash
node >= v17
```

Install
-------
```bash
git clone git@github.com:si-mikey/oppFi-rest-testing.git
cd oppFi-rest-testing/
npm install
```

Running tests
-------------
Running all API Tests for /offer
```bash
apiKey=xxxx-xxx-xxx-xxxx-xxxxxx testURL=https://xxxx.xxxx.xxx/xxx/xxx/xx/offer npm run test-all-offer
````
Running accepted tests
```bash
apiKey=xxxx-xxx-xxx-xxxx-xxxxxx testURL=https://xxxx.xxxx.xxx/xxx/xxx/xx/offer npm run test-offer-accept
```
Running declined tests
```bash
apiKey=xxxx-xxx-xxx-xxxx-xxxxxx testURL=https://xxxx.xxxx.xxx/xxx/xxx/xx/offer npm run test-offer-decline
```


