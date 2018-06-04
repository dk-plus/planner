
    <div id="step4" class="container">
      {{each data.message.taskList as item index}}
      <div data-id={{item.taskId}}>
      {{if item.state >-2}}
      <p class="title">第{{index+1}}阶段</p>
      <div class="img-box">
        <p>小树正在茁壮成长中</p>
        <div class="img"></div>
      </div>
      <p>详细目标</p>
      <p>{{item.taskName}}</p>
      <div class="progress">
      {{if item.complete <= 100}}
        <div class="complete" style="width:{{item.complete}}%" data-complete={{item.state}}></div>
      {{/if}}
      {{if item.complete > 100}}
        <div class="complete" data-complete={{item.state}}></div>
      {{/if}}
      </div>
      <p>预计耗时</p>
      <p>{{item.timeConsume}}</p>
      {{if item.state <1}}
      <div class="full-btn finish" >提前完成</div>
      {{/if}}
      {{/if}}
      </div>
      {{/each}}
    </div>