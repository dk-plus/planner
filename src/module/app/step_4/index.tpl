
    <div id="step4" class="container">
      {{each data.message.taskList as item index}}
      {{if item.state === -2}}
      <p>第{{item.stageLevel}}阶段</p>
      <div class="img-box">
        <p>小树正在茁壮成长中</p>
        <div class="img"></div>
      </div>
      <p>详细目标</p>
      <p>{{item.taskName}}</p>
      <div class="progress">
        <div class="complete"></div>
      </div>
      <p>预计耗时</p>
      <p>{{item.timeConsume}}（剩余约2天2小时）</p>
      {{/if}}
      {{/each}}
      <div class="full-btn finish" data-route="/">提前完成</div>
    </div>