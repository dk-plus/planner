
<div id="main" class="container">
  <div class="items">
  {{each data.message as item}}
    <div class="item" data-route="/step4">
      <div class="avater" data-route="/step4">
        <div class="image"></div>
        <div class="mask" data-complete="0"></div>
        <div class="title">{{item.taskName}}</div>
      </div>
      <p>当前阶段：{{item.state}}</p>
    </div>
  {{/each}}
    <div id="add" class="item" data-route="/step1">
      <div class="avater" data-route="/step1">
        +
      </div>
    </div>
  </div>
</div>