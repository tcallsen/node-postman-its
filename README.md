# Automated Postman Integration Tests for a REST API

A project containing a Sample REST API and integration tests created in Postman. The Postman integration tests are designed to be executed from the command-line with [Newman](https://github.com/postmanlabs/newman).

## Building and Running the Sample REST API

The Sample REST API was created with the [Express Application Generator](https://expressjs.com/en/starter/generator.html), and returns sample hiking route data read from a static JSON file. It enforces HTTP Basic Auth looking for credentials `admin:admin`.

The build and run the API:

```
npm install
npm run
```

### Available Routes

Once running, the `/hikes/<route_id>` endpoint should be available as described below.

Request:

```
curl --location --request GET 'http://localhost:3000/hikes/215' \
--header 'Authorization: Basic YWRtaW46YWRtaW4='
```

Response:

```
{
    "route_id": 215,
    "title": "LA Topanga State Park Loop",
    "date_start": "2021-10-10T14:56:36-07:00",
    "stats": {
        "startTime": "2021-10-10T21:56:36Z",
        "endTime": "2021-10-11T00:29:14Z",
        "distance": 14.432459180004837,
        "duration": 9158000,
        "elevationGain": 3018.3411865234375
    }
}
```

## Integration Tests

Integration tests were created in a Postman Collection available [here](it/postman/integration_tests.postman_collection.json). Connection and authentication information pointing to the Sample REST API are defined at the Collection level, and can be overriden by modifying the appropriate values in an [environment file](it/postman/localhost-environment.json).

To execute the integration tests, ensure that the Sample REST API is running, [Newman is available](https://github.com/postmanlabs/newman#installation), and then run:

```
newman run it/postman/integration_tests.postman_collection.json -e it/postman/localhost-environment.json
```

This command, or similar, can also be used in CI Pipelines or other build processes.

## Supplemental Blog Post

Here is a blog post I created that explains the Postman integration test creation and execution in more detail: [https://taylor.callsen.me/automated-api-integration-tests-with-postman-and-newman/](https://taylor.callsen.me/automated-api-integration-tests-with-postman-and-newman/)