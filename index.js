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
      "taskId": 17,
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

app.post('/task/new', (req, res) => {
  // console.log(req);
  res.send({
    code: 0
  });
});

app.get('/task/16', (req, res) => {
  res.send({
    "code": 0,
    "message": {
      "taskId": null,
      "perId": 16,
      "taskName": "学习java",
      "stageLevel": null,
      "startTime": "2018-02-23 10:00:00",
      "timeConsume": 7200000,
      "parentId": null,
      "state": 1,
      "taskList": [{
        "taskId": 17,
        "perId": 3,
        "taskName": "java基础",
        "stageLevel": 1,
        "startTime": "2018-02-23 11:00:00",
        "timeConsume": 36000,
        "parentId": 16,
        "state": -2
      }]
    }
  });
});

app.get('/task/17', (req, res) => {
  res.send({
    "code": 0,
    "message": {
      "taskId": null,
      "perId": 16,
      "taskName": "学习java",
      "stageLevel": null,
      "startTime": "2018-02-23 10:00:00",
      "timeConsume": 7200000,
      "parentId": null,
      "state": 1,
      "taskList": [{
        "taskId": 17,
        "perId": 3,
        "taskName": "java基础",
        "stageLevel": 1,
        "startTime": "2018-02-23 11:00:00",
        "timeConsume": 36000,
        "parentId": 16,
        "state": 1
      }, {
          "taskId": 17,
          "perId": 3,
          "taskName": "java基础",
          "stageLevel": 1,
          "startTime": "2018-02-23 11:00:00",
          "timeConsume": 36000,
          "parentId": 16,
          "state": 0
        }]
    }
  });
});

app.post('/login', (req, res) => {
  console.log('账号登录：'+req);
  res.send({
    code: -2
  });
});

app.post('/person/add', (req, res) => {
  res.send('注册成功');
});

app.use((req, res) => {
  res.status(404);
  res.send({
    err: 'not found'
  });
});

app.listen(3000);
console.log('server running on port 3000, please open your broswer and enter in http://localhost:3000');