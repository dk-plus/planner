const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.send();
});

app.get('/task/select', (req, res) => {
  res.send({
    "code": 0,
    "message": [{
      "taskId": 16,
      "perId": 3,
      "taskName": "学习java",
      "stageLevel": null,
      "startTime": "2018-02-23 10:00:00",
      "timeConsume": 7200000,
      "parentId": null,
      "state": 1
    },{
      "taskId": 16,
      "perId": 3,
      "taskName": "学习java",
      "stageLevel": null,
      "startTime": "2018-02-23 10:00:00",
      "timeConsume": 7200000,
      "parentId": null,
      "state": 1
      }, {
        "taskId": 16,
        "perId": 3,
        "taskName": "学习java",
        "stageLevel": null,
        "startTime": "2018-02-23 10:00:00",
        "timeConsume": 7200000,
        "parentId": null,
        "state": 1
      }, {
        "taskId": 16,
        "perId": 3,
        "taskName": "学习java",
        "stageLevel": null,
        "startTime": "2018-02-23 10:00:00",
        "timeConsume": 7200000,
        "parentId": null,
        "state": 1
      }, {
        "taskId": 16,
        "perId": 3,
        "taskName": "学习java",
        "stageLevel": null,
        "startTime": "2018-02-23 10:00:00",
        "timeConsume": 7200000,
        "parentId": null,
        "state": 1
      }, {
        "taskId": 16,
        "perId": 3,
        "taskName": "学习java",
        "stageLevel": null,
        "startTime": "2018-02-23 10:00:00",
        "timeConsume": 7200000,
        "parentId": null,
        "state": 1
      }, {
        "taskId": 16,
        "perId": 3,
        "taskName": "学习java",
        "stageLevel": null,
        "startTime": "2018-02-23 10:00:00",
        "timeConsume": 7200000,
        "parentId": null,
        "state": 1
      }]
  });
});


app.use((req, res) => {
  res.status(404);
  res.send({
    err: 'not found'
  });
});

app.listen(3000);
console.log('server running on port 3000, please open your broswer and enter in http://localhost:3000');