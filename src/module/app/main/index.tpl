
<div id="main" class="container">
  <div class="items">
  {{each data.message as item}}
    <div class="item">
      <div class="avater">
        <div class="image" ></div>
        <div class="mask" 
          data-id={{item.taskId}} 
          data-route="/step4" 
          data-complete="0" 
          data-url="/task/{{item.taskId}}" 
          style="background-color:
          {{if item.state==1}}#ff5722{{/if}}
          {{if item.state==2}}#4caf50{{/if}}
          "></div>
        <div class="title">{{item.taskName}}</div>
      </div>
      <p>当前阶段：
      {{if item.state === -2}}
      初始化
      {{/if}}
      {{if item.state === 0}}
      进行中
      {{/if}}
      {{if item.state === 1}}
      超时
      {{/if}}
      {{if item.state === 2}}
      已完成
      {{/if}}
      </p>
    </div>
  {{/each}}
    <div id="add" class="item">
      <div class="avater" data-route="/step1">
        +
      </div>
    </div>
  </div>
</div>