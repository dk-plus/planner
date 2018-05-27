
<div id="main" class="container">
  <div class="items">
  {{each data.message as item}}
    <div class="item">
      <div class="avater">
        <div class="image"></div>
        <div class="mask" data-id={{item.taskId}} data-route="/step4" data-complete="0" data-url="/task/{{item.taskId}}"></div>
        <div class="title">{{item.taskName}}</div>
      </div>
      <p>当前阶段：{{item.state}}</p>
    </div>
  {{/each}}
    <div id="add" class="item">
      <div class="avater" data-route="/step1">
        +
      </div>
    </div>
  </div>
</div>